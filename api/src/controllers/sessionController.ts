import { PrismaClient } from "@prisma/client";

import { Request, Response } from "express";

import { comparePassword } from "../services/crypto";
import { generateToken } from "../services/jsonwebtoken";
import { createSessionValidation } from "../validations/sessionValidation";

const prisma = new PrismaClient({});

export const sessionController = {
  async updateOrCreate(request: Request, response: Response) {
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

    const generatedToken = generateToken(user.id);

    const foundSession = await prisma.session.findFirst({
      where: { userId: user.id },
    });

    if (foundSession) {
      const session = await prisma.session.update({
        where: { id: foundSession.id },
        data: { token: generatedToken },
      });

      return response.status(200).json(session);
    }

    const session = await prisma.session.create({
      data: {
        token: generatedToken,
        user: { connect: { id: user.id } },
      },
    });

    return response.status(200).json(session);
  },
};
