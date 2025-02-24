import { Request, Response } from "express";
import OrderModel from "../../model/order";

export const getOrder = async (req: Request, res: Response) => {
  const { orderId } = req.body;

  try {
    const order = await OrderModel.findById({ _id: orderId });

    res.status(200).json({ order: order });
  } catch (error) {
    res.status(400);
  }
};
