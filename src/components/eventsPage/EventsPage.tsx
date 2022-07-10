import React from 'react'
import styled from 'styled-components'
import { BodyLarge, H5, FancyH1 } from '../typography'

const EventsPage: React.FC = () => (
    <EventsPageContainer>
        <FancyH1>Events</FancyH1>
        <H5>Saturday, April 29th</H5>
        <BodyLarge>
            5:30 Ceremony at Highland Brewing
        </BodyLarge>
        <BodyLarge>
            Cocktail Hour and Reception to follow
        </BodyLarge>
    </EventsPageContainer>
)

const EventsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default EventsPage
