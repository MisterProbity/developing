const Admin = require("../Model/admin")
const Book = require("../Model/book")
const Loan = require("../Model/loan")
const User = require("../Model/user")

// user part
const getAbout = async(req, res)=>{
    let users = await User.fetch()
    let count = users.length    
    res.render("about.ejs", {count})
}

const getAdminR = (req, res)=>{
    res.render("indexAdmin.ejs")
}
const Home = async(req, res)=>{
    let users = await User.fetch()
    let count = users.length    
    res.render("ProbityLMS.ejs",{count})
}

const getProgramme = (req, res)=>{
    res.render("programmes.ejs")
}
const getLoan= (req, res)=>{
    res.render("loan.ejs")
}
const getOpac= (req, res)=>{
    res.render("opac.ejs")
}
const getsign= (req, res)=>{
    res.render("signUp.ejs")
}
const addUser = async(req, res)=>{
    console.log("for me", req.body);
    try {
    let user = new User(req.body) 
     await user.save()
   res.redirect("/user/login")
        
    } catch (error) {
        throw error;
        redirect("back")
    }

}

const getsignin= (req, res)=>{
    res.render("index.ejs")
}


const getLecturer= (req, res)=>{
    res.render("trainers.ejs")
}

const getSearch = (req,res)=>{
    res.render("simplesearch")
}

const getborrow = async(req,res)=>{
    
    let id = req?.params?.id
    let book = await Book.findId(id)
    let user = req?.session?.user;

    book.user = await User.findId(book.user_id)

    res.render("borrow",{book})
}

const postBorrow = async(req, res)=>{
    let user = req?.session?.user;
    let id = req?.params?.id;
    let book = await Book.findId(id)
    let loan = new Loan(req.body);
    loan.user_id = user?.id;
    loan.admin_id = book.admin_id;
    loan.book_id = book.id;
    loan.date_borrowed = new Date().toDateString();
    loan.due_date = new Date(Number(new Date()) + ( 7 * 24*60*60*1000)).toDateString();
    await loan.save()
    res.redirect("/user/home/")


}

const getSearchByYear = (req,res)=>{
    res.render("searchYear.ejs")
}

const getSearchByAuthor = (req,res)=>{
    res.render("searchAuthor.ejs")
}

const getSearchBySubject = (req,res)=>{
    res.render("searchSubject.ejs")
}


// courses 
const getAgric = async(req, res)=>{
    let AgeCourses = await Book.Fetchagriculture()
    console.log(AgeCourses);
    for (let book of AgeCourses){
        book.user = await User.findId(book.user_id)
    }

    res.render("agric.ejs", {AgeCourses})
}

const getArchitecture = async(req, res)=>{
    let architectureCourses = await Book.FetchAllArchi()
    for (let book of architectureCourses){
        book.user = await User.findId(book.user_id)
    }

    res.render("architecture.ejs", {architectureCourses})
}

const getBiochemistry = async(req, res)=>{
    let biochemistryCourses = await Book.FetchAllBiochem()

    for (let book of biochemistryCourses){
        book.user = await User.findId(book.user_id)
    }

    res.render("biochemistry.ejs",{biochemistryCourses})
}

const getBiomedical = async(req, res)=>{
    let biomedicalCourses = await Book.FetchAllBiomed()
    for (let book of biomedicalCourses){
        book.user = await User.findId(book.user_id)
    }

    res.render("biomedical.ejs", {biomedicalCourses})
}
const getBiotechnology = async(req, res)=>{
    let biotechnologyCourses = await Book.FetchAllBiotech()
    for (let book of biotechnologyCourses){
        book.user = await User.findId(book.user_id)
    }

    res.render("biotechnology.ejs", {biotechnologyCourses})
}

const getBuildingTech = async(req, res)=>{
    let buildingTechCourses = await Book.FetchAllBuilding()
    for (let book of buildingTechCourses){
        book.user = await User.findId(book.user_id)
    }
    res.render("buildingtech.ejs", {buildingTechCourses})
}
const getChemical = async(req, res)=>{
    let chemicalCourses = await Book.FetchAllChem()
    for (let book of chemicalCourses){
        book.user = await User.findId(book.user_id)
    }

    res.render("chemical.ejs", {chemicalCourses})
}

const getCivil = async(req, res)=>{
    let civilCourses = await Book.FetchAllCivil()
    for (let book of civilCourses){
        book.user = await User.findId(book.user_id)
    }

    res.render("civil.ejs", {civilCourses})
}

const getComputerEng  = async(req, res)=>{
    let computerEngrCourses = await Book.FetchAllCompEng()
    for (let book of computerEngrCourses){
        book.user = await User.findId(book.user_id)
    }

    res.render("computerEngr.ejs", {computerEngrCourses})
}

const getComputerScience  = async(req, res)=>{
    let computerCourses= await Book.FetchAllComputer()
    for (let book of computerCourses){
        book.user = await User.findId(book.user_id)
    }
    res.render("computerScience.ejs",{computerCourses})
}

const getCyber  = async(req, res)=>{
    let cyberCourses = await Book.FetchAllCyber()
    for (let book of cyberCourses){
        book.user = await User.findId(book.user_id)
    }

    res.render("cyber.ejs", {cyberCourses})
}

