import express from "express";
import Course from "../models/course.js";
import validate from "../middlewares/courseValidation.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const course = await Course.findById(id);
  res.json({ message: "Course retrieved successfully", course });
});

router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.json({ message: "Courses retrieved successfully", courses });
});

router.post("/", validate, async (req, res) => {
  if (!req.isValid) {
    console.log(validate.errors);
    return res.json({ message: "Error", error: req.validationErrors });
  }
  const data = req.body;
  const course = new Course(data);
  await course.save();
  res.json({ message: "Course added successfully" });
});

router.patch("/:id", validate, async (req, res) => {
  if (!req.isValid) {
    return res.json({ message: "Error", error: req.validationErrors });
  }
  const data = req.body;
  const { id } = req.params;
  await Course.findByIdAndUpdate(id, data);
  res.json({ message: "Course updated successfully" });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Course.findByIdAndDelete(id);
  res.json({ message: "Course deleted Successfully" });
});

export default router;
