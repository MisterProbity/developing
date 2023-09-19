// admin part

const Admin = require("../Model/admin")
const Book = require("../Model/book")
const {resolve} = require("path")
const Loan = require("../Model/loan")
// const admin = require("../routes.js/admin_route")

const getAboutAdmin = async(req, res)=>{
    let admins = (await Admin.fetch())
    let count = admins.length 
    res.render("admin/about.ejs",{count})
}

const getAdminRAdmin = (req, res)=>{
    res.render("admin/indexAdmin.ejs")
}
const HomeAdmin = async(req, res)=>{
    let admins = (await Admin.fetch())
    let count = admins.length    
    res.render("admin/ProbityLMS.ejs",{count})
}
  


const getProgrammeAdmin = (req, res)=>{
    res.render("admin/programmes.ejs")
}
const getLoanAdmin= (req, res)=>{
    res.render("admin/loan.ejs")
}
const getOpacAdmin= (req, res)=>{
    res.render("admin/opac.ejs")
}

const getborrowAdmin= async(req, res)=>{
    let id = req?.params?.id
    let book = await Book.findId(id)
    let admin = req?.session?.admin;
let borrowers = await Loan.patron(book.programme)
    book.admin = await Admin.findId(book.admin_id)
    res.render("admin/bookDetails.ejs",{book, borrowers})
}

const getsignAdmin= (req, res)=>{
    res.render("admin/signUp.ejs")
}


const addUserAdmin = async(req, res)=>{ 
    console.log("for me", req.body);
    try {
    let user = new Admin(req.body) 
     await user.save()
   res.redirect("admin/home")
        
    } catch (error) {
        throw error;
        redirect("/admin/home")
    }

}
let indexAdmin = async(req, res)=>{
    let admins = (await Admin.fetch())
    let count = admins.length  
    res.render("admin/probityLMS.ejs",{count})
}
const getsigninAdmin= (req, res)=>{
    res.render("admin/index.ejs")
}

const getLecturerAdmin= (req, res)=>{
    res.render("admin/trainers.ejs")
}

const getSearchAdmin = (req,res)=>{
    res.render("admin/simplesearch")
}

const getSearchByYearAdmin = (req,res)=>{
    res.render("admin/searchYear.ejs")
}

const getSearchByAuthorAdmin = (req,res)=>{
    res.render("admin/searchAuthor.ejs")
}

const getSearchBySubjectAdmin = (req,res)=>{
    res.render("admin/searchSubject.ejs")
}


// courses 
const getAgricAdmin = async(req, res)=>{
    let id = req?.session?.admin?.id
    let AgeCourses = await Book.Fetchagriculture(id)
    res.render("admin/agric.ejs", {AgeCourses})
}

const addAgric = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Agricultural book added to the system successfully.");
        }
    


    }

const getArchitectureAdmin = async(req, res)=>{
    let id = req?.session?.admin?.id
    let architectureCourses = await Book.FetchArchi(id)
    res.render("admin/architecture.ejs", {architectureCourses})
}

const addArchitecture = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Architecture book added to the system successfully.");
        }
    

    }


const getBiochemistryAdmin = async (req, res)=>{
    let id = req?.session?.admin?.id
    let biochemistryCourses = await Book.FetchBiochem(id)
    res.render("admin/biochemistry.ejs",{biochemistryCourses})
}


const addBiochemistry = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Biochemistry book added to the system successfully.");
        }
    

    }



const getBiomedicalAdmin = async (req, res)=>{
    let id = req?.session?.admin?.id
    let biomedicalCourses = await Book.FetchBiomed(id)
    res.render("admin/biomedical.ejs", {biomedicalCourses})
}

const addBiomedical = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Biomedical book added to the system successfully.");
        }
    

    }



const getBiotechnologyAdmin = async(req, res)=>{
    let id = req?.session?.admin?.id
    let biotechnologyCourses = await Book.FetchBiotech(id)
    res.render("admin/biotechnology.ejs", {biotechnologyCourses})
}

const addBiotechnology = async(req, res)=>{
    
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Biotechnology book added to the system successfully.");
        }
    

    }


const getBuildingTechAdmin = async(req, res)=>{
    let id = req?.session?.admin?.id
    let buildingTechCourses = await Book.FetchBuilding(id)
    res.render("admin/buildingtech.ejs", {buildingTechCourses})
}

const addBuildingTech = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("BuildingTech book added to the system successfully.");
        }
    

    }


