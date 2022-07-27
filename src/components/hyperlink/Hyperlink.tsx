import React from 'react'
import styled from 'styled-components'

import { color } from '../../styles/theme'

export interface HyperlinkProps {
    id: string
    href: string
    target?: string
    className?: string
    children: any
}

const Hyperlink: React.FC<HyperlinkProps> = ({
    id,
    href,
    target,
    className,
    children,
}) => (
    <HyperlinkRoot
        id={id}
        href={href}
        target={target}
        className={className}
    >
        {children}
    </HyperlinkRoot>
)

const HyperlinkRoot = styled.a`
    color: ${color.extendedPalette.coral.coral60};
    text-decoration: none;

    &:hover {
        color: ${color.extendedPalette.coral.coral80};
        text-decoration: underline;
    }
`

export default Hyperlink
