import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import GlobalStyles from 'styles/global';
import store from './redux';
import Routes from './router';
import theme from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import AppLocale from './translations';
import 'antd/dist/antd.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <IntlProvider messages={AppLocale['en']} locale='en' defaultLocale='en'>
          <ThemeProvider theme={theme}>
            <GlobalStyles />

            <Routes />
          </ThemeProvider>
        </IntlProvider>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
