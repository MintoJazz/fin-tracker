import { TransactionDetails } from "./database";

export type PendingChange = { 
    action: "add" | "edit" | "remove",
    domain?: TransactionDetails | Partial<TransactionDetails>,
    original?: TransactionDetails
}

export type ChangesMap = Record<number, PendingChange>;