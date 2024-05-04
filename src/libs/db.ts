import { PrismaClient } from "@prisma/client";

const PrismaClientSingleton = () => {
    return new PrismaClient();
}

const globaLForPrisma = globalThis

const prisma = globaLForPrisma.prisma ?? PrismaClientSingleton();

export default prisma;

process.env.NODE_ENV !== 'production' ? globaLForPrisma.prisma = prisma : "";