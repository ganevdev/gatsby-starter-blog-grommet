import { Box, Button, Image, Markdown, Text } from 'grommet';
import { Github, Reddit, Twitter } from 'grommet-icons';
import * as React from 'react';

import siteConfig from '../../site-config';

export default () => (
  <div>
    <Box
      round="small"
      pad="medium"
      margin="small"
      border={true}
      wrap={true}
      overflow="hidden"
    >
      <Box direction="row-responsive">
        <Box
          margin={{ bottom: 'small', left: 'none', right: 'small' }}
          round="small"
          height="xsmall"
          width="xsmall"
          overflow="hidden"
        >
          <Image
            fit="cover"
            title={siteConfig.author}
            alt={siteConfig.author}
            src={siteConfig.authorImage}
          />
        </Box>
        <Box>
          <Text weight="bold" size="large" color="text">
            {siteConfig.author}
          </Text>
        </Box>
      </Box>
      <Box direction="row" wrap={true}>
        {siteConfig.social.twitter ? (
          <Button
            href={`https://twitter.com/${siteConfig.social.twitter}`}
            icon={<Twitter size="medium" />}
          />
        ) : (
          ''
        )}

        {siteConfig.social.github ? (
          <Button
            href={`https://github.com/${siteConfig.social.github}`}
            icon={<Github size="medium" />}
          />
        ) : (
          ''
        )}

        {siteConfig.social.reddit ? (
          <Button
            href={`https://reddit.com/user/${siteConfig.social.reddit}`}
            icon={<Reddit size="medium" />}
          />
        ) : (
          ''
        )}
      </Box>
      <Box overflow="hidden">
        <Text size="small" color="text">
          <Markdown>{siteConfig.authorBio}</Markdown>
        </Text>
      </Box>
    </Box>
  </div>
);
