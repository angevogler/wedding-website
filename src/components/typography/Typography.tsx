import styled from 'styled-components'
import { fontFamily, color } from '../../styles/theme'

const FancyH1 = styled.h1`
    font-family: 'Brittany Signature';
    font-size: 2.75rem;
    color: ${color.mainPalette.green80};
    margin: 24px 0;

`

const H1 = styled.h1`
    font-family: ${fontFamily.playfairDisplaySC};
    font-size: 2rem;
    color: ${color.mainPalette.green80};
    font-weight: 700;
`

const H2 = styled.h2`
    font-family: ${fontFamily.playfairDisplaySC};
    font-size: 1.75rem;
    color: ${color.mainPalette.green80};
    font-weight: 700;
`

const H3 = styled.h3`
    font-family: ${fontFamily.playfairDisplaySC};
    font-size: 1.5rem;
    color: ${color.mainPalette.green80};
    font-weight: 700;
`

const H4 = styled.h4`
    font-family: ${fontFamily.playfairDisplaySC};
    font-size: 1.25rem;
    color: ${color.mainPalette.green80};
    font-weight: 700;
`

const H5 = styled.h5`
    font-family: ${fontFamily.playfairDisplaySC};
    font-size: 1.125rem;
    color: ${color.mainPalette.green80};
    font-weight: 700;
`

const H6 = styled.h6`
    font-family: ${fontFamily.playfairDisplaySC};
    font-size: 1rem;
    color: ${color.mainPalette.green80};
    font-weight: 700;
`

const BodyLarge = styled.p`
    font-family: ${fontFamily.playfairDisplay};
    font-size: 1rem;
    color: ${color.mainPalette.green80};
    font-weight: 400;
`

const BodySmall = styled.p`
    font-family: ${fontFamily.playfairDisplay};
    font-size: 0.875rem;
    color: ${color.mainPalette.green80};
    font-weight: 400;
`

export {
    FancyH1,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    BodyLarge,
    BodySmall,
}