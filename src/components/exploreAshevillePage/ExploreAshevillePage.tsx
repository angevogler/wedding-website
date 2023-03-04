import React from 'react'
import styled from 'styled-components'

import { FancyH1 } from '../typography'
import { ExpansionPanel } from '../expansionPanel'
import ThingsToDo from './ThingsToDo'
import Hiking from './Hiking'
import CoffeeShops from './CoffeeShops'
import Restaurants from './Restaurants'
import BreweriesAndCocktails from './BreweriesAndCocktails'

const ExploreAshevillePage: React.FC = () => (
    <PageRoot>
        <PageTitle>Explore Asheville</PageTitle>
        <ExpansionPanel
            title="Things To Do"
        >
            <ThingsToDo />
        </ExpansionPanel>

        <ExpansionPanel
            title="Hiking"
        >
            <Hiking />
        </ExpansionPanel>

        <ExpansionPanel
            title="Coffee Shops"
        >
            <CoffeeShops />
        </ExpansionPanel>

        <ExpansionPanel
            title="Restaurants"
        >
            <Restaurants />
        </ExpansionPanel>

        <ExpansionPanel
            title="Breweries & Cocktail Bars"
        >
            <BreweriesAndCocktails />
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
