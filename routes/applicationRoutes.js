const express = require("express");
const {createApplication, updateApplication,getApplication, getCoverLetter,getTotalNUmberOfApplicant} = require("../controller/applicationController")
const route = express.Router();

route.post("/createapp",createApplication)
route.put("/updateapp/:id",updateApplication)
route.get("/app/:id",getApplication)
route.get("/cov/:id",getCoverLetter)
route.get('/:id/totalApplicant',getTotalNUmberOfApplicant)


module.exports = route
