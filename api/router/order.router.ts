import express from "express";
import { createOrder } from "../controller/order/create-order";
import { getOrder } from "../controller/order/get-order";
import { getOrders } from "../controller/order/get-orders";
export const orderRouter = express.Router();
orderRouter.post("/", createOrder).get("/", getOrder).get("/:id", getOrders);
