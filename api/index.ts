import express from "express";
import { connectionDB } from "./database";
import { foodRouter } from "./router/food.router";
import { userRouter } from "./router/user.router";
import { categoryRouter } from "./router/category.router";
import { orderItemRouter } from "./router/order-item.router";
import cors from "cors";
import { orderRouter } from "./router/order.router";

const app = express();
app.use(cors());
app.use(express.json());

const port = 5050;

app.use(cors());

connectionDB();

app.use("/users", userRouter);
app.use("/foods", foodRouter);
app.use("/category", categoryRouter);
app.use("/orderItems", orderItemRouter);
app.use("/order", orderRouter);

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
