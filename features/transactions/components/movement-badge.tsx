"use client"

import { Bucket, Movement } from "@/generated/prisma/client";
import { MOVE_CONFIG } from "../constants/movement";
import { formatarDinheiro } from "@/lib/formatters";
import { cn } from "@/lib/utils";

interface Props {
    movimentacao: Movement & {
        bucket: Bucket
    }
}

export default function MovementBadge({ movimentacao }: Props) {
    const config = MOVE_CONFIG[Math.sign(movimentacao.amount) + 1]

    return <div key={movimentacao.id} className={cn("flex items-start rounded-md gap-0 px-1.5 text-[10px] font-medium justify-between", config.class)} >
        <span className="sm:max-w-xs truncate">{movimentacao.bucket.name}</span>

        <span className="shrink-0 self-end">
            {formatarDinheiro(movimentacao.amount)}
        </span>
    </div>
}