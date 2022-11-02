const mongoose = require("mongoose")
const asyncHandler = require("express-async-handler")
const Company = require("../model/companyModel")
const JWT = require("jsonwebtoken")
const bcpt = require("bcryptjs")

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


module.exports = {
    signupEmployee,
    loginEmployee,
    addOtherDetails
}


