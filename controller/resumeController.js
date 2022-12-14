const Resume = require("../model/resumeModel")
const asyncHandler = require('express-async-handler')

const createResume = asyncHandler(async (req, res) => {
  const user_id = req.params.id;
  const resume = await Resume.updateOne({ user_id }, req.body, { upsert: true })
  res.status(200).json(resume)
})
const getMyResume = asyncHandler(async (req, res) => {
  const user_id = req.params.id;
  const resume = await Resume.find({ user_id })
  res.status(200).json(resume)
})

const updateResume = asyncHandler(async (req, res) => {
  const resume = await Resume.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.status(200).json(resume)
})

module.exports = {
  getMyResume,
  createResume,
  updateResume
}
