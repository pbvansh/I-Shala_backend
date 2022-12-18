const express = require("express")

const { createDetails, getEmpInfo } = require("../controller/employeedetailsController")

const route = express.Router();

route.post("/create/:id", createDetails)
route.get('/:id', getEmpInfo)

module.exports = route