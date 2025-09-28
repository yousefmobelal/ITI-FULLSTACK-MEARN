import mongoose from "mongoose";

const { Schema } = mongoose;

const departmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

export default mongoose.model("Department", departmentSchema);
