import { Link } from 'gatsby';
import { Box, Heading, Text } from 'grommet';
import * as React from 'react';

import siteConfig from '../../site-config';

export default () => (
    <header>
        <Box margin="small">
            <Heading textAlign="center" color="brand" margin="small">
                <Link
                    style={{
                        boxShadow: 'none',
                        textDecoration: 'none'
                    }}
                    to="/"
                >
                    {siteConfig.title}
                </Link>
            </Heading>
            <Text textAlign="center" color="brand">
                {siteConfig.description}
            </Text>
        </Box>
    </header>
);
