import React from 'react'
import styled from 'styled-components'

import { color, breakpoints } from '../../styles/theme'
import { Hyperlink } from '../hyperlink'
import { BodyLarge, FancyH1 } from '../typography'

const RsvpPage: React.FC = () => (
    <RsvpPageRoot>
        <PageTitle>RSVP</PageTitle>

        <RsvpContainer>
            <RsvpMessage>
                <BodyLarge>We look forward to celebrating with you!</BodyLarge>
                <RsvpDate>Kindly respond by March 29</RsvpDate>
                <Hyperlink
                    id="rsvp-link"
                    href="https://david-and-angela.rsvpify.com"
                    target='blank'
                >
                    RSVP Now
                </Hyperlink>
            </RsvpMessage>
        </RsvpContainer>
    </RsvpPageRoot>
)

const RsvpPageRoot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PageTitle = styled(FancyH1)`
    margin-bottom: 48px;
    text-align: center;
`

const RsvpContainer = styled.div`
    border: 1px solid ${color.mainPalette.green80};
    padding: 16px 8px;
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    background-color: ${color.mainPalette.green40};

    @media only screen and (min-width: ${breakpoints.small}) {
        padding: 24px 16px;
    }
`

const RsvpMessage = styled.div`
    border: 1px solid ${color.mainPalette.green80};
    padding: 16px 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    background-color: ${color.mainPalette.neutral0};

    @media only screen and (min-width: ${breakpoints.small}) {
        padding: 24px 16px;
        margin: 8px 32px;
        min-width: 400px;
    }
`

const RsvpDate = styled(BodyLarge)`
    margin: 16px 0;
`

export default RsvpPage
