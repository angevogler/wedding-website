import React from 'react'
import styled from 'styled-components'

export interface TimelineProps {
    children: any
}

const Timeline: React.FC<TimelineProps> = ({ children }) => (
    <TimelineContainer>
        {children}
    </TimelineContainer>
)

const TimelineContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 8px 16px;
    text-align: start;
`

export default Timeline