import { Box, Markdown, Text } from 'grommet';
import * as React from 'react';

import siteConfig from '../../site-config';

export default () => (
  <footer>
    <Box pad="large" align="center">
      <Text color="text">
        <Markdown>{siteConfig.footerText}</Markdown>
      </Text>
    </Box>
  </footer>
);
