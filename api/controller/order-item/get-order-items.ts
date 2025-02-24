import { Request, Response } from "express";
import OrderItemModel from "../../model/order-item";

export const getOrderItems = async (req: Request, res: Response) => {
  try {

    const orderItem = await OrderItemModel.find()

    res.status(200).json({ orderItem: orderItem });

  } catch (error) {
    
    res.status(400).json({ message: error });
  }
};
