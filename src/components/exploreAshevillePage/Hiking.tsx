import React from 'react'
import styled from 'styled-components'

import { H4, BodyLarge } from '../typography'
import { ListContainer, ListItem, ListItemDescription } from './StyledList'

const Hiking: React.FC = () => (
    <ListContainer>
        <ListItem>
            <ListItemDescription>
            With the Blue Ridge Parkway and being close to Pisgah National Forest and Dupont State Forest, there are a ton of amazing hikes within an hour or so of Asheville. These are a few of our favorites! You will need a car to get to all of them, the driving distance listed is from the DoubleTree Biltmore Village
            </ListItemDescription>
        </ListItem>
        <ListItem>
            <H4>Craggy Gardens</H4>
            <HikeStats>
                <span>Length:</span>
                1.9 miles out & back
            </HikeStats>
            <HikeStats>
                <span>Driving Distance:</span>
                40 minutes (22 miles)
            </HikeStats>
        </ListItem>

        <ListItem>
            <H4>Craggy Pinnacle</H4>
            <HikeStats>
                <span>Length:</span>
                1 mile out & back
            </HikeStats>
            <HikeStats>
                <span>Driving Distance:</span>
                40 minutes (22 miles)
            </HikeStats>
        </ListItem>

        <ListItem>
            <H4>Mt Mitchell Summit Trail</H4>
            <HikeStats>
                <span>Length:</span>
                Length: 0.4 miles
            </HikeStats>
            <HikeStats>
                <span>Driving Distance:</span>
                1 hour 6 minutes (36 miles)
            </HikeStats>
            <HikeStats>
                <span>Note -</span>
                if you take the Blue Ridge Parkway you will pass the trailhead and visitors center for Craggy Gardens and Craggy Pinnacle. There are also other trails that you can do at Mt Mitchell, this is just the easiest! It’s the tallest mountain east of the Mississippi, so it has some amazing views
            </HikeStats>
        </ListItem>

        <ListItem>
            <H4>Mt Pisgah</H4>
            <HikeStats>
                <span>Length:</span>
                4.5 miles out & back
            </HikeStats>
            <HikeStats>
                <span>Driving Distance:</span>
                37 minutes (24 miles)
            </HikeStats>
        </ListItem>

        <ListItem>
            <H4>Devil’s Courthouse</H4>
            <HikeStats>
                <span>Length:</span>
                0.8 miles
            </HikeStats>
            <HikeStats>
                <span>Driving Distance:</span>
                1 hour (42 miles)
            </HikeStats>
        </ListItem>

        <ListItem>
            <H4>Graveyard Fields Loop w/ Upper Falls</H4>
            <HikeStats>
                <span>Length:</span>
                Length: 1.3 miles loop
            </HikeStats>
            <HikeStats>
                <span>Driving Distance:</span>
                1 hour 12 minutes (55 miles)
            </HikeStats>
            <HikeStats>
                <span>Note -</span>
                driving out to this trailhead on the Blue Ridge Parkway will actually take you past Mt Pisgah and Devil’s Courthouse as well
            </HikeStats>
        </ListItem>

        <ListItem>
            <H4>High Falls, Hooker Falls, Triple Falls Loop</H4>
            <HikeStats>
                <span>Length:</span>
                3.1 miles
            </HikeStats>
            <HikeStats>
                <span>Driving Distance:</span>
                44 minutes (32 miles)
            </HikeStats>
        </ListItem>
    </ListContainer>
)

const HikeStats = styled(BodyLarge)`
    margin-top: 4px;

    span {
        font-weight: 900;
        margin-right: 4px;
    }
`

export default Hiking