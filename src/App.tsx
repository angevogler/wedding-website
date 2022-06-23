import React from 'react';
import styled from 'styled-components'

import GlobalFonts from './assets/fonts/fonts'
import { UnderConstructionPage } from './components/underConstructionPage';

function App() {
  return (
    <Wrapper>
      <GlobalFonts />
      <UnderConstructionPage />
    </Wrapper>
  );
}

const Wrapper = styled.div`

`

export default App;
