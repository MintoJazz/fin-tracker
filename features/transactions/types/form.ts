import z from "zod";
import { baseTransactionSchema } from "../schemas/base-schema";
import { addRefundSchema, partialRefundSchema, toSplitSchema, toTransferSchema } from "../schemas/new-schema";
import { BADGE_SCHEMA_REGISTRY } from "../constants/form-registry/schema";

export type ToTransferFormType = z.infer<typeof toTransferSchema>;
export type ToSplitFormType = z.infer<typeof toSplitSchema>;
export type AddRefundFormType = z.infer<typeof addRefundSchema>;
export type PartialRefundFormType = z.infer<typeof partialRefundSchema>;

type BadgeSchemas = NonNullable<typeof BADGE_SCHEMA_REGISTRY[keyof typeof BADGE_SCHEMA_REGISTRY]>
type BadgeFields = Partial<z.infer<BadgeSchemas>>

export type TransactionFormType = z.infer<typeof baseTransactionSchema> & BadgeFields