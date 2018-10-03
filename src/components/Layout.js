import { Box, Grommet } from 'grommet'
import { injectGlobal } from 'styled-components'
import React from 'react'

import siteConfig from '../../site-config'

import { siteTheme } from '../site-theme'

import CardProfile from './CardProfile'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

injectGlobal`
  img {
    border-radius: 14px;
    max-width: 100%;
  }
  body {
    margin: 0;
  }
  a:hover {
    opacity: 0.9;
  }
`

export default props => {
  return (
    <div>
      <Grommet theme={siteTheme}>
        <Box
          background={siteConfig.backgroundColor}
          style={{ minHeight: '100vh' }}
          responsive
          margin='small'
          align='center'
        >
          <SiteHeader />
          <Box direction='row-responsive'>
            <Box width='large'>{props.children}</Box>
            <aside>
              <Box width='medium'>
                <CardProfile />
              </Box>
            </aside>
          </Box>
        </Box>
        <SiteFooter />
      </Grommet>
    </div>
  )
}
