const Admin = require ("../Model/admin")

const getAccessAdmin = ((req, res)=>{
    res.render("admin/indexAdmin.ejs")})

const LoginAdmin = async(req, res)=>{
    console.log(req.body)
try {
    let  {email, password} = req.body
    let RegisterUser = await Admin.login(email, password)
    if(RegisterUser){
        req.session.admin = RegisterUser;
        res.redirect("/admin/home")
    }
    else{
        res.redirect("back")
    }

} catch (error) {
    console.log(error);
    
}

}



module.exports = {getAccessAdmin,LoginAdmin}