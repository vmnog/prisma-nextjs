import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import {
  createUserValidation,
  deleteByEmailValidation,
  findByEmailValidation,
  updateUserValidation,
} from "../validations/user/userControllerValidation";

const prisma = new PrismaClient({});

export const userController = {
  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;

    try {
      await createUserValidation.validate({ name, email, password });
    } catch (error) {
      return response.status(400).json({ error });
    }

    const findUser = await prisma.user.findUnique({ where: { email } });

    if (findUser) {
      return response.status(403).json({ error: "User already exists" });
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return response.status(200).json(user);
  },

  async list(_request: Request, response: Response) {
    const users = await prisma.user.findMany();

    return response.status(200).json(users);
  },

  async findByEmail(request: Request, response: Response) {
    const { email } = request.body;

    try {
      await findByEmailValidation.validate({ email });
    } catch (error) {
      return response.status(400).json({ error });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return response.status(404).json({ error: "User not found" });
    }

    return response.status(200).json(user);
  },

  async deleteByEmail(request: Request, response: Response) {
    const { email } = request.body;

    try {
      await deleteByEmailValidation.validate({ email });
    } catch (error) {
      return response.status(400).json({ error });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return response.status(404).json({ error: "User not found" });
    }

    await prisma.user.delete({ where: { email } });

    return response.status(200).json({ message: "User was deleted" });
  },

  async updateByEmail(request: Request, response: Response) {
    const { email, name, password } = request.body;

    try {
      await updateUserValidation.validate({ email, name, password });
    } catch (error) {
      return response.status(400).json({ error });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return response.status(404).json({ error: "User not found" });
    }

    const updatedUser = await prisma.user.update({
      where: { email },
      data: {
        name: name || user.name,
        password: password || user.password,
      },
    });

    return response.status(200).json(updatedUser);
  },
};
