import { Request, Response } from "express";
import mongoose from "mongoose";
import FoodModel from "../../model/food";

export const getFoodById = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const objectId = mongoose.Types.ObjectId.createFromHexString(id);

    const food = await FoodModel.findById({ _id: objectId }).populate(
      "Category"
    );
    res.status(200).json({ food: food });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
