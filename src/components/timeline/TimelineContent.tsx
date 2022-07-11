import React from 'react'
import styled from 'styled-components'

export enum TimelineContentPosition {
    RIGHT = 'right',
    LEFT = 'left',
}

export interface TimelineContentProps {
    position?: TimelineContentPosition
    children: any
}

const TimelineContent: React.FC<TimelineContentProps> = ({ 
    position = TimelineContentPosition.RIGHT,
    children,
}) => {
    return (
        <TimelineContentRoot position={position}>
            {children}
        </TimelineContentRoot>
    )
}

const TimelineContentRoot = styled.div<Pick<TimelineContentProps, 'position'>>`
    padding: 8px;
    text-align: ${props => props.position === 'left' ? 'right' : 'left'};
`

export default TimelineContent
