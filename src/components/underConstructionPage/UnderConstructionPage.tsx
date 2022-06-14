import React from 'react'
import styled from 'styled-components'

import fullsizeLogo from '../../assets/logos/wedding-logo-full.svg'

import { breakpoints, fontFamily, color } from '../../styles/theme'


const UnderConstructionPage: React.FC = () => (
    <PageContainer>
        <FullSizeLogo src={fullsizeLogo} alt="logo"/>
        <H1>Website Coming Soon</H1>
    </PageContainer>
)

const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 48px 16px;

    @media only screen and (min-width: ${breakpoints.small}) {
        margin: 48px;
      }
`

const FullSizeLogo = styled.img`
    width: 350px;

    @media only screen and (min-width: ${breakpoints.small}) {
        height: 450px;
        width: 100%;
      }
`

const H1 = styled.h1`
    font-family: ${fontFamily.playfairDisplaySC};
    color: ${color.mainPalette.green80};
    font-size: 1.75rem;

    @media only screen and (min-width: ${breakpoints.small}) {
        font-size: 2rem;
      }
`

export default UnderConstructionPage