import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components'

import GlobalFonts from './assets/fonts/fonts'
import { Header } from './components/header';

const isMobile = window.innerWidth < 600;
const largeHeaderSize = 594;
const smallerHeaderSize = 179;

function App() {
  const [shrinkHeader, setShrinkHeader] = useState<boolean>(isMobile ? true : false)

  const handleScroll = useCallback(() => {
    if (isMobile) return

    if (window.pageYOffset > largeHeaderSize && !shrinkHeader) {
      setShrinkHeader(true)
    } else if (window.pageYOffset <= smallerHeaderSize && shrinkHeader) {
      setShrinkHeader(false)
    }
  }, [shrinkHeader])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [shrinkHeader, setShrinkHeader, handleScroll]);

  return (
    <AppWrapper>
      <GlobalFonts />
      <Header shrinkHeader={shrinkHeader} />
      <ContentWrapper shrinkHeader={shrinkHeader}>
        <h1>TOP</h1>
        <h1>BOTTOM</h1>
      </ContentWrapper>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  overflow: auto;
`

const ContentWrapper = styled.div<{shrinkHeader: boolean}>`
  margin-top: ${props => props.shrinkHeader ? `${smallerHeaderSize}px` : `${largeHeaderSize}px`};
  background-color: coral;
  height: 3000px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default App;
