import React from 'react'

import { BodyLarge, H4 } from '../typography'
import { ListContainer, ListItem, ListItemDescription } from './StyledList'

const ThingsToDo: React.FC = () => (
    <ListContainer>
        <ListItem>
            <ListItemDescription>
                In addition to a great food scene, Asheville has many amazing breweries and cocktail bars. Below are some of our favorites!
            </ListItemDescription>
        </ListItem>

        <ListItem>
            <H4>Breweries</H4>
            <ul>
                <li>
                    <BodyLarge>Highland Brewing - the original is our wedding venue and has tons of outdoor activities, but there's also a taproom downtown!</BodyLarge>
                </li>
                <li>
                    <BodyLarge>Green Man</BodyLarge>
                </li>
                <li>
                    <BodyLarge>Burial</BodyLarge>
                </li>
                <li>
                    <BodyLarge>Hi-Wire</BodyLarge>
                </li>
                <li>
                    <BodyLarge>Twin Leaf</BodyLarge>
                </li>
                <li>
                    <BodyLarge>Archetype</BodyLarge>
                </li>
                <li>
                    <BodyLarge>Wicked Weed</BodyLarge>
                </li>
                <li>
                    <BodyLarge>New Belgium</BodyLarge>
                </li>
            </ul>
        </ListItem>

        <ListItem>
            <H4>Cocktail Bars</H4>
            <ul>
                <li>
                    <BodyLarge>Antidote - They make their own gin in the distillery next door!</BodyLarge>
                </li>
                <li>
                    <BodyLarge>Top of the Monk</BodyLarge>
                </li>
            </ul>
        </ListItem>
    </ListContainer>
)

export default ThingsToDo