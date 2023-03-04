import React from 'react'
import styled from 'styled-components'
import { Hyperlink } from '../hyperlink'
import { BodyLarge, H5, FancyH1 } from '../typography'

const EventsPage: React.FC = () => (
    <EventsPageContainer>
        <FancyH1>Events</FancyH1>
        <StyledH5>Saturday, April 29th</StyledH5>
        <BodyLarge>
            5:30pm - Ceremony at Highland Brewing Events Center
        </BodyLarge>
        <AddressContainer>
            <BodyLarge>12 Old Charlotte Highway #200</BodyLarge>
            <BodyLarge>Asheville, NC</BodyLarge>
        </AddressContainer>
        <BodyLarge>
            Cocktail Hour and Reception to follow
        </BodyLarge>
        <StyledHyperlink
            id="venue-website"
            href="https://highlandbrewing.com/private-events/"
            target="_blank"
        >
            View Venue Website
        </StyledHyperlink>
    </EventsPageContainer>
)

const EventsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const StyledH5 = styled(H5)`
    margin-bottom: 12px;
`

const AddressContainer = styled.div`
    margin: 12px;
`

const StyledHyperlink = styled(Hyperlink)`
    margin: 12px;
`

export default EventsPage
