import express from "express";
import Department from "../models/department.js";
import validate from "../middlewares/depValidation.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const department = await Department.findById(id);
  res.json({ message: "Department retrieved successfully", department });
});

router.get("/", async (req, res) => {
  const departments = await Department.find();
  res.json({ message: "Departments retrieved successfully", departments });
});

router.post("/", validate, async (req, res) => {
  if (!req.isValid) {
    return res.json({ message: "Error", error: req.validationErrors });
  }
  const data = req.body;
  const department = new Department(data);
  await department.save();
  res.json({ message: "Department added successfully" });
});

router.patch("/:id", validate, async (req, res) => {
  if (!req.isValid) {
    return res.json({ message: "Error", error: req.validationErrors });
  }
  const data = req.body;
  const { id } = req.params;
  await Department.findByIdAndUpdate(id, data);
  res.json({ message: "department updated successfully" });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Department.findByIdAndDelete(id);
  res.json({ message: "Department deleted Successfully" });
});

export default router;
