import { createMuiTheme } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';

const palette = createPalette({
  /* configure palette from design */
  main: '#f3f3f3',
  green: '#10ac84',
  divider: '#bcc2c9',
  grey: '#b0b6b8',
  lightGrey: '#BDC3C7',
  darkGrey: '#707070',
  red: '#e66767',
  white: '#fff',
  text: {
    primary: '#fff',
    secondary: '#707070',
  }
});

export const theme = createMuiTheme({
  overrides: {
    color: palette.main,
    MuiTooltip: {
      tooltip: {
        padding: 20,
        backgroundColor: palette.main,
      },
    },
    MuiSvgIcon: {
      root: {
        color: palette.white,
      },
      colorSecondary: {
        color: palette.darkGrey,
        '&:hover': {
          color: palette.green,
        },
      }
    },
    MuiCardContent: {
      root: {
        color: palette.darkGrey,
        '&:last-child': {
          paddingTop: 10,
          paddingBottom: 10,
        },
      }
    },
    MuiTableCell: {
      head: {
        color: palette.text.secondary,
        fontWeight: 600,
        verticalAlign: 'text-top',
      },
      body: {
        color: palette.text.secondary
      },
    },
    MuiSkeleton: {
      root: {
        backgroundColor: palette.lightGrey,
        borderRadius: 5,
      },
    },
},
  breakpoints: {
    values: {
      xl: 1920,
      lg: 1420,
      md: 960,
      sm: 600,
      xs: 0,
    },
  },
  palette,
  shape: {
    borderRadius: 6,
  },
});