import React, { FC, useRef } from 'react'
import styled from 'styled-components'

import { useClickAway } from '../../hooks'
import { boxShadow, color } from '../../styles/theme'

import { DrawerProps } from './Drawer.types'

const Drawer: FC<DrawerProps> = ({
    onClose,
    open,
    children,
}) => {
    const clickAwayRef = useRef(null)
    useClickAway(clickAwayRef, () => {
      if (open) {
        onClose()
      }
    })
    
    return (
      <>
        {open && <Overlay />
}
        <StyledDrawer
            ref={clickAwayRef}
            open={open}
        >
            {open && children}
        </StyledDrawer>
        </>
    )
}

const Overlay = styled.div`
  height: 100vh;
  width: 100vh;
  background-color: rgba(0, 52, 10, 0.35);
  z-index: 1;
`

const StyledDrawer = styled.div<Partial<DrawerProps>>`
  position: fixed;
  top: 0;
  z-index: 1500;
  height: 100%;
  max-width: 100%;
  transition: transform 300ms ease-in-out;
  background: ${color.mainPalette.neutral0};
  width: 325px;
  top: unset;
  bottom: 0;

  ${({ open }) => `
    transform: ${open ? 'none' : `translateX(-100%)`};
    box-shadow: ${open ? `${boxShadow.downward.medium}` : 'none'};
  `}
`

export default Drawer
