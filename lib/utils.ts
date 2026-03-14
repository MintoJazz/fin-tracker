import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import z from "zod";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const coerceDate = z.preprocess(
    (arg) => (typeof arg === "string" || arg instanceof Date ? new Date(arg) : arg),
    z.date({ message: "A data é obrigatória" })
);

export const optionalNumber = z.preprocess(
    (val) => (val === null ? undefined : val),
    z.number().positive("Selecione uma opção válida").optional()
);
