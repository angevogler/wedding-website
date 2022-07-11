import React from 'react'
import styled from 'styled-components'

export interface TimelineSeparatorProps {
    children: any
}

const TimelineSeparator: React.FC<TimelineSeparatorProps> = ({ children }) => (
    <TimelineSeparatorRoot>
        {children}
    </TimelineSeparatorRoot>
)

const TimelineSeparatorRoot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0;
`

export default TimelineSeparator
