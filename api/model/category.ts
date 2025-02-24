import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema({
  name: { type: String, require: true },
  createdAt: { type: Date, default: Date.now },
});

const CategoryModel = mongoose.model("Category", CategorySchema);
export default CategoryModel;
