const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: [true, "Name is required"] },
  price: { type: Number, required: [true, "Price is required"] },
  categoryId: { type: Number, required: [true, "Category ID is required"] },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User ID is required"],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
