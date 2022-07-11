import React from 'react'
import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'

import { breakpoints, color } from '../../styles/theme'

import { TabList, TabTitle } from '../Tabs'
import { collapsedLogoHeight, expandedLogoHeight } from '../../App'
import { navigationTabs } from '../../utilities/navigation'

export interface DesktopNavProps {
    shrinkHeader: boolean
}

const DesktopNav: React.FC<DesktopNavProps> = ({ shrinkHeader }) => {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <NavContainer shrinkHeader={shrinkHeader}>
            <TabList>
                {navigationTabs.map((t) => (
                    <TabTitle
                        key={t.id}
                        title={t.title}
                        active={location.pathname === t.url}
                        selected={location.pathname === t.url}
                        setSelectedTab={() => navigate(t.url)}
                    />
                ))}
            </TabList>
            <NavBorder />
        </NavContainer>
    )
}

const NavContainer = styled.div<{shrinkHeader: boolean}>`
    display: none;

    @media only screen and (min-width: ${breakpoints.small}) {
        display: block;
        position: fixed;
        // top: ${props => props.shrinkHeader ? `${collapsedLogoHeight}px` : `${expandedLogoHeight}px`};
        top: 175px;
        left: 0;
        right: 0;
        padding: 0 72px;
        background-color: ${color.mainPalette.neutral0};
        z-index: 1;
    }
`

const NavBorder = styled.div`
    width: calc(100vw - 144px); // screen width - padding
    background-color: ${color.mainPalette.coral20};
    height: 1px;
    margin-top: -2px;
`

export default DesktopNav
