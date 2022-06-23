import React from 'react';
import styled from 'styled-components'

import GlobalFonts from './assets/fonts/fonts'
import { Header } from './components/header';

function App() {
  return (
    <Wrapper>
      <GlobalFonts />
      <Header />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`

export default App;
