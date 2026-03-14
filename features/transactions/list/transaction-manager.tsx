'use client'

import { useTransactionContext } from "../context/provider"
import { TransactionDetails } from "../types/database"
import TransactionCard from "./transaction-card"

interface Props {
    transactions: TransactionDetails[]
}

export default function TransactionManager({ transactions }: Props) {
    const { merge } = useTransactionContext()
    const list = merge(transactions)

    return <div className="flex flex-col gap-4">
        {list.map((props) => <TransactionCard key={props.transaction.id} {...props} />)}
    </div>
}