import { Request, Response } from "express";
import CategoryModel from "../../model/category";


export const getCategories = async (req: Request, res: Response) => {

  try {
    const categories = await CategoryModel.find();
    res.status(200).json({ categories: categories });

  } catch (error) {
    res.status(400).json({ message: error });
  }
};
