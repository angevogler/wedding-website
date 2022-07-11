import React from 'react'
import styled from 'styled-components'
import { FancyH1 } from '../typography'

const FAQPage: React.FC = () => {
    return (
        <FAQPageRoot>
            <FancyH1>Frequently Asked Questions</FancyH1>
        </FAQPageRoot>
    )
}

const FAQPageRoot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default FAQPage
