import { BADGE_SCHEMA_REGISTRY } from "@/features/transactions/constants/form-registry/schema"
import { useTransactionForm } from "@/features/transactions/context/form/use-form"
import { baseTransactionSchema } from "@/features/transactions/schemas/base-schema"
import { useEffect, useMemo } from "react"
import { Controller, Resolver, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionFormType } from "@/features/transactions/types/form"
import { ZodObject, ZodRawShape } from "zod"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { FieldDescription, FieldGroup, FieldLegend, FieldSet } from "@/components/ui/field"
import { FORM_REGISTRY } from "@/features/transactions/components/form-components"

export function TransactionForm() {
    const { activeBadges } = useTransactionForm()

    const schema = useMemo(() => activeBadges.reduce((s, badge) => {
        const badgeSchema = BADGE_SCHEMA_REGISTRY[badge]
        return badgeSchema ? s.merge(badgeSchema) : s
    }, baseTransactionSchema as ZodObject<ZodRawShape>), [activeBadges])

    const resolver: Resolver<TransactionFormType> = zodResolver(schema) as unknown as Resolver<TransactionFormType>
    const form = useForm<TransactionFormType>({ resolver })
    const fields = FORM_REGISTRY

    useEffect(() => {
        form.reset(form.getValues())
    }, [form, schema])

    const card = <Card className="gap-4">
        <Controller control={form.control} {...fields.amount} />
    </Card>

    return <Card className="w-md">
        <form>
            <FieldSet>
                <CardHeader>
                    <FieldLegend>Pagar</FieldLegend>
                    <FieldDescription>Uma nova transação para representar um pagamento</FieldDescription>
                </CardHeader>
                <CardContent>
                    <FieldGroup>
                        {card}
                        <Controller control={form.control} {...fields.description} />
                    </FieldGroup>
                </CardContent>
            </FieldSet>
        </form>
    </Card>
}