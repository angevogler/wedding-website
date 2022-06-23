import React from 'react'
import styled from 'styled-components'

import { color } from '../../styles/theme'

type TabListItemProps = Pick<TabTitleProps, 'active'>
const TabListItem = styled.li<TabListItemProps>`
  &:after {
    display: block;
    content: '';
    transform: scaleX(0);
    transform: ${({ active }) => (active ? 'scaleX(1)' : 'scaleX(0)')};
    transition: transform 250ms ease-in-out;
    width: 40px;
    margin: 0 auto;
    border-bottom: 3px solid ${color.mainPalette.coral60};
  }
`

export interface TabTitleProps {
    title?: string
    setSelectedTab: () => void
    active: boolean
    className?: string
    selected?: boolean
  }

type TabButtonProps = Pick<TabTitleProps, 'selected'> &
  Pick<HTMLButtonElement, 'title'>
const TabButton = styled.button<TabButtonProps>`
  color: ${color.mainPalette.green80};
  white-space: nowrap;
  font-weight: bold;

  &:not(:disabled):hover,
  &:not(:disabled):focus,
  &:not(:disabled):active {
    text-decoration: none;
    color: ${color.mainPalette.green80};
  }
`

const TabTitle: React.FC<TabTitleProps> = ({
    title,
    setSelectedTab,
    active,
    className,
    selected,
  }) => (
    <TabListItem className={className} active={active}>
      <TabButton
        onClick={setSelectedTab}
        selected={selected}
        title={title || ''}
      >
        {title}
      </TabButton>
    </TabListItem>
  )
  
  export default TabTitle