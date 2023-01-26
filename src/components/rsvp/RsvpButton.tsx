import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { color, fontFamily } from '../../styles/theme'
import { Button } from '../button'

const RsvpButton: React.FC = () => {
    const navigate = useNavigate()

    return (
        <StyledButton onClick={() => navigate('/rsvp')}>
            RSVP
        </StyledButton>
    )
}

const StyledButton = styled(Button)`
    width: 100%;
    max-width: 301px;
    padding: 16px;
    background-color: ${color.mainPalette.coral60};
    color: ${color.mainPalette.coral10};
    font-family: ${fontFamily.playfairDisplaySC};
    font-size: 1.125rem;
    font-weight: 700;
`

export default RsvpButton
