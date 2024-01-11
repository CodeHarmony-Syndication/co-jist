export enum SelectSize {
    Normal = '',
    Small = 'select-sm',
}

export type SelectOption = {
    icon?: React.ReactNode
    title: string
    value: string | number
}

export type SelectProps = {
    error?: string
    isDisabled?: boolean
    label: string
    options: SelectOption[]
    size?: SelectSize
}