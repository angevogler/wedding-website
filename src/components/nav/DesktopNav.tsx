import React from 'react'
import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'

import { breakpoints } from '../../styles/theme'

import { TabList, TabTitle } from '../Tabs'
import { largeHeaderSize, smallerHeaderSize } from '../../App'

const tabs = [
    {
        id: 0,
        title: 'Home',
        url: '',
    },
    {
        id: 1,
        title: 'Events',
        url: '/events',
    },
    {
        id: 2,
        title: 'Explore Asheville',
        url: '/explore-asheville',
    },
    {
        id: 3,
        title: 'FAQ',
        url: '/faq',
    },
    {
        id: 4,
        title: 'Registry',
        url: '/registry',
    },
    {
        id: 5,
        title: 'Accomodations',
        url: '/accomodations',
    },
    {
        id: 6,
        title: 'Gallery',
        url: '/gallery',
    },
]

export interface DesktopNavProps {
    shrinkHeader: boolean
}

const DesktopNav: React.FC<DesktopNavProps> = ({ shrinkHeader }) => {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <NavContainer shrinkHeader={shrinkHeader}>
            <TabList>
                {tabs.map((t) => (
                    <TabTitle
                        key={t.id}
                        title={t.title}
                        active={location.pathname === t.url}
                        selected={location.pathname === t.url}
                        setSelectedTab={() => navigate(t.url)}
                    />
                ))}
            </TabList>
        </NavContainer>
    )
}

const NavContainer = styled.div<{shrinkHeader: boolean}>`
    display: none;

    @media only screen and (min-width: ${breakpoints.small}) {
        display: block;
        position: fixed;
        top: ${props => props.shrinkHeader ? `${smallerHeaderSize}px` : `${largeHeaderSize}px`}
    }
`

export default DesktopNav
