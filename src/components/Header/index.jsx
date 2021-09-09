import React from 'react';
import { Box, Container } from '@material-ui/core';

import useStyles from './style';

const Header = ({ children }) => {
  const classes = useStyles();
  const InnerHeader = () => (
    <Box>
      <Container maxWidth="xl">
        <Box className={classes.root}>
          <div>{children}</div>
        </Box>
      </Container>
    </Box>
  );

  return (
    <>
      <InnerHeader />
    </>
  );
};

export default Header;
