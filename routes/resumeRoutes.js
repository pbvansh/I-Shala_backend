const express = require("express")
const route = express.Router()
const {createResume,updateResume,getMyResume} = require("../controller/resumeController")

route.get('/:id',getMyResume)
route.post("/createresume",createResume)
route.put("/updateresume/:id",updateResume)


module.exports = route
