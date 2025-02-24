import { Request, Response } from "express";
import OrderItemModel from "../../model/order-item";

export const createOrderItem = async (req: Request, res: Response) => {
  const { foodId, quantity, amount, orderId, foodName, porch } = req.body;

  try {
    const orderDetails = await new OrderItemModel({
      foodId,
      quantity,
      amount,
      orderId,
      foodName,
      porch,
    }).save();

    res.status(200).json({ orderDetails: orderDetails });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
