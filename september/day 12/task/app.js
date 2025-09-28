import express from "express";
import studentRoutes from "./src/routes/student.route.js";
import departmentRoutes from "./src/routes/department.route.js";
import courseRoutes from "./src/routes/course.route.js";

const app = express();
app.use(express.json());

app.use("/api/students", studentRoutes);
app.use("/api/deps", departmentRoutes);
app.use("/api/courses", courseRoutes);

export default app;
