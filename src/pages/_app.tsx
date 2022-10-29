import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@styles/GlobalStyles';
import { theme } from '@styles/theme';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <GlobalStyles />
  </ThemeProvider>
);

export default MyApp;
