const {Router} = require("express")
const {getAccess} = require("../controller/courseController.js")
const { getAbout, getHome, getProgramme, getLecturer, getOpac, getsign, getsignin,
getLoan, getAgric, getBiotechnology, getBiomedical, getCivil, getBiochemistry,
getBuildingTech, getChemical, getComputerEng, getComputerScience, getCyber,
getElectrical, getEstateMgt, getFoodScience, getForensic, getindustrial,
getIndustrialProduction, getMaths, getmechanical, getmechatronics,
getmicrobiology, getpetroleum, getphysics, getQuantity, getslt, getsoftware, 
getstatistics, getsurvey, geturban, getSearch, getSearchByAuthor, getSearchByYear,
getSearchBySubject, getAdminR, addUser, Home, getborrow, postBorrow } = require("../controller/programsController.js")
const { getArchitecture } = require("../controller/programsController.js")
const userRout = Router()



// Menu 
userRout.get("/about", getAbout)
userRout.get("/home", Home)
userRout.get("/program", getProgramme)
userRout.get("/loan", getLoan)
userRout.get("/borrow/:id", getborrow)
userRout.post("/borrow/:id", postBorrow)
userRout.get("/lecturer", getLecturer)
userRout.get("/opac", getOpac)

userRout.get("/Simplesearch", getSearch)
userRout.get("/searchAuthor", getSearchByAuthor)
userRout.get("/searchYear", getSearchByYear)
userRout.get("/searchSubject", getSearchBySubject)
userRout.get("/indexAdmin", getAdminR)


// courses 
userRout.get("/agric",getAgric)
userRout.get("/biomedical",getBiomedical)
userRout.get("/biotechnology",getBiotechnology)
userRout.get("/civil",getCivil)
userRout.get("/architecture",getArchitecture)
userRout.get("/biochemistry", getBiochemistry)
userRout.get("/buildingtech", getBuildingTech)
userRout.get("/chemical", getChemical)
userRout.get("/ComputerEngr", getComputerEng)
userRout.get("/computerScience", getComputerScience)
userRout.get("/cyber", getCyber)
userRout.get("/electrical", getElectrical)
userRout.get("/estateMgt", getEstateMgt)
userRout.get("/foodScience", getFoodScience)
userRout.get("/forensic", getForensic)
userRout.get("/industrial", getindustrial)
userRout.get("/industrialProduction", getIndustrialProduction)
userRout.get("/maths", getMaths)
userRout.get("/mechanical", getmechanical)
userRout.get("/mechatronics", getmechatronics)
userRout.get("/microbiology", getmicrobiology)
userRout.get("/petroleum", getpetroleum)
userRout.get("/physics", getphysics)
userRout.get("/quantity", getQuantity)
userRout.get("/slt", getslt)
userRout.get("/software", getsoftware)
userRout.get("/statistics", getstatistics)
userRout.get("/survey", getsurvey)
userRout.get("/urban", geturban)








module.exports = userRout;
