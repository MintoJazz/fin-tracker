import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { MoreHorizontal } from "lucide-react";
import SelectStatus from "../components/select-status";
import ToggleShared from "../components/toggle-shared";
import { Button } from "@/components/ui/button";
import { TransactionStatus } from "@/generated/prisma/enums";
import { ActionConfig, StatusConfig } from "../types/display";

interface Props {
    isSelected: boolean
    isShared: boolean
    status: TransactionStatus
    statusConfig: StatusConfig
    actionConfig: ActionConfig
    onSelectionChange: () => void
    onIsSharedChange: (isShared: boolean) => void
    onStatusChange: (status: TransactionStatus) => void
}

export default function TransactionCardFooter({ isSelected, isShared, status, statusConfig, onSelectionChange, onIsSharedChange, onStatusChange, actionConfig }: Props) {
    const checkboxProps = {
        checked: isSelected, 
        onClick:onSelectionChange,
        className: "h-4 w-4 rounded-md border-zinc-300 cursor-pointer"
    }

    const toggleSharedProps = {
        isShared: isShared,
        onClick: onIsSharedChange
    }

    const selectStatusProps = {
        config: statusConfig,
        current: status,
        onClick: onStatusChange
    }

    return <div className={cn("px-4 py-1.5 border-t flex justify-between items-center transition-colors duration-500", actionConfig.footerBg, actionConfig.border)}>
        <div className="flex items-center gap-4">
            <Checkbox {...checkboxProps} />
            <ToggleShared {...toggleSharedProps} />
        </div>
        <div className="flex items-center gap-2">
            <SelectStatus {...selectStatusProps} />
            <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full">
                <MoreHorizontal size={16} className="text-muted-foreground" />
            </Button>
        </div>
    </div>
}