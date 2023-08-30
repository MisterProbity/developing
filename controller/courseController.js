const User = require("../Model/user");



const getAccess = ((req, res)=>{
    res.render("index.ejs")})

const Login = async(req, res)=>{
    console.log(req.body)
try {
    let  {email, password} = req.body
    let RegisterUser = await User.login(email, password)
    if(RegisterUser){
        req.session.user = RegisterUser;
        console.log('you are welcome');
        res.redirect("/user/home")
    }
    else{
        console.log("email or password is wrong");
        console.log(password);
        res.redirect("back")
    }

} catch (error) {
    console.log(error);
    
}

}
let index = async(req, res)=>{
    let users = (await User.fetch())
    let count = users.length  
    res.render("ProbityLMS.ejs",{count})
}



module.exports = {getAccess,Login,index}