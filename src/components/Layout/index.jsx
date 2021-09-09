import React from 'react';
import {
  Box,
  Container,
  Grid,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { HOME_PAGE, DASHBOARD_PAGE } from '../../constants/routes';
import Drawer from '@material-ui/core/Drawer';
import { useStyles } from './style';
import clsx from 'clsx';
import Header from '../Header/index';

import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import HelpIcon from '@material-ui/icons/Help';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import SearchIcon from '@material-ui/icons/Search';

const Layout = ({ children }) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  const drawer = (
    <div>
      <List>
        <ListItem>
          <Typography variant="h6">OverlayAnalytics</Typography>
        </ListItem>
        <ListItem
          button
          selected={pathname === HOME_PAGE}
          component={Link}
          to={HOME_PAGE}
          className={clsx({
            [classes.activePage]: pathname === HOME_PAGE
          })}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem
          button
          selected={pathname === DASHBOARD_PAGE}
          component={Link}
          to={DASHBOARD_PAGE}
          className={clsx({
            [classes.activePage]: pathname === DASHBOARD_PAGE
          })}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={"My Dashboard"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <Header>
        <Grid container spacing={2}>
          <Grid item>
            <SearchIcon color="secondary" />
          </Grid>
          <Grid item>
            <WbSunnyIcon color="secondary" />
          </Grid>
          <Grid item>
            <HelpIcon color="secondary" />
          </Grid>
          <Grid item>
            <PersonIcon color="secondary" />
          </Grid>
        </Grid>
      </Header>
      <Drawer
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="persistent"
        anchor="left"
        open={true}
      >
        {drawer}
      </Drawer>
      <Box className={classes.wrapper}>
        <Box py={2}>
          <Container maxWidth="lg">
            <Grid container>
              <Grid item xs={12}>
                {children}
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/*Maybe we will have footer. So I prepared this container for it and through createPortal we can show here information.*/}
        <Box className={classes.footer} pt={2}>
          <Box id="footer-actions" />
        </Box>
      </Box>
    </div>
  );
};

export default Layout;
