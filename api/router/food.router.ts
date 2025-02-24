import express from "express";
import {
  createFood,
  getFoods,
  updateFood,
  getFoodsByCategoryName,
} from "../controller/food";

export const foodRouter = express.Router();

foodRouter.post("/", createFood);
foodRouter.get("/", getFoods);
foodRouter.get("/category/:id", getFoodsByCategoryName);
foodRouter.put("/:foodId", updateFood);
