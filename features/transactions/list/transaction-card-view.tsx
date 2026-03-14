'use client'

import { TransactionCardState, StatusConfig, ActionConfig, OperationConfig } from "../types/display";
import { cn } from "@/lib/utils";
import { formatarData, formatarDinheiro } from "@/lib/formatters";
import TransactionCardFooter from "./transaction-card-footer";
import TransactionCardHeader from "./transaction-card-body";
import MovementBadge from "../components/movement-badge";
import { TransactionDetails } from "../types/database";

interface Props extends TransactionCardState {
    operationConfig: OperationConfig
    statusConfig: StatusConfig
    actionConfig: ActionConfig
    transaction: TransactionDetails
}

export default function TransactionCardView({ operationConfig, actionConfig, transaction, ...footerPropsElse}: Props) {
    const bodyProps = {
        operationConfig,
        description: transaction.description,
        costCenterName: transaction.costCenter.name,
        amountString: formatarDinheiro(transaction.amount),
        dateString: formatarData(transaction.date)
    }

    const footerProps = {
        isShared: transaction.isShared,
        status: transaction.status,
        actionConfig,
        ...footerPropsElse
    }

    return <div className={cn("border rounded-2xl overflow-hidden transition-all duration-300 border-border shadow-sm", actionConfig.border)}>
        <div className="p-3 space-y-1">
            <TransactionCardHeader {...bodyProps} />
            
            <div className="flex flex-col flex-wrap w-full gap-0 pt-1">
                {transaction.movements.map((mv) => <MovementBadge movimentacao={mv} key={mv.id} />)}
            </div>
        </div>
        <TransactionCardFooter {...footerProps} />
    </div>
}