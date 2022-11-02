const express = require("express");
const { signupEmployee,
    loginEmployee,
    addOtherDetails } = require("../controller/companyController");

const route = express.Router();

route.post("/signup", signupEmployee)
route.post("/login", loginEmployee)
route.put("/:id/update", addOtherDetails)
// route.post("/details",getEmployeeDetails)


module.exports = route

