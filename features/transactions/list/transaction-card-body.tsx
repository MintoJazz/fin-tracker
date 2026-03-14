import { CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Building2 } from "lucide-react";
import { OperationConfig } from "../types/display";

interface Props {
    operationConfig: OperationConfig
    description: string
    costCenterName?: string
    amountString: string
    dateString: string
}

export default function TransactionCardHeader({ operationConfig, description, costCenterName, amountString, dateString }: Props) {
    const Icon = operationConfig.icon
    const iconProps = {
        size: 18,
        className: operationConfig.color
    }

    return <div className="flex justify-between items-start gap-4">
        <div className="flex gap-3 min-w-0">
            <div className={cn("p-2 rounded-xl h-fit shrink-0", operationConfig.bg)}>
                <Icon {...iconProps} />
            </div>
            <div className="min-w-0 flex flex-col justify-between">
                <CardTitle>{description}</CardTitle>
                <div className="flex items-center text-muted-foreground gap-1">
                    <Building2 size={10} />
                    <span className="text-xs">
                        {costCenterName ?? "Indefinido"}
                    </span>
                </div>
            </div>
        </div>
        <div className="text-right shrink-0">
            <p className={cn("text-xs font-black tracking-tight", operationConfig.color)}>
                {amountString}
            </p>
            <p className="text-[10px] font-bold text-muted-foreground uppercase mt-1">
                {dateString}
            </p>
        </div>
    </div>
}