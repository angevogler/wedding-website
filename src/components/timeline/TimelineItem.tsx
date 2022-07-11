import React from 'react'
import styled from 'styled-components'

import { TimelineContentPosition } from './TimelineContent'

export interface TimelineItemProps {
    position?: TimelineContentPosition
    isAlternating?: boolean
    hasOppositeContent?: boolean
    children?: any
}

const TimelineItem: React.FC<TimelineItemProps> = ({
    position = TimelineContentPosition.RIGHT,
    isAlternating = false,
    hasOppositeContent = false,
    children
}) => {
    return (
        <TimelineItemContainer
            position={position}
            isAlternating={isAlternating}
            hasOppositeContent={hasOppositeContent}
        >
            {children}
        </TimelineItemContainer>
    )
}

const TimelineItemContainer = styled.li<TimelineItemProps>`
    list-style: none;
    display: flex;
    position: relative;

    &:before {
        ${({ position, isAlternating, hasOppositeContent }) => {
            if (position === TimelineContentPosition.RIGHT && isAlternating && !hasOppositeContent) {
                return `
                    content: '';
                    flex: 1;
                    padding: 6px 16px;
                `
            }
            return ``
        }}
    }

    &:after {
        ${({ position, isAlternating, hasOppositeContent }) => {
            if (position === TimelineContentPosition.LEFT && isAlternating && !hasOppositeContent) {
                return `
                    content: '';
                    flex: 1;
                    padding: 6px 16px;
                `
            }
            return ``
        }}
    }
`

export default TimelineItem
