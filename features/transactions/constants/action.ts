export const ACTIONS_REGISTRY = {
    "add": {
        footerBg: "bg-emerald-500/10 dark:bg-emerald-500/20",
        border: "border-emerald-500/40",
        label: "Pendente",
        color: "text-emerald-600",
    },
    "edit": {
        footerBg: "bg-amber-500/10 dark:bg-amber-500/20",
        border: "border-amber-500/40",
        label: "Editado",
        color: "text-amber-600",
    },
    "remove": {
        footerBg: "bg-rose-500/10 dark:bg-rose-500/20",
        border: "border-rose-500/40",
        label: "Remover",
        color: "text-rose-600",
    },
    "stable": {
        footerBg: "bg-muted/10",
        border: "border-border/50",
        label: null,
        color: "text-muted-foreground",
    }
} as const;