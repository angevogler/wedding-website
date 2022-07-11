import React from 'react'
import styled from 'styled-components'

import { color } from '../../styles/theme'

import { timelineItems } from './timelineItems'

import { BodyLarge, H3, FancyH1 } from '../typography'
import {
    Timeline,
    TimelineItem,
    TimelineContent,
    TimelineSeparator,
    TimelineConnector,
    TimelineConnectorDot,
} from '../timeline'

const HomePage: React.FC = () => (
    <HomePageContainer>
        <FancyH1>Our Story</FancyH1>
        <Timeline>
            {timelineItems.map(item => (
                <TimelineItem key={item.index}>
                    <TimelineSeparator>
                        <TimelineConnectorDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <StyledH3>{item.title}</StyledH3>
                        <BodyLarge>{item.content}</BodyLarge>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    </HomePageContainer>
)

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`
const StyledH3 = styled(H3)`
    color: ${color.mainPalette.coral60};
    margin-bottom: 12px;
`

export default HomePage
