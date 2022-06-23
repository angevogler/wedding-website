import React, { forwardRef } from 'react'
import styled, {
  css,
  FlattenSimpleInterpolation,
  StyledComponent,
} from 'styled-components'
import { color } from '../../styles/theme'
import {
  ButtonProps,
  ButtonVariant,
} from './Button.types'

const variantOptions: Record<ButtonVariant, FlattenSimpleInterpolation> = {
    default: css``,
    text: css`
      background: transparent;
      background-color: transparent;
  
      &:disabled {
        color: ${color.extendedPalette.darkNeutrals.neutral50};
        background: transparent;
        background-color: transparent;
      }
  
      &:focus {
        box-shadow: none;
      }
    `,
}

// Forward button ref

const ForwardButton = forwardRef<HTMLButtonElement>(
    (
      {
        children,
        type = 'button',
        name,
        disabled,
        onClick,
        variant = ButtonVariant.DEFAULT,
        className,
        ...props
      }: ButtonProps,
      ref
    ) => (
      <button
        type={type}
        onClick={onClick}
        name={name}
        disabled={disabled}
        className={className}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    )
  )

  ForwardButton.displayName = 'Button'

  // Main

  const Button = styled(ForwardButton)<ButtonProps>`
    color: ${color.mainPalette.neutral0};
    border-radius: 4px;
    border: none;
    cursor: pointer;

    &:disabled {
        cursor: not-allowed;
        background-color: ${color.extendedPalette.lightNeutrals.neutral40};
        color: ${color.extendedPalette.darkNeutrals.neutral60};
      }
    
      &:focus {
        box-shadow: 0px 0px 0px 4px rgba(0, 129, 232, 0.5);
        outline: none;
      }
    
      ${({ variant }) =>
    variant && variantOptions[variant]
      ? variantOptions[variant]
      : variantOptions[ButtonVariant.DEFAULT]}
  `

  export default Button
