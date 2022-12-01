import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useState } from 'react';
import Button from '../components/Button';
import ComponentGroup from '../components/ComponentGroup';
import DarkModeToggle from '../components/DarkModeToggle';
import Input from '../components/Input';
import TextLink from '../components/TextLink';
import { LoginContent } from '../data/interfaceText';
import BG from '../public/login-bg.svg';
const Login = ({ props }) => {
  const { theme, setTheme } = useTheme();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const toggleDarkMode = () => {
    // dispatch({ type: appActions.SWITCH_DARK_MODE });
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  const handleUsernameChange = value => {
    setLoginError('')
    setUserName(value);
  };
  const handlePasswordChange = value => {
    setLoginError('')
    setPassword(value);
  };
  const validateUsername = value => {
    return /^\S+$/.test(value);
  };
  const login = () => {
    if(username && password) {
      console.log('Login')
    } else {
      setLoginError(LoginContent.loginErrorText)
    }
  }
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen bg-fixed bg-left-bottom bg-cover bg-bgLogin'>
      <div className='fixed right-4 top-4'>
        <DarkModeToggle isCheck={theme === 'dark'} toggle={toggleDarkMode} />
      </div>
      <div className='w-full max-w-md p-4 sm:w-2/3 h-3/4'>
        <ComponentGroup width='w-full'>
          <div className='w-full text-xl font-bold text-center font-title md:text-2xl'>
            {LoginContent.title}
          </div>
          <Input
            placeholder={LoginContent.userNamePlaceholder}
            label={LoginContent.userName}
            handleChange={handleUsernameChange}
            value={username}
            validate={validateUsername}
            errorText={LoginContent.errorText}
            round={true}
          />
          <Input
            placeholder={LoginContent.passwordPlaceholder}
            label={LoginContent.password}
            inputType='password'
            handleChange={handlePasswordChange}
            value={password}
            round={true}
          />
          <br/>
          <Button name='Login' size='full' round={true} onClick={login}/>
          <div className='w-full text-warning-500 dark:text-warning-300'>{loginError}</div>
          <br/>
          <TextLink text={LoginContent.forgotPasswordLinkText} align='text-center' onClick={() => {}}/>
          <TextLink text={LoginContent.registerLinkText} align='text-center' onClick={() => {}}/>
        </ComponentGroup>
      </div>
    </div>
  );
};
export default Login;