const getElectrical  = async(req, res)=>{
    let electricCourses = await Book.FetchAllElect()
    for (let book of electricCourses){
        book.user = await User.findId(book.user_id)
    }

    res.render("electrical.ejs", {electricCourses})
}

const getEstateMgt  = async(req, res)=>{
    let estateMgtCourses = await Book.FetchAllEstate()
    for (let book of estateMgtCourses){
        book.user = await User.findId(book.user_id)
    }

    res.render("estateMgt.ejs", {estateMgtCourses})
}

const getFoodScience  = async(req, res)=>{
    let foodScienceCourses = await Book.FetchAllFood()
    for (let book of foodScienceCourses){
        book.user = await User.findId(book.user_id)
    }

    res.render("foodScience.ejs", {foodScienceCourses})
}

const getForensic  = async(req, res)=>{
    let forensicCourses = await Book.FetchAllForensic()
    for (let book of forensicCourses){
        book.user = await User.findId(book.user_id)
    }

    res.render("forensic.ejs", {forensicCourses})
}

const getindustrial  = async(req, res)=>{
    let industrialCourses = await Book.FetchAllIndustrial()
    for (let book of industrialCourses){
        book.user = await User.findId(book.user_id)
    }

    res.render("industrial.ejs", {industrialCourses})
}

const getIndustrialProduction  = async(req, res)=>{
    let industrialProductionCourses = await Book.FetchAllIndustrialPro()
    for (let book of industrialProductionCourses){
        book.user = await User.findId(book.user_id)
    }

    res.render("industrialproduction.ejs", {industrialProductionCourses})
}

const getMaths  = async(req, res)=>{
    let mathsCourses = await Book.FetchAllmth()
    for (let book of mathsCourses){
        book.user = await User.findId(book.user_id)
    }

    res.render("maths.ejs", {mathsCourses})
}

const getmechanical  = async(req, res)=>{
    let mechanicalCourses = await Book.FetchAllMechanical()
    for (let book of mechanicalCourses){
        book.user = await User.findId(book.user_id)
    }

    res.render("mechanical.ejs", {mechanicalCourses})
}

const getmechatronics  = async(req, res)=>{
    let mechatronicsCourses = await Book.FetchAllMechatronics()
    for (let book of mechatronicsCourses){
        book.user = await User.findId(book.user_id)
    }

    res.render("mechatronics.ejs", {mechatronicsCourses})
}

const getmicrobiology  = async(req, res)=>{
    let microbCourses = await Book.FetchAllMicro()
    for (let book of microbCourses){
        book.user = await User.findId(book.user_id)
    }

    res.render("microbiology.ejs", {microbCourses})
}

const getpetroleum  = async(req, res)=>{
    let petroleumCourses = await Book.FetchAllPetrol()
    for (let book of petroleumCourses){
        book.user = await User.findId(book.user_id)
    }

    res.render("petroleum.ejs", {petroleumCourses})
}

const getphysics  = async(req, res)=>{
    let physicsCourses = await Book.FetchAllPhy()
    for (let book of physicsCourses){
        book.user = await User.findId(book.user_id)
    }

    res.render("physics.ejs", {physicsCourses})
}

const getQuantity  = async(req, res)=>{
    let quantityCourses = await Book.FetchAllQuantity()
    for (let book of quantityCourses){
        book.user = await User.findId(book.user_id)
    }

    res.render("quantity.ejs", {quantityCourses})
}

const getslt  = async(req, res)=>{
    let sltCourses = await Book.FetchAllSlt()
    for (let book of sltCourses){
        book.user = await User.findId(book.user_id)
    }

    res.render("slt.ejs", {sltCourses})
}

const getsoftware  = async(req, res)=>{
    let softwareEngCourses = await Book.FetchAllSoft()
    for (let book of softwareEngCourses){
        book.user = await User.findId(book.user_id)
    }

    res.render("software.ejs", {softwareEngCourses})
}

const getstatistics  = async(req, res)=>{
    let statisticsCourses = await Book.FetchAllStat()
    for (let book of statisticsCourses){
        book.user = await User.findId(book.user_id)
    }

    res.render("statistics.ejs", {statisticsCourses})
}

const getsurvey  = async(req, res)=>{
    let surveyCourses = await Book.FetchAllSurv()
    for (let book of surveyCourses){
        book.user = await User.findId(book.user_id)
    }

    res.render("survey.ejs", {surveyCourses})
}

const geturban  = async(req, res)=>{
    let urbanCourses = await Book.FetchAllUrban()
    for (let book of urbanCourses){
        book.user = await User.findId(book.user_id)
    }

    res.render("urban.ejs", {urbanCourses})
}



module.exports = { getAbout,postBorrow, getAdminR, getProgramme, getLoan, getborrow, getOpac, getsign, getsignin,
getLecturer, getSearch, getSearchByAuthor, getSearchBySubject, getSearchByYear,
 getAgric, getBiomedical,getBiotechnology, getArchitecture, getCivil, getBiochemistry,
getBuildingTech, getChemical, getComputerEng,getComputerScience, getCyber, getElectrical,
getEstateMgt, getForensic, getIndustrialProduction, getFoodScience, getindustrial, 
getMaths, getmechanical, getmechatronics, getmicrobiology, getpetroleum, getphysics,
getQuantity, getslt, getsoftware, getstatistics, getsurvey, geturban,addUser,Home}