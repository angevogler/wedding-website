import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import GlobalFonts from './assets/fonts/fonts'
import { Header } from './components/header';
import DesktopNav from './components/nav/DesktopNav';

const isMobile = window.innerWidth < 600;

export const expandedLogoHeight = 594;
export const collapsedLogoHeight = 175;

export const desktopNavHeight = 59;

export const largeHeaderSize = expandedLogoHeight + desktopNavHeight;
export const smallerHeaderSize = collapsedLogoHeight + desktopNavHeight;

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
      <Router basename="/">
        <Header shrinkHeader={shrinkHeader} />
        <DesktopNav shrinkHeader={shrinkHeader} />

        <ContentWrapper shrinkHeader={shrinkHeader}>
          <h1>TOP</h1>
          <h1>BOTTOM</h1>
        </ContentWrapper>
      </Router>
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
  height: 3000px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default App;
