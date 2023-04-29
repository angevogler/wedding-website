import React from 'react'
import styled from 'styled-components'

import { color, breakpoints } from '../../styles/theme'
import { BodyLarge, BodySmall, FancyH1 } from '../typography'
import { Hyperlink } from '../hyperlink'

const TransportationPage: React.FC = () => (
    <TransportationPageRoot>
        <PageTitle>Transportation</PageTitle>

        <TransportationContainer>
            <TransportationMessage>
                <BodyLarge>For your convenience we have two rounds of buses leaving for the venue</BodyLarge>

                <HotelInfoContainer>
                    <BodyLarge>4:15 pm</BodyLarge>
                    <BodySmall>Loading begins at 4:00 pm</BodySmall>
                    <BodySmall>One bus leaving from Hampton Inn Biltmore Village</BodySmall>
                    <BodySmall>One bus leaving from DoubleTree Biltmore Village</BodySmall>
                </HotelInfoContainer>

                <HotelInfoContainer>
                    <BodyLarge>5:00 pm</BodyLarge>
                    <BodySmall>Loading begins at 4:50 pm</BodySmall>
                    <BodySmall>Two buses leaving from DoubleTree Biltmore Village</BodySmall>
                </HotelInfoContainer>
            </TransportationMessage>
        </TransportationContainer>
    </TransportationPageRoot>
)

const TransportationPageRoot = styled.div`
    display: flex;
    flex-direction: column;
    alignItems: center;
`

const PageTitle = styled(FancyH1)`
    margin-bottom: 48px;
    text-align: center;
`

const TransportationContainer = styled.div`
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

const TransportationMessage = styled.div`
    border: 1px solid ${color.mainPalette.green80};
    padding: 16px 8px 48px;
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    background-color: ${color.mainPalette.neutral0};

    @media only screen and (min-width: ${breakpoints.small}) {
        padding: 24px 16px 48px;
        margin: 8px 32px;
    }
`

const HotelInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
`

export default TransportationPage
