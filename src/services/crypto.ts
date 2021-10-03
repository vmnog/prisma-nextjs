import crypto from "crypto-js";

export function encryptPassword(password: string): string {
  if (!process.env.CRYPTO_SECRET)
    throw new Error("Please fill in the CRYPTO_SECRET environment variable");

  const encrypted = crypto.AES.encrypt(
    password,
    process.env.CRYPTO_SECRET
  ).toString();

  return encrypted;
}

export function comparePassword(
  password: string,
  hashedPassword: string
): boolean {
  if (!process.env.CRYPTO_SECRET)
    throw new Error("Please fill in the CRYPTO_SECRET environment variable");

  const decrypted = crypto.AES.decrypt(
    hashedPassword,
    process.env.CRYPTO_SECRET
  ).toString(crypto.enc.Utf8);

  return password === decrypted;
}
