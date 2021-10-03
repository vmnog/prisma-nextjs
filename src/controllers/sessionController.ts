import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { comparePassword } from "../services/crypto";
import { createSessionValidation } from "../validations/sessionValidation";

const prisma = new PrismaClient({});

export const sessionController = {
  async create(request: Request, response: Response) {
    const { email, password } = request.body;

    try {
      await createSessionValidation.validate({ email, password });
    } catch (error) {
      return response.status(400).json({ error });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = comparePassword(password, user.password);

    if (!isPasswordValid) {
      return response.status(403).json({ message: "Invalid password" });
    }

    const { token } = await prisma.session.create({
      data: {
        user: { connect: { id: user.id } },
      },
    });

    return response.status(200).json({ token });
  },
};
