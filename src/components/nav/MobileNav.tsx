import React, { useState } from 'react'
import styled from 'styled-components'

import initialsOnlyLogo from '../../assets/logos/wedding-logo-initials-only.svg'

import { color } from '../../styles/theme'
import { Button, ButtonVariant } from '../button'
import MobileNavDrawer from './MobileNavDrawer'

const MobileNav = () => {
    const [showNavDrawer, setShowNavDrawer] = useState(false)

    return (
        <>
            <MobileNavContainer>
                <NavButton variant={ButtonVariant.TEXT} onClick={() => setShowNavDrawer(true)}>
                    <MenuIcon className="material-icons">menu</MenuIcon>
                </NavButton>
                <LogoContainer>
                    <InitialsOnlyLogo src={initialsOnlyLogo} alt="logo" />
                </LogoContainer>
            </MobileNavContainer>

            <MobileNavDrawer open={showNavDrawer} onClose={() => setShowNavDrawer(false)}
            />
        </>
    )
}

const MobileNavContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 72px;
    border-bottom: 1px solid ${color.mainPalette.green40};
    padding: 4px 8px;
    display: grid;
    grid-template-columns: 44px auto 44px;
`

const NavButton = styled(Button)`
    color: ${color.mainPalette.green40};
    height: 36px;
    width: 36px;
    padding: 6px;
    margin-top: auto;
    margin-bottom: auto;
`

const MenuIcon = styled.i`

`

const LogoContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
`

const InitialsOnlyLogo = styled.img`
    height: 64px;
`

export default MobileNav
