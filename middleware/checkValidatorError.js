const {validationResult} = require("express-validator")

module.exports = function checkValidator (req, res, next){
    const errors  = validationResult(req)
    if(!errors.isEmpty()){
        req.session.formBody = req.formBody;
        req.session.formError = errors.mapped();
        req.flash("danger", "there are errors in your forms")
        console.log("req.session.formBody");
        console.log("req.session.formBody");
        res.redirect("back")
         
    }
    else{
        next()
    }
}
