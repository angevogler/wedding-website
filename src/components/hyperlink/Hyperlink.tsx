import React from 'react'
import styled from 'styled-components'

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

const HyperlinkRoot = styled.a``

export default Hyperlink
