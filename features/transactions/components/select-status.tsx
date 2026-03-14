import { cn } from "@/lib/utils"
import { STATUS_LABEL } from "../constants/status"
import { TransactionStatus } from "@/generated/prisma/enums"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Check } from "lucide-react"
import { StatusConfig } from "../types/display"

interface SelectStatusProps {
    current: TransactionStatus
    onClick: (status: TransactionStatus) => void
    config: StatusConfig
}

export default function SelectStatus({ current, onClick, config }: SelectStatusProps) {
    const options = STATUS_LABEL
    const Icon = config.icon

    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <div className={cn(
                "flex items-center gap-1 px-1.5 py-0.5 rounded-md border text-[9px] uppercase font-black tracking-tight cursor-pointer",
                config.color
            )}>
                <Icon size={10} />
                {config.label}
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuGroup>
                {
                    Object.entries(options).map(([key, val]) => <DropdownMenuItem className="flex gap-2 justify-between"
                        key={key}
                        onSelect={() => onClick(key as TransactionStatus)}>
                        {val.label}
                        <Check className={cn(
                            "mr-2 h-4 w-4",
                            options[current as TransactionStatus].label === options[key as TransactionStatus].label ? "opacity-100" : "opacity-0"
                        )} />
                    </DropdownMenuItem>)
                }
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
}