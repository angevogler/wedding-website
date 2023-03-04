import React from 'react'
import styled from 'styled-components'

import { H4, BodyLarge } from '../typography'
import { Hyperlink } from '../hyperlink'
import { ListContainer, ListItem, ListItemDescription } from './StyledList'

const ThingsToDo: React.FC = () => (
    <ListContainer>
        <ListItem>
            <H4>Biltmore Estate</H4>
            <ListItemDescription>
                Between the house, gardens, and trails you could spend the entire day exploring here. See the house, America’s largest home, with a self-guided tour, or stroll through the gardens, which should be beautiful in bloom during the spring. There are also 20+ miles of trails to explore along with the shops and winery in Antler Hill Village.
            </ListItemDescription>
            <Hyperlink id="biltmore-website" target="_blank" href="https://www.biltmore.com/">Learn More</Hyperlink>
        </ListItem>

        <ListItem>
            <H4>Explore the Blue Ridge Parkway</H4>
            <ListItemDescription>
            If you have a car, exploring the Blue Ridge Parkway is a must. This is one of our favorite things to do, and oftentimes on our way back to Charlotte from Asheville we’ll take this scenic route and find different hikes or overlooks to stop at. One of our favorite places to stop is the Craggy Gardens Visitor Center. You can also explore Mount Mitchell, the highest point east of the Mississippi, or check out the Folk Art Center. There is an Asheville Visitor Center, located at Milepost 384.5, that would be a great place to start your journey!
            </ListItemDescription>
            <Hyperlink id="blue-ridge-website" target="_blank" href="https://www.blueridgeparkway.org/">Learn More</Hyperlink>
        </ListItem>

        <ListItem>
            <H4>River Arts District</H4>
            <ListItemDescription>
            Visit the galleries, meet artisans, and even watch them work on some of their creations in the River Arts District. One of the coolest places to check out is Wedge Studios which houses workspace for 30 artists, along with a brewery, a restaurant, and a wine bar.
            </ListItemDescription>
            <Hyperlink id="river-arts-district-website" target="_blank" href="https://www.riverartsdistrict.com/">Learn More</Hyperlink>
        </ListItem>

        <ListItem>
            <H4>North Carolina Arboretum</H4>
            <ListItemDescription>
            Easily accessible from the Blue Ridge Parkway, the NC Arboretum is a 434 acre public garden. There are miles of hiking and biking trails and acres of cultivated gardens. This is a great spot to pack a picnic (or grab some food from their onsite bistro) and spend some time exploring.
            </ListItemDescription>
            <Hyperlink id="arboretum-website" target="_blank" href="https://www.ncarboretum.org/">Learn More</Hyperlink>
        </ListItem>

    </ListContainer>
)

export default ThingsToDo