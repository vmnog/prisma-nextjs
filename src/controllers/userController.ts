import { PrismaClient, User } from "@prisma/client";
import { Request, Response } from "express";
import { encryptPassword } from "../services/crypto";
import {
  createUserValidation,
  findByEmailValidation,
  updateByEmailValidation,
  deleteByEmailValidation,
} from "../validations/userValidation";

const prisma = new PrismaClient({});

export const userController = {
  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;

    try {
      await createUserValidation.validate({ name, email, password });
    } catch (error) {
      return response.status(400).json({ error });
    }

    const foundUser = await prisma.user.findUnique({ where: { email } });

    if (foundUser) {
      return response.status(403).json({ message: "User already exists" });
    }

    const user: Partial<Pick<User, "password">> = await prisma.user.create({
      data: {
        name,
        email,
        password: encryptPassword(password),
      },
    });

    delete user.password;

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
      return response.status(404).json({ message: "User not found" });
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
      return response.status(404).json({ message: "User not found" });
    }

    await prisma.user.delete({ where: { email } });

    return response.status(200).json({ message: "User was deleted" });
  },

  async updateByEmail(request: Request, response: Response) {
    const { email, name, password } = request.body;

    try {
      await updateByEmailValidation.validate({ email, name, password });
    } catch (error) {
      return response.status(400).json({ error });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return response.status(404).json({ message: "User not found" });
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
