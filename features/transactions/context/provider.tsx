'use client'

import { createContext, useContext, useMemo, ReactNode } from "react"
import { useChanges } from "./use-changes"
import { useSelection } from "./use-selection"
import { TransactionDetails } from "../types/database"
import { useManager } from "@/hooks/use-manager"
import { TransactionContextType } from "../types/context"

const TransactionContext = createContext<TransactionContextType | null>(null)

interface Props {
    children: ReactNode
    bucketId?: number
}

export function TransactionProvider({ children, bucketId }: Props ) {
    const changes = useChanges()
    const selection = useSelection()
    const modal = useManager<TransactionDetails>()

    const value = useMemo(() => ({
        ...changes,
        ...selection,
        ...modal,
        bucketId
    }), [changes, selection, modal, bucketId])

    return (
        <TransactionContext.Provider value={value}>
            {children}
        </TransactionContext.Provider>
    )
}

export function useTransactionContext() {
    const context = useContext(TransactionContext)
    if (!context) throw new Error("useTransactionContext must be used within TransactionProvider")
    return context
}