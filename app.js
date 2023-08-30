const express = require("express")
const ejs = require("ejs")
const app = express()
const fs =require("fs")
const path =require("path")
const cron = require("node-cron")
const session = require('express-session');                                     
const MemoryStore = require('memorystore')(session);
const flash = require("express-flash")
const authenticateUser = require("./middleware/authenticate")
// const { index } = require("./controller/courseController")
const userRout = require("./routes.js/user_route")
const login_routes = require("./routes.js/login_routes")
const admin = require("./routes.js/admin_route")
const authenticateAdmin = require("./middleware/authenticateAdmin")
const fileupload = require("express-fileupload")
const Loan = require("./Model/loan")
const autoReminder = require("./mail/automaticMail")
const port = process.env.PORT || 4000;
// const { type } = require("os")

// session handler
app.use(session({
  cookie: { maxAge: 604800000 },
  store: new MemoryStore({
    checkPeriod: 604800000 // prune expired entries every 7days
  }),
  resave: false,
  secret: 'keyboard cat'
}))


// app.use(express.cookieParsewe)=
app.use(flash({locals:  "flash"}))
app.use(function(req, res, next){
    res.locals.formBody = req.session.formBody;
    res.locals.formError = req.session.formErrors;
    delete req.session.formBody;
    delete req.session.formErrors;

    next()
})
app.use(fileupload())
// express body passer
app.use(express.urlencoded({extended:true}))

// static file handler
app.use(express.json())
app.use(express.static(path.join(__dirname,"/assets")));
// template engine
app.set("view engine", "ejs")
app.set("views", "pages/")
// middleware
app.use(login_routes)
app.use("/user",authenticateUser,userRout)
app.use("/admin",authenticateAdmin,admin)





app.listen(port, (error)=>{
try {
  console.log(`server is running on port http://localhost:${port}`)
  
} catch (error) {
  console.log(error.status);
}
});



(async()=>{
  var clients = await Loan.fetchPatron()
  // console.log(clients);
  const first_Names = clients.map(c=>c.first_Name)
  const last_Names = clients.map(c=>c.last_Name)
  const emails = clients.map(c=>c.email)
  const titles = clients.map(c=>c.title)
  const due_dates = clients.map(c=>c.due_date);
  
  for (let i = 0;  i < due_dates.length; i++){
    
    const due_date = due_dates[i];
    const fullname = last_Names[i] + " " + first_Names[i];
    const email  = emails [i];
    const title = titles[i];
    var DeadlineDate = new Date(due_date);
    DeadlineDate.setDate(DeadlineDate.getDate()-1)
    cron.schedule(`${DeadlineDate.getMinutes()} ${DeadlineDate.getHours()} ${DeadlineDate.getDate()} ${DeadlineDate.getMonth( )+ 1} ${DeadlineDate.getDay()}`,()=>{
      autoReminder(email,fullname,title,due_date)
    })
  }
})()

