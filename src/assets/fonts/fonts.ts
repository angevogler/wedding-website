import { createGlobalStyle } from 'styled-components';


import BrittanySignature from './BrittanySignature.ttf';


export default createGlobalStyle`
    @font-face {
        font-family: 'Brittany Signature';
        src: local('Brittany Signature'),
        url(${BrittanySignature}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
`;