import React from 'react'
import styled from 'styled-components'

import { color, breakpoints } from '../../styles/theme'
import { BodyLarge } from '../typography'
import { Hyperlink } from '../hyperlink'

const RegistryPage: React.FC = () => (
    <RegistryPageRoot>
        <RegistryContainer>
            <RegistryMessage>
                <BodyLarge>
                Your love, laughter, and company on our wedding day 
                is the greatest gift of all. However, should you wish 
                to help us celebrate with a gift, you can find our registry
                {" "}
                <Hyperlink
                    id="registry-link"
                    href="https://registry.theknot.com/angela-vogler-david-pecunia-april-2023-nc/47901253"
                    target="blank"
                >
                    here
                </Hyperlink>
                .
                </BodyLarge>
            </RegistryMessage>
        </RegistryContainer>
        <RegistryIframe
            id="registry-iframe"
            src="https://registry.theknot.com/angela-vogler-david-pecunia-april-2023-nc/47901253"
        />
    </RegistryPageRoot>
)

const RegistryPageRoot = styled.div`
    height: calc(100vh - (234px + 72px + 24px));
`

const RegistryContainer = styled.div`
    border: 1px solid ${color.mainPalette.green80};
    padding: 16px 8px;
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    background-color: ${color.mainPalette.green40};
    margin-top: 24px;

    @media only screen and (min-width: ${breakpoints.small}) {
        display: none;
    }
`

const RegistryMessage = styled.div`
    border: 1px solid ${color.mainPalette.green80};
    padding: 16px 8px;
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    background-color: ${color.mainPalette.neutral0};

    @media only screen and (min-width: ${breakpoints.small}) {
        padding: 24px 16px;
        margin: 8px 32px;
    }
`

const RegistryIframe = styled.iframe`
    display: none;

    @media only screen and (min-width: ${breakpoints.small}) {
        display: block;
        height: 100%;
        width: 100%;
        border: 1px solid ${color.mainPalette.green40};
    }
`

export default RegistryPage