import React from 'react'
import styled from 'styled-components'

import { color, breakpoints } from '../../../styles/theme'

import { timelineItems } from '../timelineItems'

import { BodyLarge, H3, FancyH1 } from '../../typography'

import WelcomeMessage from './WelcomeMessage'
import DesktopTimeline from './DesktopTimeline'
import {
    Timeline,
    TimelineItem,
    TimelineContent,
    TimelineSeparator,
    TimelineConnector,
    TimelineConnectorDot,
} from '../../timeline'
import { TimelineContentPosition } from '../../timeline/TimelineContent'

const HomePage: React.FC = () => (
    <HomePageContainer>
        <WelcomeMessage/>
        
        <FancyH1>Our Story</FancyH1>
        <DesktopTimeline />

        <MobileTimelineContainer>
            <Timeline>
                {timelineItems.map(item => (
                    <TimelineItem
                        key={item.index}
                    >
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
        </MobileTimelineContainer>
    </HomePageContainer>
)

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const DesktopTimelineContainer = styled.div`
    display: none;

    @media only screen and (min-width: ${breakpoints.small}) {
        display: block;
    }
`

const MobileTimelineContainer = styled.div`
    @media only screen and (min-width: ${breakpoints.small}) {
        display: none;
    }
`

const StyledH3 = styled(H3)`
    color: ${color.mainPalette.coral60};
    margin-bottom: 12px;
`

export default HomePage
