import { useTheme } from 'next-themes';
import Image from 'next/image';
import Button from '../components/Button';
import ComponentGroup from '../components/ComponentGroup';
import DarkModeToggle from '../components/DarkModeToggle';
import Input from '../components/Input';
import { LoginContent } from '../data/interfaceText';
import BG from '../public/login-bg.svg';
const Login = ({ props }) => {
  const { theme, setTheme } = useTheme();
  const toggleDarkMode = () => {
    // dispatch({ type: appActions.SWITCH_DARK_MODE });
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-fixed bg-left-bottom bg-cover bg-bgLogin'>
      <div className='fixed right-8 top-8'>
        <DarkModeToggle isCheck={theme === 'dark'} toggle={toggleDarkMode} />
      </div>
      <div className='h-3/4 '>
        <ComponentGroup width='w-full'>
          <div>{LoginContent.title}</div>
          <Input
            placeholder={LoginContent.userNamePlaceholder}
            label={LoginContent.userName}
            size='sm'
          />
          <Button name='Login' size='lg' />
        </ComponentGroup>
      </div>
    </div>
  );
};
export default Login;
