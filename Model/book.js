const Model = require("./model");
const conn = require("./connection")


class Book extends Model{
// biochemistry
      static async FetchBiochem(id){
        let biochemResult = []
        let sql = `SELECT * FROM books WHERE (programme = "Biochemistry") AND (admin_id = ?) `
        let [results] = await conn.execute(sql, [id])
        for(const result of results){
            biochemResult.push(new this(result))
        } 
   return biochemResult;


     }
     static async FetchAllBiochem(){
        let biochemResult = []
        let sql = `SELECT * FROM books WHERE (programme = "Biochemistry")`
        let [results] = await conn.execute(sql)
        for(const result of results){
            biochemResult.push(new this(result))
        } 
   return biochemResult;
   
   
}
// end of biochemistry
// computer science

static async FetchComputer(id){
    let computerResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Computer Science") AND (admin_id = ?) `
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        computerResult.push(new this(result))
    } 
return computerResult;


 }
 static async FetchAllComputer(){
    let computerResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Computer Science")  `
    let [results] = await conn.execute(sql)
    for(const result of results){
        computerResult.push(new this(result))
    } 
 return computerResult;
     
     
}
// end of computer science

static async Fetchagriculture(id){
    let AgricResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Agricultural Engineering") AND (admin_id = ?) `
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        AgricResult.push(new this(result))
    } 
return AgricResult;
 }


static async FetchArchi(id){
    let ArchiResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Architecture") AND (admin_id = ?) `
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        ArchiResult.push(new this(result))
    } 
return ArchiResult;


 }
 static async FetchAllArchi(){
    let ArchiResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Architecture")`
    let [results] = await conn.execute(sql)
    for(const result of results){
        ArchiResult.push(new this(result))
    } 
return ArchiResult;
 }

static async FetchBiomed(id){
    let BiomedResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Biomedical Engineering") AND (admin_id = ?)`
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        BiomedResult.push(new this(result))
    } 
return BiomedResult;


 }
 static async FetchAllBiomed(){
    let BiomedResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Biomedical Engineering")  `
    let [results] = await conn.execute(sql)
    for(const result of results){
        BiomedResult.push(new this(result))
    } 
return BiomedResult;


}

static async FetchBiotech(id){
    let BiotechResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Biotechnology") AND (admin_id = ?) `
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        BiotechResult.push(new this(result))
    } 
return BiotechResult;


 }
 static async FetchAllBiotech(){
    let BiotechResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Biotechnology")  `
    let [results] = await conn.execute(sql)
    for(const result of results){
        BiotechResult.push(new this(result))
    } 
return BiotechResult;


}


static async FetchBuilding(id){
    let BuildingResult = []
    let sql = `SELECT * FROM books WHERE (programme = "BuildingTech") AND (admin_id = ?) `
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        BuildingResult.push(new this(result))
    } 
return BuildingResult;


 }
 static async FetchAllBuilding(){
    let BuildingResult = []
    let sql = `SELECT * FROM books WHERE (programme = "BuildingTech")  `
    let [results] = await conn.execute(sql)
    for(const result of results){
        BuildingResult.push(new this(result))
    } 
return BuildingResult;


}

static async FetchChem(id){
    let ChemResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Chemical Engineering") AND (admin_id = ?) `
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        ChemResult.push(new this(result))
    } 
return ChemResult;


 }
 static async FetchAllChem(){
    let ChemResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Chemical Engineering")  `
    let [results] = await conn.execute(sql)
    for(const result of results){
        ChemResult.push(new this(result))
    } 
return ChemResult;


}

static async FetchCivil(id){
    let CivilResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Civil Engineering") AND (admin_id = ?) `
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        CivilResult.push(new this(result))
    } 
return CivilResult;


 }
 static async FetchAllCivil(){
    let CivilResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Civil Engineering")  `
    let [results] = await conn.execute(sql)
    for(const result of results){
        CivilResult.push(new this(result))
    } 
return CivilResult;


}

static async FetchCompEng(id){
    let ComputerEngrResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Computer Engineering") AND (admin_id = ?) `
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        ComputerEngrResult.push(new this(result))
    } 
