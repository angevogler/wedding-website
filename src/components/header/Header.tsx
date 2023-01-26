import React from 'react'
import styled from 'styled-components'

// import fullsizeLogo from '../../assets/logos/wedding-logo-full.svg'
import collapsedLogo from '../../assets/logos/wedding-logo-collapsed.svg'

import { breakpoints, color } from '../../styles/theme'
import { RsvpButton } from '../rsvp';

export interface HeaderProps {
    shrinkHeader: boolean;
}

// TODO: add back shrinking larger logo
// TODO: add animation when the logo changes size
const Header: React.FC<HeaderProps> = ({ shrinkHeader }) => {
    return (
        <HeaderContainer>
            <RsvpButtonContainer />

            <LogoContainer>
            {/* {shrinkHeader
            ? (
                <CollapsedLogo src={collapsedLogo} alt="logo"/>
            ) : (
                <FullSizeLogo src={fullsizeLogo} alt="logo"/>
            )} */}
                <CollapsedLogo src={collapsedLogo} alt="logo"/>
            </LogoContainer>

            <RsvpButtonContainer>
                <RsvpButton />
            </RsvpButtonContainer>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: none;

    @media only screen and (min-width: ${breakpoints.small}) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 1;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 0px 72px;
        background-color: ${color.mainPalette.neutral0};
    }
`

const LogoContainer = styled.div`
    background-color: ${color.mainPalette.neutral0};
`

// const FullSizeLogo = styled.img`
//     width: 350px;

//     @media only screen and (min-width: ${breakpoints.small}) {
//         margin: 72px 0;
//         height: 450px;
//         width: 100%;
//       }
// `

const CollapsedLogo = styled.img`
    width: 250px;

    @media only screen and (min-width: ${breakpoints.small}) {
        height: 175px;
        width: 100%;
      }
`

const RsvpButtonContainer = styled.div`
    visibility: hidden;
    width: 124px;

    @media only screen and (min-width: ${breakpoints.small}) {
        width: 124px;
        visibility: visible;
      }
`

export default Header;
