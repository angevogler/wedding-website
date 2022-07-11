import React from 'react'
import styled from 'styled-components'

import backgroundSmall from '../../../assets/photos/welcome-message-background-small.jpeg'
import background from '../../../assets/photos/welcome-message-background.jpg'

import { breakpoints } from '../../../styles/theme'

import { ProgressiveImage } from '../../progressiveImage'

const WelcomeMessage: React.FC = () => (
    <ProgressiveImageRoot
        src={background}
        placeholderSrc={backgroundSmall}
        alt={'welcome-message-background'}
        width="100%"
        height="100%"
    />
)

const ProgressiveImageRoot = styled(ProgressiveImage)`
    width: 100%;
    height: 540px;
    object-fit: cover;

    @media only screen and (min-width: ${breakpoints.small}) {
        height: 670px;
    }
`

export default WelcomeMessage
