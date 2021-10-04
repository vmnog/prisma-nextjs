import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

const prisma = new PrismaClient({});

export function AuthMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const bearerToken = request.headers.authorization;

  if (!bearerToken) {
    response.status(401).json({ message: "No token provided" });
  }

  const token = bearerToken!.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET!, async (error, decoded) => {
    if (error) {
      return response.status(401).json({ message: "Token has expired" });
    }

    if (decoded) {
      request.params.userId = decoded.id;

      const foundSession = await prisma.session.findFirst({
        where: { userId: decoded.id },
      });

      if (foundSession?.token !== token) {
        return response.status(401).json({ message: "Token is invalid" });
      }
    }

    next();
  });
}
