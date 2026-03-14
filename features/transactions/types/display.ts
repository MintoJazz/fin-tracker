import { TransactionType } from "@/generated/prisma/enums"
import { ACTIONS_REGISTRY } from "../constants/action"
import { OPERATION_REGISTRY } from "../constants/operation"
import { STATUS_LABEL } from "../constants/status"
import { useTransactionCard } from "../list/use-transaction-card"

export type TransactionOperation = TransactionType | 'ENVIO' | 'RECEBIMENTO' | 'REEMBOLSO' | 'RESSARCIMENTO' | 'DESEMBOLSO'
export type Action = "add" | "edit" | "remove" | "stable";

export type TransactionCardState = ReturnType<typeof useTransactionCard>

export type StatusConfig = typeof STATUS_LABEL[keyof typeof STATUS_LABEL]
export type ActionConfig = typeof ACTIONS_REGISTRY[keyof typeof ACTIONS_REGISTRY]
export type OperationConfig = typeof OPERATION_REGISTRY[keyof typeof OPERATION_REGISTRY]