import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from './theme';
import AppRouter from './AppRouter';
import cubejs from '@cubejs-client/core';
import { CubeProvider } from '@cubejs-client/react';

const { REACT_APP_API_URL, REACT_APP_CUBEJS_TOKEN } = process.env;

const cubejsApi = cubejs(REACT_APP_CUBEJS_TOKEN, {
  apiUrl: `${REACT_APP_API_URL}/cubejs-api/v1`,
});

const App = () => {
  return (
    <CubeProvider cubejsApi={cubejsApi}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppRouter />
        </ThemeProvider>
      </StylesProvider>
    </CubeProvider>
    );
}

export default App;
