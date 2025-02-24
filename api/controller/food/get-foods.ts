import { Request, Response } from "express";
import FoodModel from "../../model/food";

export const getFoods = async (req: Request, res: Response) => {
  try {
    const foods = await FoodModel.find().populate("categoryId");
    res.status(200).json({ foods: foods });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
