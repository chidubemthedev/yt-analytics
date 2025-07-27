import { PrismaClient } from "@prisma/client";

// Prevent multiple instances in dev
declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient({ log: ["error", "warn"] });
if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;
