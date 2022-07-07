import React from 'react'
import styled from 'styled-components'

import { color } from '../../styles/theme'
import { Button, ButtonVariant } from '../button'

const MobileNav = () => {
    return (
        <MobileNavContainer>
            <NavButton variant={ButtonVariant.TEXT}>
                X
            </NavButton>
        </MobileNavContainer>
    )
}

const MobileNavContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 56px;
    border-bottom: 1px solid ${color.mainPalette.green40};
`

const NavButton = styled(Button)`
    color: ${color.mainPalette.green40};
    height: 24px;
    width: 24px;
    padding: 12px;
`

export default MobileNav
