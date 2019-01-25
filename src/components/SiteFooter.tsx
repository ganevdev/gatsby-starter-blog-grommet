import { Box, Markdown } from 'grommet';
import * as React from 'react';

import siteConfig from '../../site-config';

export default () => (
  <footer>
    <Box pad="large" align="center">
      <Markdown>{siteConfig.footerText}</Markdown>
    </Box>
  </footer>
);
