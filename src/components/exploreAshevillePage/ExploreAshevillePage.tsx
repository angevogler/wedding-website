import React from 'react'
import styled from 'styled-components'

import { BodyLarge, FancyH1, H3 } from '../typography'
import { ExpansionPanel } from '../expansionPanel'

const ExploreAshevillePage: React.FC = () => (
    <PageRoot>
        <PageTitle>Explore Asheville</PageTitle>
        <ExpansionPanel
            title="Things To Do"
        >
            <BodyLarge>Things To Do Placeholder</BodyLarge>
        </ExpansionPanel>

        <ExpansionPanel
            title="Hiking"
        >
            <BodyLarge>Hiking Placeholder</BodyLarge>
        </ExpansionPanel>

        <ExpansionPanel
            title="Coffee Shops"
        >
            <BodyLarge>Coffee Shops Placeholder</BodyLarge>
        </ExpansionPanel>

        <ExpansionPanel
            title="Restaurants"
        >
            <BodyLarge>Restaurants Placeholder</BodyLarge>
        </ExpansionPanel>

        <ExpansionPanel
            title="Breweries & Cocktails"
        >
            <BodyLarge>Breweries & Cocktails Placeholder</BodyLarge>
        </ExpansionPanel>
    </PageRoot>
)

const PageRoot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PageTitle = styled(FancyH1)`
    margin-bottom: 48px;
    text-align: center;
`

export default ExploreAshevillePage
