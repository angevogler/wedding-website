import React from 'react'
import styled from 'styled-components'

import fall2016Small from '../../../assets/photos/fall-2016-small.jpg'
import fall2016 from '../../../assets/photos/fall-2016.jpg'

import { color, breakpoints } from '../../../styles/theme'

import { timelineItems } from '../timelineItems'

import { BodyLarge, H3 } from '../../typography'

import {
    Timeline,
    TimelineItem,
    TimelineContent,
    TimelineSeparator,
    TimelineConnector,
    TimelineConnectorDot,
} from '../../timeline'

import { TimelineContentPosition } from '../../timeline/TimelineContent'
import { ProgressiveImage } from '../../progressiveImage'

const DesktopTimeline: React.FC = () => (
    <DesktopTimelineRoot>
        <Timeline>
                <TimelineItem
                    position={timelineItems[0].position}
                    isAlternating
                    hasOppositeContent
                >
                    <TimelineContent position={TimelineContentPosition.LEFT}>
                        <Fall2016Image
                            src={fall2016}
                            placeholderSrc={fall2016Small}
                            alt="fall-2016-img"
                        />
                    </TimelineContent>
                    <TimelineSeparator>
                        <TimelineConnectorDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent position={timelineItems[0].position}>
                        <StyledH3>{timelineItems[0].title}</StyledH3>
                        <BodyLarge>{timelineItems[0].content}</BodyLarge>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem
                    position={timelineItems[1].position}
                    isAlternating
                >
                    <TimelineContent position={timelineItems[1].position}>
                        <StyledH3>{timelineItems[1].title}</StyledH3>
                        <BodyLarge>{timelineItems[1].content}</BodyLarge>
                    </TimelineContent>
                    <TimelineSeparator>
                        <TimelineConnectorDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                </TimelineItem>

                <TimelineItem
                    position={timelineItems[2].position}
                    isAlternating
                >
                    <TimelineSeparator>
                        <TimelineConnectorDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent position={timelineItems[2].position}>
                        <StyledH3>{timelineItems[2].title}</StyledH3>
                        <BodyLarge>{timelineItems[2].content}</BodyLarge>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem
                    position={timelineItems[3].position}
                    isAlternating
                >
                    <TimelineContent position={timelineItems[3].position}>
                        <StyledH3>{timelineItems[3].title}</StyledH3>
                        <BodyLarge>{timelineItems[3].content}</BodyLarge>
                    </TimelineContent>
                    <TimelineSeparator>
                        <TimelineConnectorDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                </TimelineItem>

                <TimelineItem
                    position={timelineItems[4].position}
                    isAlternating
                >
                    <TimelineSeparator>
                        <TimelineConnectorDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent position={timelineItems[4].position}>
                        <StyledH3>{timelineItems[4].title}</StyledH3>
                        <BodyLarge>{timelineItems[4].content}</BodyLarge>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
    </DesktopTimelineRoot>
)

const DesktopTimelineRoot = styled.div`
    display: none;

    @media only screen and (min-width: ${breakpoints.small}) {
        display: block;
    }
`

const StyledH3 = styled(H3)`
    color: ${color.mainPalette.coral60};
    margin-bottom: 12px;
`

const Fall2016Image = styled(ProgressiveImage)`
    width: 275px;
`

export default DesktopTimeline
