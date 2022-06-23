import React from 'react'
import styled from 'styled-components'

import fullsizeLogo from '../../assets/logos/wedding-logo-full.svg'

import { breakpoints } from '../../styles/theme'
import { FancyH1 } from '../typography'


const UnderConstructionPage: React.FC = () => (
    <PageContainer>
        <FullSizeLogo src={fullsizeLogo} alt="logo"/>
        <FancyH1>Website Coming Soon</FancyH1>
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

export default UnderConstructionPage