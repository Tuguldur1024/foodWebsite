import mongoose, { Schema } from "mongoose";

export type Food = {
  name: string;
  categoryId?: string;
  image: string;
  ingredient: string;
  price: number;
  createdAt: Date;
};

const FoodSchema = new Schema<Food>({
  name: { type: String, required: true },
  categoryId: { type: Schema.Types.ObjectId, ref: "Category" },
  image: { type: String, required: true },
  ingredient: { type: String, required: true },
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const FoodModel = mongoose.model<Food>("Food", FoodSchema);

export default FoodModel;
