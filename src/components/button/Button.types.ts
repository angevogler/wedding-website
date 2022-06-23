import { RefObject, ReactNode } from 'react'

export interface ButtonProps {
    type?: 'button' | 'submit' | 'reset'
    name?: string
    disabled?: boolean
    onClick?: (event: React.MouseEvent) => void
    variant?: ButtonVariant
    children?: ReactNode
    ref?: RefObject<HTMLButtonElement>
    className?: string
}

export enum ButtonVariant {
    DEFAULT = 'default',
    TEXT = 'text',
}

