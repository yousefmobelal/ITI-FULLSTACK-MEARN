import mongoose from "mongoose";

const { Schema } = mongoose;

const studentSchema = new Schema({
  name: {
    type: String,
    maxLength: 10,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/,
  },
  phoneNumber: {
    type: String,
    match: /^01[0-2]\d{1,8}$/,
    required: true,
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: "Department",
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
  },
});

export default mongoose.model("Student", studentSchema);
