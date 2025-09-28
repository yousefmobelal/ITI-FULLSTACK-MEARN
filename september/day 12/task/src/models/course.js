import mongoose from "mongoose";

const { Schema } = mongoose;

const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    maxLength: 150,
  },
});

export default mongoose.model("Course", courseSchema);
