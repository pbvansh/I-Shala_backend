
const asyncHandler = require("express-async-handler")
const Application = require("../model/applicationModel")

const createApplication = asyncHandler(async (req, res) => {
  const capp = await Application.create(req.body)
  res.status(200).json(capp)
})

const updateApplication = asyncHandler(async (req, res) => {
  const uapp = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.status(200).json(uapp)
})

const checkIsAlreadyApplied = asyncHandler(async (req, res) => {
  const { user_id, Internship_id } = req.body
  const app = await Application.find({ user_id, Internship_id })
  if (app.length > 0) {
    res.status(200).json({ applied: true })
  } else {
    res.status(200).json({ applied: false })
  }

})
const getApplication = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const uapp = await Application.find({ user_id: id }).populate({
    path: "Internship_id",
    populate: {
      path: "company_id",
      select: ['Name', 'email', 'Contact']
    }
    , select: 'Name Internship_Name TotalNoOfApplicants'
  })

  res.status(200).json(uapp)
})

const getCoverLetter = asyncHandler(async (req, res) => {
  // console.log(req.params.id);
  const letter = await Application.findById(req.params.id)

  res.status(200).json(letter)
})

const getTotalNUmberOfApplicant = asyncHandler(async (req, res) => {
  const Internship_id = req.params.id;
  const total = await Application.countDocuments({ Internship_id })
  res.status(200).json(total)
})


module.exports = {
  createApplication,
  updateApplication,
  getApplication,
  getCoverLetter,
  getTotalNUmberOfApplicant,
  checkIsAlreadyApplied
}
