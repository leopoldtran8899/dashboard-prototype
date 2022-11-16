import Head from 'next/head';
import {  useAppContext, appActions } from '../context/app-context';
export default function Demo() {
  const [state, dispatch] = useAppContext();
  const { darkMode } = state;
  const toggleDarkMode = () => {
    dispatch({ type: appActions.SWITCH_DARK_MODE });
  };
  return (
    <div>
      <Head>
        <title>Demo using Context</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center p-10 text-yellow-300 width-full'>
        <div>Current mode {darkMode}</div>
        <button onClick={toggleDarkMode}>Change mode</button>
      </main>
    </div>
  );
}
