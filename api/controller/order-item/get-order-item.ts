import { Request, Response } from "express";
import mongoose from "mongoose";
import OrderModel from "../../model/order";
import OrderItemModel from "../../model/order-item";

export const getOrderItemById = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    const orderItem = await OrderItemModel.findById({ _id: id });
    res.status(200).json({ orderItem: orderItem });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
