import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LoginContent } from '../data/interfaceText';

const Input = ({
  placeholder,
  size = 'full',
  handleChange,
  label,
  round = false,
  errorText,
  inputType = 'text',
  validate,
  value
}) => {
  // const [value, setValue] = useState('');
  const [validateText, setValidateText] = useState('');
  const handleOnChange = e => {
    if (e.target.value && validate) {
      const isValid = validate(e.target.value);
      if (isValid) {
        setValidateText('');
      } else {
        setValidateText(errorText);
        return;
      }
    }
    // setValue(e.target.value);
    handleChange(e.target.value);
  };
  let style = '';
  switch (size) {
    case 'sm':
      style = 'w-36';
      break;
    case 'md':
      style = 'w-52';
      break;
    case 'lg':
      style = 'w-72';
      break;
    default:
      style = 'w-full';
      break;
  }

  return (
    <div className={`${style} flex flex-col items-start gap-y-1 text-darkColor-500 dark:text-lightColor-500`}>
      {label ? <span className='font-subtitle'>{label}</span> : null}
      <input
        className={`${round === true ? 'rounded-full' : ''} w-full px-3 py-1 border-2 border-lightAccent-500 bg-darkColor-500 text-lightAccent-500 dark:bg-lightColor-500 dark:text-darkAccent-500 dark:border-darkAccent-500 hover:bg-darkColor-700 dark:hover:bg-lightColor-300 outline-none focus:outline-mainColor-500 h-9`}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        type={inputType}
      ></input>
      {validateText ? (
        <div className='w-full text-warning-500 dark:text-warning-300'>{validateText}</div>
      ) : null}
    </div>
  );
};

Input.propTypes = {};

export default Input;
