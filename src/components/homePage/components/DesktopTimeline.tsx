import React from 'react'
import styled from 'styled-components'

import fall2016Small from '../../../assets/photos/fall-2016-small.jpg'
import fall2016 from '../../../assets/photos/fall-2016.jpg'
import fall2017Image1Small from '../../../assets/photos/fall-2017-1-small.jpeg'
import fall2017Image1 from '../../../assets/photos/fall-2017-1.jpg'
import fall2017Image2Small from '../../../assets/photos/fall-2017-2-small.jpeg'
import fall2017Image2 from '../../../assets/photos/fall-2017-2.jpg'
import summerFall2020Image1Small from '../../../assets/photos/summer-fall-2020-small.jpeg'
import summerFall2020Image1 from '../../../assets/photos/summer-fall-2020.jpg'
import summerFall2020Image2Small from '../../../assets/photos/summer-fall-2020-2-small.jpeg'
import summerFall2020Image2 from '../../../assets/photos/summer-fall-2020-2.jpg'
import engagementImageSmall from '../../../assets/photos/engagement-photo-small.jpeg'
import engagementImage from '../../../assets/photos/engagement-photo.jpg'

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
                    hasOppositeContent
                >
                    <TimelineContent position={timelineItems[1].position}>
                        <StyledH3>{timelineItems[1].title}</StyledH3>
                        <BodyLarge>{timelineItems[1].content}</BodyLarge>
                    </TimelineContent>
                    <TimelineSeparator>
                        <TimelineConnectorDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent position={TimelineContentPosition.RIGHT}>
                        <Fall2017Container>
                            <Fall2017Image1
                                src={fall2017Image1}
                                placeholderSrc={fall2017Image1Small}
                                alt="fall-2017-img-1"
                            />
                            <Fall2017Image2
                                src={fall2017Image2}
                                placeholderSrc={fall2017Image2Small}
                                alt="fall-2017-img-2"
                            />
                        </Fall2017Container>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem
                    position={timelineItems[2].position}
                    isAlternating
                    hasOppositeContent
                >
                    <TimelineContent position={TimelineContentPosition.RIGHT}>
                        <SummerFall2020Container>
                            <SummerFall2020Image1
                                src={summerFall2020Image2}
                                placeholderSrc={summerFall2020Image2Small}
                                alt="summer-fall-2020-img-2"
                            />
                            <SummerFall2020Image2
                                src={summerFall2020Image1}
                                placeholderSrc={summerFall2020Image1Small}
                                alt="summer-fall-2020-img-1"
                            />
                        </SummerFall2020Container>
                    </TimelineContent>
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
                    hasOppositeContent
                >
                    <TimelineContent position={timelineItems[3].position}>
                        <StyledH3>{timelineItems[3].title}</StyledH3>
                        <BodyLarge>{timelineItems[3].content}</BodyLarge>
                    </TimelineContent>
                    <TimelineSeparator>
                        <TimelineConnectorDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent position={TimelineContentPosition.RIGHT}>
                        <EngagementPhotoImage
                            src={engagementImage}
                            placeholderSrc={engagementImageSmall}
                            alt="engagement-img"
                        />
                    </TimelineContent>
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

    @media only screen and (min-width: ${breakpoints.medium}) {
        margin-left: 90px;
    }
`

const Fall2017Container = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: ${breakpoints.medium}) {
        display: block;
    }
`

const Fall2017Image1 = styled(ProgressiveImage)`
    width: 275px;
`

const Fall2017Image2 = styled(ProgressiveImage)`
    width: 275px;
    margin-top: 8px;

    @media only screen and (min-width: ${breakpoints.medium}) {
        margin-top: -50px;
        margin-left: 225px;
    }
`

const SummerFall2020Container = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: ${breakpoints.medium}) {
        display: block;
    }
`

const SummerFall2020Image1 = styled(ProgressiveImage)`
    width: 275px;
`

const SummerFall2020Image2 = styled(ProgressiveImage)`
    width: 275px;
    margin-top: 8px;

    @media only screen and (min-width: ${breakpoints.medium}) {
        margin-top: -50px;
        margin-left: 90px;
    }
`

const EngagementPhotoImage = styled(ProgressiveImage)`
    width: 275px;
`

export default DesktopTimeline
