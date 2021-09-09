import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: theme.spacing(12),
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  goodBehavior: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.grey,
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  badBehavior: {
    backgroundColor: theme.palette.red,
  },
  arrowIcon: {
    fontSize: 16,
  },
  costs: {
    fontSize: '1.75rem',
    fontWeight: 600
  },
}));