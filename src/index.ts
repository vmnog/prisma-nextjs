import { PrismaClient } from "@prisma/client";
import { app } from "./server";

const port = process.env.PORT;

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
async function main() {
  app.listen(port, () =>
    console.log(`🚀 Server is listening on port ${port}!`)
  );
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
