import React from 'react'
import styled from 'styled-components'

import { color, fontFamily } from '../../styles/theme'

import { BodyLarge } from '../typography'
import { Button, ButtonVariant } from '../button'

type TabListItemProps = Pick<TabTitleProps, 'active'>
const TabListItem = styled.li<TabListItemProps>`
    text-align: center;
  &:after {
    display: block;
    content: '';
    transform: scaleX(0);
    transform: ${({ active }) => (active ? 'scaleX(1)' : 'scaleX(0)')};
    transition: transform 250ms ease-in-out;
    width: 90px;
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
const TabButton = styled(Button)<TabButtonProps>`
  color: ${color.mainPalette.green80};
  white-space: nowrap;
  font-weight: bold;
  margin: 0;

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
        variant={ButtonVariant.TEXT}
        onClick={setSelectedTab}
        selected={selected}
        title={title || ''}
      >
        <TabText>{title}</TabText>
      </TabButton>
    </TabListItem>
  )

  const TabText = styled(BodyLarge)`
    margin: 12px 0;
    font-family: ${fontFamily.playfairDisplaySC}
  `
  
  export default TabTitle