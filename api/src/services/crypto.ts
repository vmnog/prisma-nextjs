import crypto from "crypto-js";

export function encryptPassword(password: string): string {
  const encrypted = crypto.AES.encrypt(
    password,
    process.env.CRYPTO_SECRET!
  ).toString();

  return encrypted;
}

export function comparePassword(
  password: string,
  hashedPassword: string
): boolean {
  const decrypted = crypto.AES.decrypt(
    hashedPassword,
    process.env.CRYPTO_SECRET!
  ).toString(crypto.enc.Utf8);

  return password === decrypted;
}
