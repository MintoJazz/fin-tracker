import { useCallback, useRef, useState } from "react";
import { TransactionDetails } from "../types/database";
import { ChangesMap } from "../types/changes";

function removeFromMap(map: ChangesMap, id: number): ChangesMap {
    const next = { ...map }
    delete next[id]
    return next
}

export function useChanges() {
    const [changes, setChanges] = useState<ChangesMap>({});
    const index = useRef(-1);

    const add = useCallback((transaction: TransactionDetails) => {
        const id = index.current
        index.current -= 1
        setChanges(prev => ({ ...prev, [id]: { action: "add", domain: transaction } }))
    }, [])

    const discard = useCallback((id: number) => setChanges(prev => removeFromMap(prev, id)), [])

    const edit = useCallback((id: number, data: Partial<TransactionDetails>, original?: TransactionDetails) => setChanges(prev => {
        const accumulated = { ...prev[id]?.domain, ...data } as Partial<TransactionDetails>
        if (id < 0) return ({ ...prev, [id]: { ...prev[id], domain: accumulated } })
        else if (Object.keys(accumulated).some(key => accumulated[key as keyof TransactionDetails] !== original?.[key as keyof TransactionDetails])) return ({ ...prev, [id]: { action: "edit", domain: accumulated } })
        else return removeFromMap(prev, id)
    }),[])

    const remove = useCallback((id: number) => {
        if (id < 0) discard(id)
        else setChanges(prev => ({ ...prev, [id]: { action: "remove" } }))
    }, [discard])

    const merge = useCallback((transactions: TransactionDetails[]) => {
        const added = Object.values(changes).filter(c => c.action === "add").map(c => c.domain as TransactionDetails)
        return [...transactions, ...added].map(t => ({
            transaction: changes[t.id]?.domain ? { ...t, ...changes[t.id].domain } : t,
            original: transactions.find(tr => tr.id === t.id),
            action: changes[t.id]?.action ?? 'stable'
        }))
    }, [changes])

    return { changes, add, edit, remove, merge }
}

