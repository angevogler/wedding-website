import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import fullsizeLogo from '../../assets/logos/wedding-logo-full.svg'
import collapsedLogo from '../../assets/logos/wedding-logo-collapsed.svg'

import { breakpoints } from '../../styles/theme'

const isMobile = window.innerWidth < 600;

const Header: React.FC = () => {
    const [showFullLogo, setShowFullLogo] = useState<boolean>(isMobile ? false : true)

    useEffect(() => {

    }, [])

    return (
        <HeaderContainer>
            {showFullLogo
            ? (
                <FullSizeLogo src={fullsizeLogo} alt="logo"/>
            ) : (
                <CollapsedLogo src={collapsedLogo} alt="logo"/>
            )}
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 48px 0;
`

const FullSizeLogo = styled.img`
    width: 350px;

    @media only screen and (min-width: ${breakpoints.small}) {
        height: 450px;
        width: 100%;
      }
`

const CollapsedLogo = styled.img`
    width: 250px;

    @media only screen and (min-width: ${breakpoints.small}) {
        height: 175px;
        width: 100%;
      }
`

export default Header;