return ComputerEngrResult;


 }
 static async FetchAllCompEng(){
    let ComputerEngrResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Computer Engineering")  `
    let [results] = await conn.execute(sql)
    for(const result of results){
        ComputerEngrResult.push(new this(result))
    } 
return ComputerEngrResult;


}


static async FetchCyber(id){
    let CyberResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Cyber Security") AND (admin_id = ?) `
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        CyberResult.push(new this(result))
    } 
return CyberResult;


 }
 static async FetchAllCyber(){
    let CyberResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Cyber Security")  `
    let [results] = await conn.execute(sql)
    for(const result of results){
        CyberResult.push(new this(result))
    } 
return CyberResult;


}


static async FetchElect(id){
    let ElectResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Electrical Engineering") AND (admin_id = ?) `
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        ElectResult.push(new this(result))
    } 
return ElectResult;


 }
 static async FetchAllElect(){
    let ElectResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Electrical Engineering")  `
    let [results] = await conn.execute(sql)
    for(const result of results){
        ElectResult.push(new this(result))
    } 
return ElectResult;


}

static async FetchEstate(id){
    let EstateResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Estate Management") AND (admin_id = ?) `
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        EstateResult.push(new this(result))
    } 
return EstateResult;


 }
 static async FetchAllEstate(){
    let EstateResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Estate Management")  `
    let [results] = await conn.execute(sql)
    for(const result of results){
        EstateResult.push(new this(result))
    } 
return EstateResult;


}

static async FetchFood(id){
    let FoodResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Food Science and Technology") AND (admin_id = ?) `
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        FoodResult.push(new this(result))
    } 
return FoodResult;


 }
 static async FetchAllFood(){
    let FoodResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Food Science and Technology")  `
    let [results] = await conn.execute(sql)
    for(const result of results){
        FoodResult.push(new this(result))
    } 
return FoodResult;


}

static async FetchForensic(id){
    let ForensicResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Forensic Science") AND (admin_id = ?) `
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        ForensicResult.push(new this(result))
    } 
return ForensicResult;


 }
 static async FetchAllForensic(){
    let ForensicResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Forensic Science")  `
    let [results] = await conn.execute(sql)
    for(const result of results){
        ForensicResult.push(new this(result))
    } 
return ForensicResult;


}

static async FetchIndustrial(id){
    let IndustrialResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Industrial Chemistry") AND (admin_id = ?) `
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        IndustrialResult.push(new this(result))
    } 
return IndustrialResult;


 }
 static async FetchAllIndustrial(){
    let IndustrialResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Industrial Chemistry")  `
    let [results] = await conn.execute(sql)
    for(const result of results){
        IndustrialResult.push(new this(result))
    } 
return IndustrialResult;


}

static async FetchIndustrialPro(id){
    let IndustrialProResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Industrial engineering and Production") AND (admin_id = ?) `
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        IndustrialProResult.push(new this(result))
    } 
return IndustrialProResult;


 }
 static async FetchAllIndustrialPro(){
    let IndustrialProResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Industrial engineering and Production")  `
    let [results] = await conn.execute(sql)
    for(const result of results){
        IndustrialProResult.push(new this(result))
    } 
return IndustrialProResult;


}


static async Fetchmth(id){
    let MathsResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Mathematics") AND (admin_id = ?) `
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        MathsResult.push(new this(result))
    } 
return MathsResult;


 }
 static async FetchAllmth(){
    let MathsResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Mathematics")  `
    let [results] = await conn.execute(sql)
    for(const result of results){
        MathsResult.push(new this(result))
    } 
return MathsResult;


}


static async FetchMechanical(id){
    let MechanicalResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Mechanical Engineering") AND (admin_id = ?) `
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        MechanicalResult.push(new this(result))
    } 
return MechanicalResult;


 }
 static async FetchAllMechanical(){
    let MechanicalResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Mechanical Engineering")  `
    let [results] = await conn.execute(sql)
    for(const result of results){
        MechanicalResult.push(new this(result))
    } 
return MechanicalResult;


}


static async FetchMechatronics(id){
    let MechatronicsResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Mechatronics Engineering") AND (admin_id = ?) `
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        MechatronicsResult.push(new this(result))
    } 
