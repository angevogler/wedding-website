import React from 'react'

import { H4 } from '../typography'
import { Hyperlink } from '../hyperlink'
import { ListContainer, ListItem, ListItemDescription } from './StyledList'

const CoffeeShops: React.FC = () => (
    <ListContainer>
        <ListItem>
            <H4>The Rhu</H4>
            <ListItemDescription>
            One of our favorite places to grab a cup of coffee and a sit down breakfast. They are located downtown so you can even just pop in for some caffeine if you need it
            </ListItemDescription>
            <Hyperlink id="the-rhu-website" target="_blank" href="https://www.the-rhu.com/">Visit Website</Hyperlink>
        </ListItem>

        <ListItem>
            <H4>Double D’s</H4>
            <ListItemDescription>
            This is one of the easiest places to grab a cup of coffee or tea if you’re walking around downtown, but make sure to bring cash as they don’t accept credit cards
            </ListItemDescription>
            <Hyperlink id="double-d-website" target="_blank" href="https://www.doubledscoffee.com/">Visit Website</Hyperlink>
        </ListItem>

        <ListItem>
            <H4>Forage</H4>
            <ListItemDescription>
            Fun fact: this is actually our florist! They have a plant shop, coffee shop, and even a bookstore. Forage has recently started selling beer and wine as well that you can enjoy out in their garden
            </ListItemDescription>
            <Hyperlink id="forage-website" target="_blank" href="https://florabotanicalliving.com/new-page-4">Visit Website</Hyperlink>
        </ListItem>
    </ListContainer>
)

export default CoffeeShops