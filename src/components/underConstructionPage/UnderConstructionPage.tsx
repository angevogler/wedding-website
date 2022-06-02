import React from 'react'
import styled from 'styled-components'

import fullsizeLogo from '../../assets/logos/wedding-logo-full.svg'
import collapsedLogo from '../../assets/logos/wedding-logo-collapsed.svg'


const UnderConstructionPage: React.FC = () => (
    <PageContainer>
        <FullSizeLogo src={fullsizeLogo} alt="logo"/>
    </PageContainer>
)

const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const FullSizeLogo = styled.img`

`

export default UnderConstructionPage