return MechatronicsResult;


}
static async borrowID(admID,id){
    let result = [];
    let sql = `SELECT document FROM books WHERE (admin_id = ?) AND (id=?) `
    var [results]  =await conn.execute(sql,[admID, id]);
    for (let res of results ) {
   result.push(new this(result))
        
    }
    return result;
    
}

 static async FetchAllMechatronics(){
    let MechatronicsResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Mechatronics Engineering")  `
    let [results] = await conn.execute(sql)
    for(const result of results){
        MechatronicsResult.push(new this(result))
    } 
return MechatronicsResult;


}


static async FetchMicro(id){
    let MicroResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Microbiology") AND (admin_id = ?) `
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        MicroResult.push(new this(result))
    } 
return MicroResult;


 }
 static async FetchAllMicro(){
    let MicroResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Microbiology")  `
    let [results] = await conn.execute(sql)
    for(const result of results){
        MicroResult.push(new this(result))
    } 
return MicroResult;


}
static async FetchPetrol(id){
    let PetrolResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Petroleum Engineering") AND (admin_id = ?) `
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        PetrolResult.push(new this(result))
    } 
return PetrolResult;


 }
 static async FetchAllPetrol(){
    let PetrolResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Petroleum Engineering")  `
    let [results] = await conn.execute(sql)
    for(const result of results){
        PetrolResult.push(new this(result))
    } 
return PetrolResult;


}

static async FetchPhy(id){
    let PhyResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Physics with Electronics") AND (admin_id = ?) `
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        PhyResult.push(new this(result))
    } 
return PhyResult;


 }
 static async FetchAllPhy(){
    let PhyResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Physics with Electronics")  `
    let [results] = await conn.execute(sql)
    for(const result of results){
        PhyResult.push(new this(result))
    } 
return PhyResult;


}


static async FetchQuantity(id){
    let quantResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Quantity survey") AND (admin_id = ?) `
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        quantResult.push(new this(result))
    } 
return quantResult;


 }
 static async FetchAllQuantity(){
    let quantResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Quantity survey")  `
    let [results] = await conn.execute(sql)
    for(const result of results){
        quantResult.push(new this(result))
    } 
return quantResult;


}


static async FetchSlt(id){
    let SltResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Science Laboratory and Technology") AND (admin_id = ?) `
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        SltResult.push(new this(result))
    } 
return SltResult;


 }
 static async FetchAllSlt(){
    let SltResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Science Laboratory and Technology")  `
    let [results] = await conn.execute(sql)
    for(const result of results){
        SltResult.push(new this(result))
    } 
return SltResult;


}

static async FetchSoft(id){
    let SoftResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Software Engineering") AND (admin_id = ?) `
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        SoftResult.push(new this(result))
    } 
return SoftResult;


 }
 static async FetchAllSoft(){
    let SoftResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Software Engineering")  `
    let [results] = await conn.execute(sql)
    for(const result of results){
        SoftResult.push(new this(result))
    } 
return SoftResult;


}

static async FetchStat(id){
    let StatResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Statistics") AND (admin_id = ?) `
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        StatResult.push(new this(result))
    } 
return StatResult;


 }
 static async FetchAllStat(){
    let StatResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Statistics")  `
    let [results] = await conn.execute(sql)
    for(const result of results){
        StatResult.push(new this(result))
    } 
return StatResult;


}

static async FetchSurv(id){
    let SurvResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Survey and Geoinformatics") AND (admin_id = ?) `
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        SurvResult.push(new this(result))
    } 
return SurvResult;


 }
 static async FetchAllSurv(){
    let SurvResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Survey and Geoinformatics")  `
    let [results] = await conn.execute(sql)
    for(const result of results){
        SurvResult.push(new this(result))
    } 
return SurvResult;


}


static async FetchUrban(id){
    let UrbanResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Urban and Regional planning") AND (admin_id = ?) `
    let [results] = await conn.execute(sql, [id])
    for(const result of results){
        UrbanResult.push(new this(result))
    } 
return UrbanResult;


 }
 static async FetchAllUrban(){
    let UrbanResult = []
    let sql = `SELECT * FROM books WHERE (programme = "Urban and Regional planning")  `
    let [results] = await conn.execute(sql)
    for(const result of results){
        UrbanResult.push(new this(result))
    } 
return UrbanResult;


}


}
module.exports = Book