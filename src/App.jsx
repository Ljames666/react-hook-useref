import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './config/theme/Theme';

import Routes from './routes/Router';
import Layout from './config/layout/Default';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Routes />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
