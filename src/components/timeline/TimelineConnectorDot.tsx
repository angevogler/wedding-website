import React from 'react'
import styled from 'styled-components'
import { color } from '../../styles/theme'

const TimelineConnectorDot: React.FC = () => (
    <TimelineConnectorDotRoot />
)

const TimelineConnectorDotRoot = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: ${color.mainPalette.coral20};
`

export default TimelineConnectorDot
