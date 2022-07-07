import React, { FC, useRef } from 'react'
import styled from 'styled-components'

import { useClickAway } from '../../hooks'
import { boxShadow, breakpoints, color } from '../../styles/theme'

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
        <StyledDrawer
            ref={clickAwayRef}
            open={open}
        >
            {open && children}
        </StyledDrawer>
    )
}

const StyledDrawer = styled.div<Partial<DrawerProps>>`
  position: fixed;
  top: 0;
  z-index: 1500;
  height: 100%;
  max-width: 100%;
  transition: transform 250ms ease-in-out;
  background: ${color.mainPalette.neutral0};
  width: 325px;
  box-shadow: ${boxShadow.downward.medium};
  top: unset;
  bottom: 0;

  ${({ open }) => `
    transform: ${open ? 'none' : `translateY(100%)`};
  `}

  @media screen and (min-width: ${breakpoints.medium}) {
    top: 0;

    ${({ open }) => `
      left: 0;

      transform: ${
        // TODO: fix this animation
        open ? 'none' : `translateX(-110%)`
      };
    `}
  }
`

export default Drawer
