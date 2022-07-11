import React from 'react'
import styled from 'styled-components'

export interface TimelineItemProps {
    children: any
}

const TimelineItem: React.FC<TimelineItemProps> = ({
    children
}) => {
    return (
        <TimelineItemContainer>
            {children}
        </TimelineItemContainer>
    )
}

const TimelineItemContainer = styled.div`
    display: flex;
`

export default TimelineItem
