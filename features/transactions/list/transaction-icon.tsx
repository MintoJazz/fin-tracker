import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface TransactionIconSectionProps {
    children: ReactNode
    className: string
}

export default function TransactionIconSection({ children, className }: TransactionIconSectionProps) {
    return <div className={cn("p-2 rounded-xl h-fit shrink-0", className)}>
        {children}
    </div>
}