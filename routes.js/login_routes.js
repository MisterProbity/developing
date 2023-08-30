const { getAccessAdmin, LoginAdmin, indexAdmin } = require("../controller/adminCourseController");
const { getsignAdmin, addUserAdmin } = require("../controller/adminProgramController");
const { getAccess, Login, Home, index } = require("../controller/courseController");
const { getsign, addUser } = require("../controller/programsController");
const log = require("express").Router()

// user login pages
log.get("/login", getAccess)
log.post("/login",Login)
// LANDING PAGE user
log.get("/",index)
// create account routes
log.get("/signup", getsign)
log.post("/signup",addUser)

// admin login part
log.get("/admin/login", getAccessAdmin)
log.post("/admin/login",LoginAdmin)
// LANDING PAGE user
// create account routes
log.get("/admin/signup", getsignAdmin)
log.post("/admin/signup",addUserAdmin)

module.exports= log