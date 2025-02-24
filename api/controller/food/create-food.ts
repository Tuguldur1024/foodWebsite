import { Request, Response } from "express";
import FoodModel from "../../model/food";

export const createFood = async (req: Request, res: Response) => {
  const { name, image, ingredient, price, categoryId } = req.body;
  try {
    const food = await new FoodModel({
      name: name,
      image: image,
      ingredient: ingredient,
      price: price,
      categoryId: categoryId,
    }).save();

    res.status(200).json({ food: food });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
