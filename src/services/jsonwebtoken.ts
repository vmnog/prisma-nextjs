import jwt from "jsonwebtoken";

export function generateToken(userId: string) {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET!, {
    expiresIn: "1min",
  });
}
