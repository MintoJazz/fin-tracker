'use client'

import { formatarData, formatarDinheiro } from "@/lib/formatters";
import { cn } from "@/lib/utils";
import { Building2, MoreHorizontal } from "lucide-react";
//import { getOperationConfig } from "../constants/operation";
//import { useTransactionManager } from "../context/profile/use-manager";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ACTIONS_REGISTRY } from "../constants/action";
import SelectStatus from "./select-status";
import { TransactionStatus } from "@/generated/prisma/enums";
import ToggleShared from "./toggle-shared";
import { TransactionDetails } from "../types/database";
import MovementBadge from "./movement-badge";

interface Props {
    transacao: TransactionDetails
}

export function TransacaoCard({ transacao }: Props) {
    const config = getOperationConfig(transacao)
    const { edit, changes, onCheckedChange, selected } = useTransactionManager();
    
    const change = changes[transacao.id];
    const commitConfig = change ? ACTIONS_REGISTRY[change?.action ?? "stable"] : ACTIONS_REGISTRY.stable;
    const status = change?.domain.status ?? transacao.status;
    const isShared = change?.domain.isShared ?? transacao.isShared;

    const IconSection = <div className={cn("p-2 rounded-xl h-fit shrink-0", config.bg)}>
        <config.icon size={18} className={config.color} />
    </div>

    const SubTitle = <div className="flex items-center text-muted-foreground gap-1">
        <Building2 size={10} />
        <span className="text-xs">
            {transacao.costCenter?.name ?? "Indefinido"}
        </span>
    </div>

    const TitleSection = <div className="min-w-0 flex flex-col justify-between">
        <h3 className="font-bold text-xs text-zinc-900 dark:text-zinc-100 truncate leading-tight">
            {transacao.description}
        </h3>

        {SubTitle}
    </div>

    const Amount = <p className={cn(
        "text-xs font-black tracking-tight",
        config.color
    )}>
        {formatarDinheiro(transacao.amount)}
    </p>

    const TransactionDate = <p className="text-[10px] font-bold text-muted-foreground uppercase mt-1">
        {formatarData(transacao.date)}
    </p>

    const Header = (<div className="flex justify-between items-start gap-4">
        <div className="flex gap-3 min-w-0">
            {IconSection} {TitleSection}
        </div>

        <div className="text-right shrink-0">
            {Amount}
            {TransactionDate}
        </div>
    </div>)

    const MovementManager = <div className="flex flex-col flex-wrap w-full gap-0 pt-1">
        {transacao.movements.map((mv) => <MovementBadge movimentacao={mv} key={mv.id} />)}
    </div>

    const Select = <Checkbox checked={selected.includes(transacao.id)} className="h-4 w-4 rounded-md border-zinc-300 cursor-pointer" onClick={() => onCheckedChange(transacao.id)} />

    const handleShare = () => edit({ isShared: !isShared }, transacao);

    const Share = <ToggleShared isShared={isShared!} onClick={() => handleShare()} />

    const Actions = <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full">
        <MoreHorizontal size={16} className="text-muted-foreground" />
    </Button>

    const handleStatus = (status: string) => edit({status: status as TransactionStatus}, transacao)

    const StatusLabel = <SelectStatus onClick={handleStatus} current={status} key={transacao.id} />

    const Footer = <div className={cn("px-4 py-1.5 border-t flex justify-between items-center transition-colors duration-500", commitConfig.footerBg, commitConfig.border)}>
        <div className="flex items-center gap-4">
            {Select} {Share}
        </div>

        <div className="flex items-center gap-2">
            {StatusLabel} {Actions}
        </div>
    </div>

    return <div className={cn("border rounded-2xl overflow-hidden transition-all duration-300 border-border shadow-sm", commitConfig.border)}>
        <div className="p-3 space-y-1">
            {Header}
            {MovementManager}
        </div>

        {Footer}
    </div>
}