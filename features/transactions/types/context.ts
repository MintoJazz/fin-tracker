import { useManager } from "@/hooks/use-manager"
import { useChanges } from "../context/use-changes"
import { useSelection } from "../context/use-selection"
import { TransactionDetails } from "./database"

export type TransactionContextType = 
    ReturnType<typeof useChanges> &
    ReturnType<typeof useSelection> &
    ReturnType<typeof useManager<TransactionDetails>> & {
        bucketId?: number
    }