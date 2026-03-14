import { CalendarDays, CheckCircle2, ShieldCheck } from "lucide-react";

export const STATUS_LABEL = {
    PLANEJADO: { label: "Planejado", icon: CalendarDays, color: "text-amber-600 bg-amber-50 dark:bg-amber-500/10 border-amber-100 dark:border-amber-500/20" },
    CONFIRMADO: { label: "Confirmado", icon: CheckCircle2, color: "text-blue-600 bg-blue-50 dark:bg-blue-500/10 border-blue-100 dark:border-blue-500/20" },
    COMPLETADO: { label: "Efetivado", icon: ShieldCheck, color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20" },
    RECONCILIADO: { label: "Reconciliado", icon: CheckCircle2, color: "text-zinc-500 bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" },
} as const;