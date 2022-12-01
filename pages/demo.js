import Head from 'next/head';
// import {  useAppContext, appActions } from '../context/app-context';
import { useTheme } from 'next-themes';
import Button from '../components/Button'
export default function Demo() {
  // const [state, dispatch] = useAppContext();
  // const { darkMode } = state;

  const { theme, setTheme } = useTheme();
  const toggleDarkMode = () => {
    // dispatch({ type: appActions.SWITCH_DARK_MODE });
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <div>
      <Head>
        <title>Demo using Context</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center p-10 width-full'>
        <div>Change Theme mode</div>
        <Button onClick={toggleDarkMode} name='Change mode' size='md' />
      </main>
    </div>
  );
}
