import React from 'react';
import { Button } from 'grommet';

export default (props) => (
  <Button margin={'medium'} onClick={props.onClick} primary color="brand">
    {props.themeType}
  </Button>
);
