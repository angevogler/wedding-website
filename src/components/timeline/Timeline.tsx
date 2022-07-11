import React from 'react'
import styled from 'styled-components'

import { breakpoints } from '../../styles/theme'

export interface TimelineProps {
    children: any
}

const Timeline: React.FC<TimelineProps> = ({ children }) => (
    <TimelineContainer>
        {children}
    </TimelineContainer>
)

const TimelineContainer = styled.ul`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 8px 16px;
    text-align: start;

    @media only screen and (min-width: ${breakpoints.small}) {
        width: 600px;
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
        width: 800px;
    }
`

export default Timeline