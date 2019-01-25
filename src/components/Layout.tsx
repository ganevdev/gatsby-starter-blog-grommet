import { Box, Grommet } from 'grommet';
import { base, dark, grommet } from 'grommet/themes';
import { dxc } from 'grommet-theme-dxc';
import { aruba } from 'grommet-theme-aruba';
import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

import siteConfig from '../../site-config';

import siteTheme from '../site-theme';

import CardProfile from './CardProfile';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

const GlobalStyle = createGlobalStyle`
  img {
    max-width: 100%;
  }
  body {
    margin: 0;
  }
  a:hover {
    opacity: 0.9;
  }
`;

const THEMES = {
  grommet,
  base,
  dark,
  dxc,
  aruba
};

interface LayoutProps {
  children: any;
}

const Layout = ({ children }: LayoutProps) => (
  <Grommet theme={THEMES[siteConfig.theme || 'grommet']}>
    <Grommet theme={siteTheme}>
      <GlobalStyle />
      <Box direction="column" align="center">
        <Box width="xlarge">
          <SiteHeader />
          <main>
            <Box direction="row-responsive">
              <Box basis="large" flex="grow" direction="row-responsive">
                {children}
              </Box>
              <Box basis="medium">
                <aside>
                  <CardProfile />
                </aside>
              </Box>
            </Box>
          </main>
        </Box>
      </Box>
      <SiteFooter />
    </Grommet>
  </Grommet>
);

export default Layout;