const getChemicalAdmin = async(req, res)=>{
    let id = req?.session?.admin?.id
    let chemicalCourses = await Book.FetchChem(id)
    res.render("admin/chemical.ejs", {chemicalCourses})
}

const addChemical = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Chemical book added to the system successfully.");
        }

    }

const getCivilAdmin = async(req, res)=>{
    let id = req?.session?.admin?.id
    let civilCourses = await Book.FetchCivil(id)
    res.render("admin/civil.ejs", {civilCourses})
}

const addCivil = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Civil book added to the system successfully.");
        }
    

    }

const getComputerEngAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let computerEngrCourses = await Book.FetchCompEng(id)
    res.render("admin/computerEngr.ejs", {computerEngrCourses})
}

const addComputerEng = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Computer Engineering book added to the system successfully.");
        }
    

    }

const getComputerScienceAdmin  = async (req, res)=>{
    let id = req?.session?.admin?.id
    let computerCourses = await Book.FetchComputer(id)
    res.render("admin/ComputerScience.ejs",{computerCourses})
}

const addComputerScience = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Computer Science book added to the system successfully.");
        }
    

    }


const getCyberAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let cyberCourses = await Book.FetchCyber(id)
    res.render("admin/cyber.ejs", {cyberCourses})
}

const addCyber = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Cyber Security book added to the system successfully.");
        }
    

    }


const getElectricalAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let electricCourses = await Book.FetchElect(id)
    res.render("admin/electrical.ejs", {electricCourses})
}

const addElectrical = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Electrical Engineering book added to the system successfully.");
        }
    

    }


const getEstateMgtAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let estateMgtCourses = await Book.FetchEstate(id)
    res.render("admin/estateMgt.ejs",{estateMgtCourses})
}

const addEstateMgt = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Estate Management book added to the system successfully.");
        }
    

    }

const getFoodScienceAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let foodScienceCourses = await Book.FetchFood(id)
    res.render("admin/foodScience.ejs", {foodScienceCourses})
}

const addFoodScience = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Food Science book added to the system successfully.");
        }
    

    }

const getForensicAdmin  =async(req, res)=>{
    let id = req?.session?.admin?.id
    let forensicCourses = await Book.FetchForensic(id)
    res.render("admin/forensic.ejs", {forensicCourses})
}

const addForensic = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Forensic Science book added to the system successfully.");
        }
    

    }


const getindustrialAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let industrialCourses = await Book.FetchIndustrial(id)
    res.render("admin/industrial.ejs", {industrialCourses})
}

const addindustrial = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Industrial Chemeistry book added to the system successfully.");
        }
    
    }



const getIndustrialProductionAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let industrialProductionCourses = await Book.FetchIndustrialPro(id)
    res.render("admin/industrialproduction.ejs", {industrialProductionCourses})
}

const addIndustrialProduction = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Industrial Engineering book added to the system successfully.");
        }
    

    }



const getMathsAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let mathsCourses = await Book.Fetchmth(id)
    res.render("admin/maths.ejs", {mathsCourses})
}

const addMaths = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Mathemeatics book added to the system successfully.");
        }
    
    }


const getmechanicalAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let mechanicalCourses = await Book.FetchMechanical(id)
    res.render("admin/mechanical.ejs", {mechanicalCourses})
}

const addmechanical = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Mechanical Engineeering book added to the system successfully.");
        }
    

    }


const getmechatronicsAdmin  =async (req, res)=>{
    let id = req?.session?.admin?.id
    let mechatronicsCourses = await Book.FetchMechatronics(id)
    res.render("admin/mechatronics.ejs", {mechatronicsCourses})
}

const addmechatronics = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Mechatronics Engineering book added to the system successfully.");
        }
    

    }


const getmicrobiologyAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let microbCourses = await Book.FetchMicro(id)
    res.render("admin/microbiology.ejs", {microbCourses})
}

const addmicrobiology = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Microbiology book added to the system successfully.");
        }
    

    }


const getpetroleumAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let petroleumCourses = await Book.FetchPetrol(id)
    res.render("admin/petroleum.ejs", {petroleumCourses})
}

const addpetroleum = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Petroleum Engineering book added to the system successfully.");
        }
    
    }


const getphysicsAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let physicsCourses = await Book.FetchPhy(id)
    res.render("admin/physics.ejs", {physicsCourses})
}

const addphysics = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Physics book added to the system successfully.");
        }
    
    }



const getQuantityAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let quantityCourses = await Book.FetchQuantity(id)
    res.render("admin/quantity.ejs", {quantityCourses})
}

const addQuantity = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Quantity Surveying book added to the system successfully.");
        }
    

    }



const getsltAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let sltCourses = await Book.FetchSlt(id)
    res.render("admin/slt.ejs", {sltCourses})
}

const addslt = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Science and Laboratory Tech book added to the system successfully.");
        }
    

    }



const getsoftwareAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let softwareEngCourses = await Book.FetchSoft(id)
    res.render("admin/software.ejs", {softwareEngCourses})
}

const addsoftware = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Software Engineering book added to the system successfully.");
        }
    

    }



const getstatisticsAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let statisticsCourses = await Book.FetchStat(id)
    res.render("admin/statistics.ejs", {statisticsCourses})
}

const addstatistics = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Statistics book added to the system successfully.");
        }
    

    }


const getsurveyAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let surveyCourses = await Book.FetchSurv(id)
    res.render("admin/survey.ejs", {surveyCourses})
}

const addsurvey = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Survey ans Geoinformatics book added to the system successfully.");
        }
    

    }

const geturbanAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let urbanCourses = await Book.FetchUrban(id)
    res.render("admin/urban.ejs", {urbanCourses})
}

const addurban = async(req, res)=>{
    let admin = req?.session?.admin?.id
    console.log(admin)
    
    let {document, author, issbn, location, year, programme, description} = req.body;
    let book = new Book(req.body)
    book.admin_id = admin;
    console.log(req.body);
    const documents = req.files.document
   
    if(documents){
        if(!documents.mimetype.startsWith("application/")){
            req.flash("Error", "only document are expected")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(req.body,documents)
        }
        if(documents.size > 5 * 1024 *1024 ){
            req.flash("Errors","File is too large. Maximum of 5mb is allowed")
            req.session.formBody = req.body
            req.session.formErrors = {}
            console.log(documents.size)

        }
        book.setObjProp(req.body);
        const fileName = `${(Math.random() * 10 ).toString(36) + Number(new Date())}.${documents.mimetype.split("/")[1]}` 
        console.log(fileName);
        let filePath = "file-upload/document/" + fileName
        console.log(filePath);

           documents.mv(resolve(filePath),(err)=>{
            if(!err){
                book.document = "/document/" + fileName
                book.admin_id = admin;
                book.save()
                console.log("saved in to the file");
                res.redirect("back")
            }
            else{
                req.flash("Error", "Unable to upload your file")
                req.session.formBody = req.body
                req.session.formErrors = {}
                console.log("unable to upload your file");
                return res.redirect("back")
            }
           })
        }else{
            book.admin_id = admin
            await book.save()
            res.redirect("back")
            console.log("Urban And Regional Planning book added to the system successfully.");
        }
    
    }



module.exports = {
    getAboutAdmin,getAdminRAdmin, getAgricAdmin,getArchitectureAdmin,getBiochemistryAdmin,
    getBiomedicalAdmin,getBiotechnologyAdmin,getBuildingTechAdmin,
    getChemicalAdmin,getCivilAdmin,getComputerEngAdmin,getComputerScienceAdmin,getCyberAdmin,
    getElectricalAdmin,getEstateMgtAdmin,getForensicAdmin,getIndustrialProductionAdmin,
    getLecturerAdmin,getLoanAdmin, getborrowAdmin, getOpacAdmin,getProgrammeAdmin,getSearchAdmin,getSearchByAuthorAdmin,
    getSearchBySubjectAdmin,getindustrialAdmin,getMathsAdmin,getmechanicalAdmin,getmechatronicsAdmin,getmicrobiologyAdmin,
    getpetroleumAdmin,getQuantityAdmin,getsurveyAdmin,getsoftwareAdmin,geturbanAdmin,getsltAdmin,getstatisticsAdmin,getsignAdmin,
    getSearchByYearAdmin,getFoodScienceAdmin,getphysicsAdmin,HomeAdmin,addUserAdmin,indexAdmin,
    addBiochemistry, addAgric,addArchitecture,addBiotechnology,
    addBiomedical,addBuildingTech,addChemical,addCivil,addComputerEng,addComputerScience,addCyber,
    addElectrical,addEstateMgt,addForensic,addIndustrialProduction,addFoodScience,addindustrial,
    addMaths,addmechanical,addmechatronics,addmicrobiology,addpetroleum, addphysics,addQuantity,
    addslt,addsoftware,addstatistics,addsurvey,addurban}