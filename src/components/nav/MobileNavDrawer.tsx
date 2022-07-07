import React, { FC } from 'react'
import styled from 'styled-components'

import { color } from '../../styles/theme'

import { MobileNavDrawerProps } from './MobileNavDrawer.types'

import { Button, ButtonVariant } from '../button'
import { Drawer } from '../drawer'

const MobileNavDrawer: FC<MobileNavDrawerProps> = ({ open, onClose }) => {
    return (
        <Drawer open={open} onClose={onClose}>
           <DrawerHeader>
                <NavButton variant={ButtonVariant.TEXT} onClick={onClose}>
                    <MenuIcon className="material-icons">menu</MenuIcon>
                </NavButton>
           </DrawerHeader>
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

const MenuIcon = styled.i`

`

export default MobileNavDrawer
