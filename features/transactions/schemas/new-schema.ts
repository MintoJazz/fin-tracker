import { coerceDate, optionalNumber } from "@/lib/utils";
import z from "zod";

export const toTransferSchema = z.object({
    bucketId: z.number().positive("Selecione um Bucket Válido")
})

export const toSplitSchema = z.object({ list: z.array(z.object({
    bucketId: z.number().positive("Selecione um Bucket Válido"),
    amount: z.number().positive("O valor deve ser maior que zero").int(),
})).min(1, "Adicione ao menos 1 buckets para dividir") })


export const addRefundSchema = z.object({
    funderId: z.number().positive("Selecione um Bucket Válido"),
    date: coerceDate,
    refundId: optionalNumber
})

export const partialRefundSchema = z.object({ amount: z.number().positive("O valor deve ser maior que zero").int() })