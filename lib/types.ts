import { Control, ControllerProps, FieldValues, Path } from "react-hook-form"

export interface ContextType<T> {
    target: T | null,

    isCreateOpen: boolean
    isUpdateOpen: boolean
    isDeleteOpen: boolean

    setIsCreateOpen: (open: boolean) => void
    
    onEdit: (target: T) => void
    onDelete: (target: T) => void
    
    onCloseUpdate: (open: boolean) => void
    onCloseDelete: (open: boolean) => void
}

export interface FormComponentProps<T extends FieldValues> {
    control: Control<T>
    name: Path<T>
    label: string
}

export type OptionsConfig = {
    label: string
}

export type ControllerConfig<T extends FieldValues> = ControllerProps<T>;