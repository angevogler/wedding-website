import React from 'react'

import { H4 } from '../typography'
import { Hyperlink } from '../hyperlink'
import { ListContainer, ListItem, ListItemDescription } from './StyledList'

const Restaurants: React.FC = () => (
    <ListContainer>
        <ListItem>
            <H4>Sierra Nevada</H4>
            <ListItemDescription>
            One of our favorite restaurants and breweries, Sierra Nevada has delicious food and great beer. Some of our favorite items on the menu are their wings, duck fat fries, and pretzel. Their indoor taproom is great, but make sure to also check out the outdoor space. They have gardens where they grow the produce they serve, and normally have cornhole boards set up. If you’re lucky they may even have some live music in their amphitheater.
            </ListItemDescription>
            <Hyperlink id="sierra-nevada-website" target="_blank" href="https://sierranevada.com/visit/north-carolina/taproom/">Visit Website</Hyperlink>
        </ListItem>

        <ListItem>
            <H4>Buxton Hall Barbecue</H4>
            <ListItemDescription>
            This is our go to for barbecue when we’re in Asheville. We love their brisket and the fact that you can choose a variety of sauces from their sauce bar. Their bourbon cheerwine slushes are also a must try. 
            </ListItemDescription>
            <Hyperlink id="buxton-hall-website" target="_blank" href="http://www.buxtonhall.com/">Visit Website</Hyperlink>
        </ListItem>

        <ListItem>
            <H4>Cucina 24</H4>
            <ListItemDescription>
            The Italian restaurant that sparked our love for making fresh pasta, this is one of our favorite nicer restaurants in Asheville. Their menu is always changing based on the season, but you can’t go wrong with anything you order.
            </ListItemDescription>
            <Hyperlink id="cucina-24-website" target="_blank" href="http://www.cucina24restaurant.com/">Visit Website</Hyperlink>
        </ListItem>

        <ListItem>
            <H4>Barleys</H4>
            <ListItemDescription>
            Our go to spot for pizza and a good beer. They also have a great upstairs with pool tables and a ton of taps, it’s a great casual place to go and hang out!
            </ListItemDescription>
            <Hyperlink id="barleys-website" target="_blank" href="https://www.barleystaproom.com/">Visit Website</Hyperlink>
        </ListItem>

        <ListItem>
            <H4>Thirsty Monk</H4>
            <ListItemDescription>
            Here you can find a large selection of beers and bar food, they have our favorite soft pretzel and mustard in Asheville. There are three different levels, including a Belgian beer cellar, taproom on the main level, and a rooftop bar for nicer cocktails.
            </ListItemDescription>
            <Hyperlink id="thirsty-monk-website" target="_blank" href="https://thirsty-monk-brewery.square.site/">Visit Website</Hyperlink>
        </ListItem>
    </ListContainer>
)

export default Restaurants