import React from 'react';
import { Button, Box, Text } from 'grommet';
import { Actions } from 'grommet-icons';

export default (props) => (
  <Box margin="small">
    <Button onClick={props.onClick} plain>
      <Box
        direction="row-responsive"
        pad={{ vertical: 'small', horizontal: 'medium' }}
        round="small"
        background={{ color: 'neutral-2', opacity: 'weak' }}
        border={{
          color: 'border',
          size: 'xsmall'
        }}
        align="center"
        elevation="small"
      >
        <Actions size="medium" />
        <Text
          margin={{ horizontal: '6px' }}
          color="text"
          size="large"
          weight="bold"
        >
          {props.themeType === 'dark'
            ? 'Switch to a Light'
            : 'Switch to a Dark'}
        </Text>
      </Box>
    </Button>
  </Box>
);
