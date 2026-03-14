import { TransactionDetails } from "../types/database";
import { TransacaoCard } from "./card";

interface Props {
    transacoes: TransactionDetails[]
}

export function TransacaoManager({ transacoes }: Props) {
    return <div>
        <div className="flex flex-col gap-4"> {transacoes.map(t => <TransacaoCard key={t.id} transacao={t} />)} </div>
    </div>
}