const express = require("express");
const {
  signupEmployee,
  loginEmployee,
  addOtherDetails,
  getEmpInternship,
  getApplicantsDetails,
  getOtherDetails
} = require("../controller/companyController");

const route = express.Router();

route.post("/signup", signupEmployee)
route.post("/login", loginEmployee)
route.put("/:id/update", addOtherDetails)
route.get("/:id/internship", getEmpInternship)
route.get('/:id/applicants', getApplicantsDetails)
route.get("/:id",getOtherDetails)
 

module.exports = route

