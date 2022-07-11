import React, { useState } from 'react'
import styled from 'styled-components'

import { color, breakpoints } from '../../styles/theme'
import { H3 } from '../typography'

export interface ExpansionPanelProps {
    title: string
    children: any
}

const ExpansionPanel: React.FC<ExpansionPanelProps> = ({
    title,
    children,
}) => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <ExpansionPanelRoot>
            <HeaderButton onClick={() => setIsExpanded(!isExpanded)}>
                <Title>{title}</Title>
                <HeaderIcon>{isExpanded ? '-' : '+'}</HeaderIcon>
            </HeaderButton>
            {isExpanded && <ExpansionPanelContent>{children}</ExpansionPanelContent>}
        </ExpansionPanelRoot>
    )
}

const ExpansionPanelRoot = styled.div`
    border: 1px solid ${color.mainPalette.green20};
    padding: 16px 8px;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;

    @media only screen and (min-width: ${breakpoints.small}) {
        padding: 24px 16px;
        margin: 8px 32px;
        border-radius: 4px;
    }
`

const HeaderButton = styled.button`
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    background: inherit;
    outline: none;
    cursor: pointer;
    width: 100%;
    text-align: left;
`

const Title = styled(H3)`
    font-size: 1.125rem;

    @media only screen and (min-width: ${breakpoints.small}) {
        font-size: 1.5rem;
    }
`

const HeaderIcon = styled(H3)`
    color: ${color.mainPalette.coral60};
`

const ExpansionPanelContent = styled.div`
    display: flex;
    padding: 0 16px;
`

export default ExpansionPanel
