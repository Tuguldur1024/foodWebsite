import { Request, Response } from "express";
import FoodModel from "../../model/food";
import CategoryModel from "../../model/category";

export const getFoodsByCategoryName = async (req: Request, res: Response) => {
  const { categoryName } = req.params;
  try {
    const category = await CategoryModel.findOne({ name: categoryName });
    const foods = await FoodModel.find({ categoryId: category?._id });
    res.status(200).json({ foods: foods, message: "successfully" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
