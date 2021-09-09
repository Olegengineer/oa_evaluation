import { fade, makeStyles } from "@material-ui/core";

const drawerWidth = 300;
export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.main,
    height: '100vh',
    overflow: 'auto',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    borderTop: `1px solid ${fade(theme.palette.main, 0.1)}`,
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      display: "flex",
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.green,
  },
  activePage: {
    borderLeft: '5px solid #fff',
  },
}));