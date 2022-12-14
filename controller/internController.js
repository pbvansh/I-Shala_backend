
const asynHandler = require("express-async-handler")
const Internship = require("../model/internshipModel")


const getInternship = asynHandler(async (req, res) => {
     const math = {}
     if (req.query.location) {
          math.Location = req.query.location
     }
     if(req.query.category){
          math.Internship_Name = req.query.category
     }
     if(req.query.stipend){
          math.Stipend  = Number(req.query.stipend)
          console.log(math.Stipend)
     }
     if(req.query.type){
          math.Internship_type = req.query.type
     }
     // 
     const internship = await Internship.find(math).populate([{
          path: 'company_id',
          select: 'Name'
     }])
     res.status(200).json(internship)
})

const getComapnyInternship = asynHandler(async (req, res) => {
     const id = req.params.id;
     const internship = await Internship.find({ company_id: id })
     res.status(200).json(internship)
})


const getStaticInternship = asynHandler(async (req, res) => {
     const id = req.params.id;
     const internship = await Internship.findById(id).populate('company_id', ["Name", "About_company"])
     res.status(200).json(internship)
})


const createInternship = asynHandler(async (req, res) => {
     const internship = await Internship.create(req.body)
     res.status(200).json(internship)
})

const updateInternship = asynHandler(async (req, res) => {
     const updatei = await Internship.findByIdAndUpdate(req.params.id, req.body, { new: true })
     res.status(200).json(updatei)
     // console.log("Internship is updated")
})

const deleteInternship = asynHandler(async (req, res) => {
     const deletei = await Internship.findByIdAndDelete(req.params.id)
     res.status(200).json(deletei)
     // console.log("internship is deleted")
})

module.exports = {
     createInternship,
     updateInternship,
     deleteInternship,
     getInternship,
     getStaticInternship,
     getComapnyInternship,
}