import { useEffect, useState, useRef } from "react"
import { isValid, parse } from "date-fns"
import { ptBR } from "date-fns/locale"

interface Props {
    date: Date | undefined
    onChange: (date: Date | undefined) => void
}

export function useDateMaskSegmented({ date, onChange }: Props) {
    const [day, setDay] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")
    
    const dayRef = useRef<HTMLInputElement>(null)
    const monthRef = useRef<HTMLInputElement>(null)
    const yearRef = useRef<HTMLInputElement>(null)
    const isInternalUpdate = useRef(false)

    // Sincronizar valores com a data externa
    useEffect(() => {
        if (isInternalUpdate.current) {
            isInternalUpdate.current = false
            return
        }
        
        if (date) {
            const d = date.getDate().toString().padStart(2, '0')
            const m = (date.getMonth() + 1).toString().padStart(2, '0')
            const y = date.getFullYear().toString()
            
            // Só atualiza se realmente mudou
            if (d !== day || m !== month || y !== year) {
                setDay(d)
                setMonth(m)
                setYear(y)
            }
        } else {
            if (day !== "" || month !== "" || year !== "") {
                setDay("")
                setMonth("")
                setYear("")
            }
        }
    }, [date])

    // Validar e atualizar data quando os campos mudarem
    useEffect(() => {
        if (isInternalUpdate.current) {
            isInternalUpdate.current = false
            return
        }
        
        if (day.length === 2 && month.length === 2 && year.length === 4) {
            const dateString = `${day}/${month}/${year}`
            const parsedDate = parse(dateString, "dd/MM/yyyy", new Date(), { locale: ptBR })
            
            if (isValid(parsedDate) && parsedDate.getFullYear() >= 1900) {
                isInternalUpdate.current = true
                onChange(parsedDate)
            }
        } else if (day === "" && month === "" && year === "") {
            isInternalUpdate.current = true
            onChange(undefined)
        }
    }, [day, month, year, onChange])

    const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '').slice(0, 2)
        
        // Validar dia: não permitir primeiro dígito > 3
        if (value.length === 1 && parseInt(value) > 3) {
            value = '0' + value
        }
        // Validar dia completo: não permitir > 31
        if (value.length === 2 && parseInt(value) > 31) {
            value = '31'
        }
        // Não permitir 00
        if (value === '00') {
            value = '01'
        }
        
        setDay(value)
        
        // Auto-avançar para mês quando completar dia
        if (value.length === 2) {
            monthRef.current?.focus()
        }
    }

    const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '').slice(0, 2)
        
        // Validar mês: não permitir primeiro dígito > 1
        if (value.length === 1 && parseInt(value) > 1) {
            value = '0' + value
        }
        // Validar mês completo: não permitir > 12 ou 00
        if (value.length === 2) {
            const numValue = parseInt(value)
            if (numValue > 12) {
                value = '12'
            } else if (numValue === 0) {
                value = '01'
            }
        }
        
        setMonth(value)
        
        // Auto-avançar para ano quando completar mês
        if (value.length === 2) {
            yearRef.current?.focus()
        }
    }

    const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 4)
        setYear(value)
    }

    const handleDayKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'ArrowRight' || (e.key === '/' && day.length > 0)) {
            e.preventDefault()
            monthRef.current?.focus()
        } else if (e.key === 'ArrowDown') {
            e.preventDefault()
            return 'openCalendar'
        }
    }

    const handleMonthKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && month === '') {
            e.preventDefault()
            dayRef.current?.focus()
        } else if (e.key === 'ArrowRight' || (e.key === '/' && month.length > 0)) {
            e.preventDefault()
            yearRef.current?.focus()
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault()
            dayRef.current?.focus()
        } else if (e.key === 'ArrowDown') {
            e.preventDefault()
            return 'openCalendar'
        }
    }

    const handleYearKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && year === '') {
            e.preventDefault()
            monthRef.current?.focus()
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault()
            monthRef.current?.focus()
        } else if (e.key === 'ArrowDown') {
            e.preventDefault()
            return 'openCalendar'
        }
    }

    const reset = () => {
        setDay("")
        setMonth("")
        setYear("")
        dayRef.current?.focus()
    }

    return {
        day: {
            ref: dayRef,
            value: day,
            onChange: handleDayChange,
            onKeyDown: handleDayKeyDown,
        },
        month: {
            ref: monthRef,
            value: month,
            onChange: handleMonthChange,
            onKeyDown: handleMonthKeyDown,
        },
        year: {
            ref: yearRef,
            value: year,
            onChange: handleYearChange,
            onKeyDown: handleYearKeyDown,
        },
        reset,
    }
}