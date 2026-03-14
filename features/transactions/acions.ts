import { prisma } from "@/lib/prisma";
import { TransactionDetails } from "./types/database";

export const getAll = async () => prisma.transaction.findMany({
    include: {
        movements: { include: { bucket: true, } },
        category: true,
        costCenter: true
    },
}) as Promise<TransactionDetails[]>;