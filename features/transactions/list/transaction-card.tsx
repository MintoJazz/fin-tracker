import { OperationType, TransactionStatus } from "@/generated/prisma/enums";
import { OPERATION_REGISTRY } from "../constants/operation";
import { TransactionDetails } from "../types/database";
import { STATUS_LABEL } from "../constants/status";
import { ACTIONS_REGISTRY } from "../constants/action";
import TransactionCardView from "./transaction-card-view";
import { Action } from "../types/display";
import { useTransactionCard } from "./use-transaction-card";

interface Props {
    transaction: TransactionDetails
    original?: TransactionDetails
    action: Action
}

export default function TransactionCard({ transaction, action, original }: Props) {
    const { isSelected, ...hook } = useTransactionCard(transaction, original)

    const operationType: OperationType = (transaction.operations?.[0]?.operation ?? transaction.type) as OperationType
    const statusType: TransactionStatus = transaction.status

    const operationConfig = OPERATION_REGISTRY[operationType]
    const statusConfig = STATUS_LABEL[statusType]
    const actionConfig = ACTIONS_REGISTRY[action]

    const viewProps = {
        ...hook,
        actionConfig: actionConfig, 
        operationConfig: operationConfig, 
        statusConfig: statusConfig,
        isSelected: isSelected,
        transaction,
        original
    }

    return <TransactionCardView {...viewProps} />
}