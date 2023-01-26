import React, { FC, useCallback } from 'react'
import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'

import { color, fontFamily, } from '../../styles/theme'

import { MobileNavDrawerProps } from './MobileNavDrawer.types'

import { navigationTabs } from '../../utilities/navigation'

import { Button, ButtonVariant } from '../button'
import { Drawer } from '../drawer'
import RsvpButton from '../rsvp/RsvpButton'

const MobileNavDrawer: FC<MobileNavDrawerProps> = ({ open, onClose }) => {
    const location = useLocation()
    const navigate = useNavigate()

    const navigateToPage = useCallback((url: string) => {
        navigate(url)
        onClose()
    }, [navigate, onClose])

    return (
        <Drawer open={open} onClose={onClose}>
           <DrawerHeader>
                <NavButton variant={ButtonVariant.TEXT} onClick={onClose}>
                    <MenuIcon className="material-icons">menu</MenuIcon>
                </NavButton>
           </DrawerHeader>

           <DrawerBody>
                {navigationTabs.map((t) => {
                    if (location.pathname === t.url) {
                        return (
                            <SelectedMobileNavButton
                                key={t.id}
                                onClick={() => onClose()}
                                title={t.title}
                            >
                                {t.title}
                            </SelectedMobileNavButton>
                        )
                    }
                    return(
                        <MobileNavButton
                            key={t.id}
                            onClick={() => navigateToPage(t.url)}
                            title={t.title}
                        >
                            {t.title}
                        </MobileNavButton>
                )
            })}

            <RsvpButtonContainer>
                <RsvpButton />
            </RsvpButtonContainer>
           </DrawerBody>
        </Drawer>
    )
}

const DrawerHeader = styled.div`
    height: 72px;
    border-bottom: 1px solid ${color.mainPalette.green40};
    padding: 4px 8px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const NavButton = styled(Button)`
    color: ${color.mainPalette.green40};
    height: 36px;
    width: 36px;
    padding: 6px;
    margin-top: auto;
    margin-bottom: auto;
`

const MenuIcon = styled.i``

const DrawerBody = styled.div`
    display: flex;
    flex-direction: column;
`

const MobileNavButton = styled.button`
    background: ${color.mainPalette.neutral0};
    border: none;
    border-bottom: 1px solid ${color.mainPalette.green40};
    font-family: ${fontFamily.playfairDisplaySC}
    color: ${color.mainPalette.green80};
    font-size: 1rem;
    padding: 12px;
    text-align: left;
`

const SelectedMobileNavButton = styled(MobileNavButton)`
    background: ${color.mainPalette.green20};
`

const RsvpButtonContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 12px;
    width: 325px;
`

export default MobileNavDrawer
