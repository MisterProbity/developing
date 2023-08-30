const authenticateUser = (req, res, next)=>{
    if(req.session.user){
        next()
        // console.log("authentiacte");
    }else{
        req.session.intent = req.path
        res.redirect("/login")
        // console.log("email or password is not correct");
    }
}
module.exports = authenticateUser