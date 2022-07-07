import React from 'react'
import styled from 'styled-components'

import initialsOnlyLogo from '../../assets/logos/wedding-logo-initials-only.svg'

import { color } from '../../styles/theme'
import { Button, ButtonVariant } from '../button'

const MobileNav = () => {
    return (
        <MobileNavContainer>
            <NavButton variant={ButtonVariant.TEXT}>
                X
            </NavButton>
            <LogoContainer>
                <InitialsOnlyLogo src={initialsOnlyLogo} alt="logo" />
            </LogoContainer>
        </MobileNavContainer>
    )
}

const MobileNavContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 72px;
    border-bottom: 1px solid ${color.mainPalette.green40};
    padding: 4px 0;
    display: grid;
    grid-template-columns: 24px auto 24px;
`

const NavButton = styled(Button)`
    color: ${color.mainPalette.green40};
    height: 24px;
    width: 24px;
    padding: 12px;
`

const LogoContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
`

const InitialsOnlyLogo = styled.img`
    height: 64px;
`

export default MobileNav
