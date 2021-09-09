import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>({
  root: {
    display: 'flex',
  },
  cardsContainer: {
    marginBottom: 10,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridTemplateRows: '1fr',
    [theme.breakpoints.down(1240)]: {
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr',
    },
    [theme.breakpoints.down(790)]: {
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr 1fr 1fr 1fr',
    }
  },
  generalInfoContainer: {
    display: 'flex',
    [theme.breakpoints.down(790)]: {
      maxWidth: '100%',
      flexDirection: 'column',
    },
  },
  chartsContainer: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down(790)]: {
      width: '100%',
      maxWidth: '100%',
    },
  },
  listContainer: {
    display: 'flex',
    [theme.breakpoints.down(790)]: {
      width: '100%',
      maxWidth: '100%',
    },
  },
}));