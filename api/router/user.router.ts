import express from "express";
import { createUser } from "../controller/user";
import { getUser, getUsers } from "../controller/user/get-users";
import { updateUser } from "../controller/user/update-user";
import { signinUser } from "../controller/user/signin-user";
import { authenticateToken } from "../middleware/authenticate-token";
import { me } from "../controller/user/signinToken";
export const userRouter = express.Router();

userRouter
  .post("/", createUser)
  .get("/:id", getUsers)
  .put("/update", updateUser)
  .post("/signin", signinUser)
  .post("/me", authenticateToken, me);
