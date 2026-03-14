export const ERRORS = {
    SIGN: {
        NO_NEGATIVE: "Esta operação (Receita) não permite valores negativos.",
        NO_POSITIVE: "Esta operação (Despesa) não permite valores positivos.",
        NEED_NEGATIVE: "A operação exige pelo menos uma saída de valor (negativo).",
        NEED_POSITIVE: "A operação exige pelo menos uma entrada de valor (positivo).",
    },

    MATH: {
        SUM_MISMATCH: "A soma das divisões não corresponde ao valor total da transação.",
        
        ZERO_SUM: "O valor que sai deve ser exatamente igual ao valor que entra (Soma Zero).",
        
        NET_EXPENSE: "O saldo final das movimentações deve corresponder ao valor da despesa.",
    },

    LOGIC: {
        MISSING_ROLES: "A operação está incompleta. Verifique se definiu todas as partes.",
        
        MISSING_PAYER: "É obrigatório definir quem pagou a conta (Despesa).",
        MISSING_DEBTOR: "É obrigatório definir quem ficou devendo (Ressarcimento).",
        MISSING_RECEIVER: "É obrigatório definir onde o valor será recebido de volta (Reembolso).",
        
        MISSING_ORIGIN: "Faltou definir a origem do dinheiro.",
        MISSING_DESTINATION: "Faltou definir o destino do dinheiro."
    }
} as const;