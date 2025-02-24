import mongoose from "mongoose";
import FoodModel from "../../model/food";
import { Request, Response } from "express";

export const updateFood = async (req: Request, res: Response) => {
  const { name, image, ingredient, price, categoryId } = req.body;
  const { foodId } = req.params;

  try {
    const objectId = mongoose.Types.ObjectId.createFromHexString(foodId);

    const food = await FoodModel.findOneAndUpdate(
      { _id: objectId },
      {
        name,
        image,
        ingredient,
        price,
        categoryId,
      },
      { new: true }
    );

    res.status(200).json({ food });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
