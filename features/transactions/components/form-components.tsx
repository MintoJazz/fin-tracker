import { ControllerProps } from "react-hook-form";
import { TransactionFormType } from "../types/form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { MoneyInput } from "@/components/ui/money-input";

export const FORM_REGISTRY: Record<keyof TransactionFormType, ControllerProps<TransactionFormType>> = {
    description: {
        name: "description",
        render: ({ field, fieldState }) => <Field>
            <FieldLabel>Descrição</FieldLabel>
            <Input {...field} placeholder="Ex.: Celular (1/5)" value={field.value as string} />
            <FieldError errors={[fieldState.error]}></FieldError>
        </Field>
    },
    amount: {
        name: "amount",
        render: ({ field, fieldState }) => <Field className="gap-3 -my-2 items-center [&>*]:w-auto" data-invalid={!!fieldState.error}>
            <FieldLabel>Valor</FieldLabel>
            <MoneyInput id="amount" className="w-auto text-center text-2xl" value={field.value as number} onChange={field.onChange} placeholder="0,00" />
            <FieldError errors={[fieldState.error]} />
        </Field>
    }
}

/*
const amountField: TransactionControllerConfig = {
    name: "amount",
    control: form.control,
    render: ({ field, fieldState }) => <Field className="gap-3 -my-2 items-center [&>*]:w-auto" data-invalid={!!fieldState.error}>
        <FieldLabel htmlFor="amount">Digite o Valor</FieldLabel>
        <MoneyInput id="amount" className="w-auto text-center text-2xl" value={field.value as number} onChange={field.onChange} placeholder="0,00" />
        <FieldError errors={[fieldState.error]} />
    </Field>
}
*/