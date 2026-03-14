import { Bucket, Category, CostCenter, Movement, OperationType, Transaction, TransactionOperation  } from "@/generated/prisma/client";

export type TransactionDetails = Transaction & {
    movements: (Movement & { bucket: Bucket })[]
    category: Category
    costCenter: CostCenter,
    operations?: TransactionOperation[]
}