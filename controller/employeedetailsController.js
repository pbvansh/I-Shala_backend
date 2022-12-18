const asyncHandler = require("express-async-handler")

const Employeedetails = require("../model/employeedetailsModel")

const createDetails = asyncHandler(async (req, res) => {
  const company_id = req.params.id;
  const user = await Employeedetails.updateOne({ company_id }, req.body, { upsert: true })
  res.status(200).json(user)
})

const getEmpInfo = asyncHandler(async (req, res) => {
  const company_id = req.params.id
  const user = await Employeedetails.findOne({ company_id })
  res.status(200).json(user)
})

module.exports = {
  createDetails,
  getEmpInfo
}