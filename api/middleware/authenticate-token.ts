import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | any> => {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, "secret", (err, decoded) => {
    if (err) {
      return res.sendStatus(403);
    }

    (req as any).user = decoded;

    next();
  });
};
