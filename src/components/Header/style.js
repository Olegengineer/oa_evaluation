import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row-reverse',
    padding: `${theme.spacing(2)}px 0`,
  },
}));

export default useStyles;
