import { TransactionDetails } from "../types/database";
import { TransactionStatus } from "@/generated/prisma/enums";
import { useCallback } from "react";
import { useTransactionContext } from "../context/provider";

export function useTransactionCard(transaction: TransactionDetails, original?: TransactionDetails) {
    const { selected, select, edit } = useTransactionContext()

    const onStatusChange = useCallback((status: TransactionStatus) => edit(transaction.id, { status }, original), [edit, transaction, original])
    const onIsSharedChange = useCallback((isShared: boolean) => edit(transaction.id, { isShared }, original), [edit, transaction, original])
    const onSelectionChange = useCallback(() => select(transaction.id), [transaction.id, select])

    return ({
        isSelected: selected.includes(transaction.id),
        onStatusChange,
        onIsSharedChange,
        onSelectionChange
    })
}