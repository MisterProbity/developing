const {Router} = require("express");
const { getAdmin } = require("../controller/programsController");
const { getAboutAdmin, getProgrammeAdmin, getLoanAdmin, getborrowAdmin, getLecturerAdmin, getOpacAdmin, getSearchAdmin, 
     getSearchByAuthorAdmin, getSearchByYearAdmin, getSearchBySubjectAdmin, getAdminRAdmin, getAgricAdmin,
     getBiotechnologyAdmin, getBiomedicalAdmin, getCivilAdmin, getArchitectureAdmin, getBiochemistryAdmin,
     getBuildingTechAdmin, getChemicalAdmin, getComputerEngAdmin, getComputerScienceAdmin, getCyberAdmin,
     getElectricalAdmin, getEstateMgtAdmin, getFoodScienceAdmin, getForensicAdmin, getindustrialAdmin, 
     getIndustrialProductionAdmin, getMathsAdmin, getmechanicalAdmin, getmechatronicsAdmin, getmicrobiologyAdmin,
     getpetroleumAdmin, getphysicsAdmin, getQuantityAdmin, getsltAdmin, getsoftwareAdmin, getstatisticsAdmin,
     getsurveyAdmin, geturbanAdmin, HomeAdmin, indexAdmin, addBiochemistry, addArchitecture, addAgric,
      addBiomedical, addBiotechnology, addCivil, addBuildingTech, addChemical, addComputerEng, 
      addComputerScience, addCyber, addEstateMgt, addFoodScience, addForensic, addindustrial,
      addIndustrialProduction, addMaths, addmechanical, addmechatronics, addmicrobiology, addpetroleum, 
      addphysics, addQuantity, addslt, addsoftware, addstatistics, addsurvey, addurban, addElectrical, } = require("../controller/adminProgramController");
const admin = Router()

// 
admin.get("/admin", getAdminRAdmin)
// Menu 
admin.get("/about", getAboutAdmin)
admin.get("/home", HomeAdmin)
admin.get("/program", getProgrammeAdmin)
admin.get("/loan", getLoanAdmin)
admin.get("/borrow/:id", getborrowAdmin)
admin.get("/lecturer", getLecturerAdmin)
admin.get("/opac", getOpacAdmin)
admin.get("",indexAdmin)
admin.get("/Simplesearch", getSearchAdmin)
admin.get("/searchAuthor", getSearchByAuthorAdmin)
admin.get("/searchYear", getSearchByYearAdmin)
admin.get("/searchSubject", getSearchBySubjectAdmin)
admin.get("/indexAdmin", getAdminRAdmin)



// courses admin/
admin.get("/agric",getAgricAdmin)
admin.post("/agric",addAgric)

admin.get("/biomedical",getBiomedicalAdmin)
admin.post("/biomedical",addBiomedical)


admin.get("/biotechnology",getBiotechnologyAdmin)
admin.post("/biotechnology",addBiotechnology)


admin.get("/civil",getCivilAdmin)
admin.post("/civil",addCivil)


admin.get("/architecture",getArchitectureAdmin)
admin.post("/architecture",addArchitecture)

admin.get("/biochemistry", getBiochemistryAdmin)
admin.post("/biochemistry", addBiochemistry)

admin.get("/buildingtech", getBuildingTechAdmin)
admin.post("/buildingtech",addBuildingTech)

admin.get("/chemical", getChemicalAdmin)
admin.post("/chemical",addChemical)


admin.get("/computerEngr", getComputerEngAdmin)
admin.post("/computerEngr",addComputerEng)


admin.get("/computerScience", getComputerScienceAdmin)
admin.post("/computerScience",addComputerScience)

admin.get("/cyber", getCyberAdmin)
admin.post("/cyber",addCyber)

admin.get("/elctrical", getElectricalAdmin)
admin.post("/electrical",addElectrical)


admin.get("/estateMgt", getEstateMgtAdmin)
admin.post("/estateMgt",addEstateMgt)

admin.get("/foodScience", getFoodScienceAdmin)
admin.post("/foodScience",addFoodScience)

admin.get("/forensic", getForensicAdmin)
admin.post("/forensic",addForensic)

admin.get("/industrial", getindustrialAdmin)
admin.post("/industrial",addindustrial)

admin.get("/industrialProduction", getIndustrialProductionAdmin)
admin.post("/industrialProduction",addIndustrialProduction)

admin.get("/maths", getMathsAdmin)
admin.post("/maths",addMaths)

admin.get("/mechanical", getmechanicalAdmin)
admin.post("/mechanical",addmechanical)

admin.get("/mechatronics", getmechatronicsAdmin)
admin.post("/mechatronics",addmechatronics)

admin.get("/microbiology", getmicrobiologyAdmin)
admin.post("/microbiology",addmicrobiology)

admin.get("/petroleum", getpetroleumAdmin)
admin.post("/petroleum",addpetroleum)

admin.get("/physics", getphysicsAdmin)
admin.post("/physics",addphysics)

admin.get("/quantity", getQuantityAdmin)
admin.post("/quantity",addQuantity)

admin.get("/slt", getsltAdmin)
admin.post("/slt",addslt)

admin.get("/software", getsoftwareAdmin)
admin.post("/software",addsoftware)

admin.get("/statistics", getstatisticsAdmin)
admin.post("/statistics",addstatistics)

admin.get("/survey", getsurveyAdmin)
admin.post("/survey",addsurvey)

admin.get("/urban", geturbanAdmin)
admin.post("/urban",addurban)




module.exports= admin;