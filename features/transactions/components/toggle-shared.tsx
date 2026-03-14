import { cn } from "@/lib/utils";
import { Users2 } from "lucide-react";

interface ToggleSharedProps {
    onClick: (isShared: boolean) => void,
    isShared: boolean
}

export default function ToggleShared({ onClick, isShared }: ToggleSharedProps) {
    return <button type="button" onClick={() => onClick(!isShared)} title={isShared ? "Remover do rateio" : "Adicionar ao rateio"}
        className={cn(
            "flex items-center justify-center transition-colors p-1",
            isShared
                ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-500/60 dark:text-indigo-400 rounded-full"
                : "hover:bg-muted-foreground/10 text-muted-foreground"
        )}>
        <Users2 size={12} />
    </button>
}