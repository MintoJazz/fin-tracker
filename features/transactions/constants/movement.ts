import { Dot, Minus, Plus } from "lucide-react";

export const MOVE_CONFIG = [
    { 
        class: "text-rose-600",
        icon: Minus
    },     
    {
        class: "text-zinc-500",
        icon: Dot
    },     
    {
        class: "text-emerald-600",
        icon: Plus
    },     
] as const;