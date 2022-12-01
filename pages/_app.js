import '../styles/globals.css';
import { AppProvider } from '../context/app-context';
import { ThemeProvider } from 'next-themes';
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ThemeProvider>
  );
}

export default MyApp;
