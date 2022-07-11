import React from 'react'
import styled from 'styled-components'

import fullsizeLogo from '../../assets/logos/wedding-logo-full.svg'
import collapsedLogo from '../../assets/logos/wedding-logo-collapsed.svg'

import { breakpoints, color } from '../../styles/theme'

export interface HeaderProps {
    shrinkHeader: boolean;
}

// TODO: add back shrinking larger logo
// TODO: add animation when the logo changes size
const Header: React.FC<HeaderProps> = ({ shrinkHeader }) => {
    return (
        <HeaderContainer>
            <LogoContainer>
            {/* {shrinkHeader
            ? (
                <CollapsedLogo src={collapsedLogo} alt="logo"/>
            ) : (
                <FullSizeLogo src={fullsizeLogo} alt="logo"/>
            )} */}
                <CollapsedLogo src={collapsedLogo} alt="logo"/>
            </LogoContainer>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    @media only screen and (max-width: ${breakpoints.small}) {
        display: none;
    }

    display: flex;
    justify-content: center;
`

const LogoContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${color.mainPalette.neutral0};
`

const FullSizeLogo = styled.img`
    width: 350px;

    @media only screen and (min-width: ${breakpoints.small}) {
        margin: 72px 0;
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
