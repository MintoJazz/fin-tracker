import { ArrowDownCircle, ArrowLeftRight, ArrowUpCircle, Layers, Wrench } from "lucide-react"

const TEMPLATE_RECEITA = {
    icon: ArrowUpCircle,
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-500/10"
}

const TEMPLATE_DESPESA = {
    icon: ArrowDownCircle,
    color: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-500/10"
}

export const OPERATION_REGISTRY = {
    "RECEITA": {
        ...TEMPLATE_RECEITA,
        label: "Receita",
        description: "Entrada de dinheiro (salário, vendas).",
    },
    "DESPESA": {
        ...TEMPLATE_DESPESA,
        label: "Despesa",
        description: "Saídas definitivas (compras, contas).",
    },

    "TRANSFERENCIA": {
        label: "Transferência Interna",
        description: "Movimentação entre contas.",
        icon: ArrowLeftRight,
        color: "text-blue-500",
        bg: "bg-blue-50 dark:bg-blue-500/10",
    },
    "ENVIO": {
        ...TEMPLATE_DESPESA,
        label: "Transferir para...",
        description: "Envio para outra conta.",
    },
    "RECEBIMENTO": {
        ...TEMPLATE_RECEITA,
        label: "Receber de...",
        description: "Recebimento de outra conta.",
    },

    "REEMBOLSAVEL": {
        label: "Gasto Reembolsável",
        description: "Gasto a ser reembolsado (gera crédito).",
        icon: Layers,
        color: "text-purple-500",
        bg: "bg-purple-50 dark:bg-purple-500/10",
    },
    "DESEMBOLSO": {
        ...TEMPLATE_DESPESA,
        label: "Pagar por Outros",
        description: "Pagamento por terceiros (gera crédito).",
    },
    "RESSARCIMENTO": {
        ...TEMPLATE_DESPESA,
        label: "Pagar Reembolso",
        description: "Reembolsar pagamento feito por outro.",
    },
    "REEMBOLSO": {
        ...TEMPLATE_RECEITA,
        label: "Receber Reembolso",
        description: "Receber valor gasto por terceiros.",
    },

    "AJUSTE": {
        label: "Ajuste",
        description: "Correção manual de saldo.",
        icon: Wrench,
        color: "text-zinc-500",
        bg: "bg-zinc-50 dark:bg-zinc-500/10"
    }
} as const;