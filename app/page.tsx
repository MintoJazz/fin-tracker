'use server'

import { getAll } from "@/features/transactions/acions"
import { TransactionProvider } from "@/features/transactions/context/provider"
import TransactionManager from "@/features/transactions/list/transaction-manager"

export default async function FieldDemo() {
    const [transactions] = await Promise.all([
        getAll()
    ])

    return <div className="max-w-125 m-auto p-8">
        <TransactionProvider>
            <TransactionManager transactions={transactions} />
        </TransactionProvider>
    </div>
}
