import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router'

import GlobalFonts from './assets/fonts/fonts'
import { breakpoints } from './styles/theme';
import { Header } from './components/header';
import { DesktopNav, MobileNav } from './components/nav';
import { RegistryPage } from './components/registryPage';
import { AccommodationsPage } from './components/accommodationsPage';
import { RsvpPage } from './components/rsvp';

const isMobile = window.innerWidth < 600;

export const expandedLogoHeight = 594;
export const collapsedLogoHeight = 175;

export const desktopNavHeight = 59;

export const largeHeaderSize = expandedLogoHeight + desktopNavHeight;
export const smallerHeaderSize = collapsedLogoHeight + desktopNavHeight;

const HomePage = lazy(
  () => import('./components/homePage/components/HomePage')
)

const EventsPage = lazy(
  () => import('./components/eventsPage/EventsPage')
)

const FAQPage = lazy(
  () => import('./components/faqPage/FAQPage')
)

const ExploreAshevillePage = lazy(
  () => import('./components/exploreAshevillePage/ExploreAshevillePage')
)

function App() {
  const [shrinkHeader, setShrinkHeader] = useState<boolean>(isMobile ? true : false)

  const handleScroll = useCallback(() => {
    if (isMobile) return

    if (window.pageYOffset > 100 && !shrinkHeader) {
      setShrinkHeader(true)
    } else if (window.pageYOffset <= 100 && shrinkHeader) {
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
          <MobileNav />
          <Header shrinkHeader={shrinkHeader} />
          <DesktopNav shrinkHeader={shrinkHeader} />

        <ContentWrapper shrinkHeader={shrinkHeader}>
          <Suspense fallback={<div />}>
            <Routes>
              <Route
                path="/"
                element={<HomePage />}
              />
              <Route
                path="/events"
                element={<EventsPage />}
              />
              <Route
                path="/explore-asheville"
                element={<ExploreAshevillePage />}
              />
              <Route
                path="/faq"
                element={<FAQPage />}
              />
              <Route
                path="/registry"
                element={<RegistryPage />}
              />
              <Route
                path="/accommodations"
                element={<AccommodationsPage />}
              />

              <Route
                path="/rsvp"
                element={<RsvpPage />}
              />
            </Routes>
          </Suspense>
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
  margin-top: 81px;
  padding: 16px;
  padding-top: 0;

  @media only screen and (min-width: ${breakpoints.small}) {
    // margin-top: ${props => props.shrinkHeader ? `${smallerHeaderSize}px` : `${largeHeaderSize}px`};
    margin-top: ${smallerHeaderSize}px;  
    padding: 72px;
    padding-top: 0;
  }
`

export default App;
