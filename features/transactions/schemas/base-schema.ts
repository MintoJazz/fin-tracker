import z from "zod";

export const baseTransactionSchema = z.object({
    description: z.string().min(1, "A descrição é obrigatória"),
    amount: z.number().positive("O valor deve ser maior que zero").int(),
    date: z.coerce.date({ message: "Data inválida" }),
    bucketId: z.number().positive("Selecione um Bucket Válido")
})