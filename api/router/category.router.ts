import express from "express";
import {
  createCategory,
  getCategoryById,
  getCategories,
  updateCategory,
} from "../controller/category";

export const categoryRouter = express.Router();

categoryRouter.post("/", createCategory);
categoryRouter.get("/", getCategories);
categoryRouter.get("/:foodId", getCategoryById);
categoryRouter.put("/", updateCategory);
