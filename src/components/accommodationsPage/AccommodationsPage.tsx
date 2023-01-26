import React from 'react'
import styled from 'styled-components'

import { color, breakpoints } from '../../styles/theme'
import { BodyLarge, BodySmall, FancyH1 } from '../typography'
import { Hyperlink } from '../hyperlink'

const AccommodationsPage: React.FC = () => (
    <AccommodationsPageRoot>
        <PageTitle>Accommodations</PageTitle>

        <AccommodationsContainer>
            <AccommodationsMessage>
                <BodyLarge>For your convenience a block of rooms have been reserved at the DoubleTree Biltmore Village and the Hampton Inn & Suites Asheville Biltmore Village. The two hotels are in the same parking lot and the shuttle for the wedding will leave from the DoubleTree</BodyLarge>

                <HotelInfoContainer>
                    <BodyLarge>DoubleTree Biltmore Village</BodyLarge>
                    <BodySmall>115 Hendersonville Rd</BodySmall>
                    <BodySmall>Asheville, NC 28803</BodySmall>
                    <Hyperlink
                        id="doubletree-link"
                        href="https://www.hilton.com/en/attend-my-event/avlbmdt-vpw-7051239c-4ac2-4e10-a295-5626994fb891/"
                        target="blank"
                    >
                        Book Now!
                    </Hyperlink>
                </HotelInfoContainer>

                <HotelInfoContainer>
                    <BodyLarge>Hampton Inn & Suites Asheville Biltmore Village</BodyLarge>
                    <BodySmall>117 Hendersonville Rd</BodySmall>
                    <BodySmall>Asheville, NC 28803</BodySmall>
                    <Hyperlink
                        id="hampton-inn-link"
                        href="https://www.hilton.com/en/attend-my-event/avlbvhx-vpw-b7acfad4-b40e-4f6c-843f-b1a1e59b80fb/"
                        target="blank"
                    >
                        Book Now!
                    </Hyperlink>
                </HotelInfoContainer>
            </AccommodationsMessage>
        </AccommodationsContainer>
    </AccommodationsPageRoot>
)

const AccommodationsPageRoot = styled.div`
    display: flex;
    flex-direction: column;
    alignItems: center;
`

const PageTitle = styled(FancyH1)`
    margin-bottom: 48px;
    text-align: center;
`

const AccommodationsContainer = styled.div`
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

const AccommodationsMessage = styled.div`
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

export default AccommodationsPage
