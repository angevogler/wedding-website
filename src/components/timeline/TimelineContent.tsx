import React from 'react'
import styled from 'styled-components'

import { breakpoints } from '../../styles/theme'

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
    padding: 0px 16px 16px;
    text-align: ${props => props.position === 'left' ? 'right' : 'left'};
    max-width: 400px;
    flex: 1;

    @media only screen and (min-width: ${breakpoints.small}) {
        padding-bottom: 24px;
    }
`

export default TimelineContent
