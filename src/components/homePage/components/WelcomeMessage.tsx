import React from 'react'
import styled from 'styled-components'

import backgroundSmall from '../../../assets/photos/welcome-message-background-small.jpeg'
import background from '../../../assets/photos/welcome-message-background.jpg'

import { breakpoints, color } from '../../../styles/theme'

import { ProgressiveImage } from '../../progressiveImage'
import { BodyLarge } from '../../typography'

const WelcomeMessage: React.FC = () => (
    <WelcomeMessageRoot>
        <ProgressiveImageRoot
            src={background}
            placeholderSrc={backgroundSmall}
            alt={'welcome-message-background'}
            width="100%"
            height="100%"
        />
        <WelcomeTextContainer>
            <BodyLarge>
                We’re so excited that you’re joining us on our latest adventure! Our wedding website is here to help you plan your trip to Asheville for our big day. Here you’ll find the answers to any questions you may have, local recommendations, links to our hotel block, and be able to browse through some of our favorite photos. We can’t wait to celebrate with you on April 29!
            </BodyLarge>
        </WelcomeTextContainer>
    </WelcomeMessageRoot>
)

const WelcomeMessageRoot = styled.div`
    width: 100%;
    position: relative;
`

const ProgressiveImageRoot = styled(ProgressiveImage)`
    width: 100%;
    height: 540px;
    object-fit: cover;

    @media only screen and (min-width: ${breakpoints.small}) {
        height: 670px;
    }
`

const WelcomeTextContainer = styled.div`
    position: absolute;
    padding: 24px;
    bottom: 24px;
    max-width: 1000px;
    background-color: rgba(252, 238, 233, 0.75);
    left: 24px;
    right: 24px;

    @media only screen and (min-width: ${breakpoints.small}) {
        padding: 64px;
        left: 10%;
        right: 10%;
    }
`

export default WelcomeMessage
