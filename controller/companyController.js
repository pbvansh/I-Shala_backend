const mongoose = require("mongoose")
const asyncHandler = require("express-async-handler")
const Company = require("../model/companyModel")
const JWT = require("jsonwebtoken")
const bcpt = require("bcryptjs")
const Internship = require("../model/internshipModel")
const Application = require('../model/applicationModel')

const signupEmployee = asyncHandler(async (req, res) => {
    console.log(req.body)
    const user = await Company.create(req.body)
    res.status(200).json(user)

})

// const getEmployeeDetails = asyncHandler(async(req,res)=>{
//     const user = await Company.create(req.body)
//     res.status(200).json(user)
//     console.log(user)
// })

const loginEmployee = asyncHandler(async (req, res) => {
    //    const user = await Company.findOne({Email, Password})  
    const { email, password } = req.body;
    if (!email || !password) {
        res.send(400)
        throw new Error("Please enter the correct email and password")
    }
    //l

    const user = await Company.findOne({ email })
    if (user && await bcpt.compare(password, user.password)) {
        res.status(200).json({
            email: user._doc.email,
            Fname: user._doc.First_name,
            token: user.genToken(),
            isAuth: true,
            isEmp: true
        })
    }

    else {
        res.status(400).json("Invalid details")

    }

})

const addOtherDetails = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const company = await Company.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(company)
})

const getEmpInternship = asyncHandler(async (req, res) => {
    const company_id = req.params.id;
    const internship = await Internship.find({ company_id }).populate('company_id', ["Name", "About_company"])
    res.status(200).json(internship)
})

const getApplicantsDetails = asyncHandler(async (req, res) => {
    const Internship_id = req.params.id;
    const applicants = await Application.find({ Internship_id }).populate('user_id', ['firstName', 'lastName'])
    res.status(200).json(applicants);
})

module.exports = {
    signupEmployee,
    loginEmployee,
    addOtherDetails,
    getEmpInternship,
    getApplicantsDetails
}


