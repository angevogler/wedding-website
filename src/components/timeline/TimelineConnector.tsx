import React from 'react'
import styled from 'styled-components'

import { color } from '../../styles/theme'

const TimelineConnector: React.FC = () => (
    <TimelineConnectorRoot/>
)

const TimelineConnectorRoot = styled.div`
    width: 2px;
    background-color: ${color.mainPalette.coral20};
    flex-grow: 1;
`   

export default TimelineConnector
