import express from "express";
import Student from "../models/student.js";
import validate from "../middlewares/studentValidation.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const student = await Student.findById(id);
  res.json({ message: "Student retrieved successfully", student });
});

router.get("/", async (req, res) => {
  const students = await Student.find();
  res.json({ message: "Students retrieved successfully", students });
});

router.post("/", validate, async (req, res) => {
  if (!req.isValid) {
    return res.json({ message: "Error", error: req.validationErrors });
  }
  const data = req.body;
  const student = new Student(data);
  await student.save();
  res.json({ message: "Student added successfully" });
});

router.patch("/:id", validate, async (req, res) => {
  if (!req.isValid) {
    return res.json({ message: "Error", error: req.validationErrors });
  }
  const data = req.body;
  const { id } = req.params;
  await Student.findByIdAndUpdate(id, data);
  res.json({ message: "Student updated successfully" });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Student.findByIdAndDelete(id);
  res.json({ message: "Student deleted Successfully" });
});

export default router;
