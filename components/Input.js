import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({
  placeholder,
  size = '',
  handleChange,
  label,
  round = false,
  errorText,
  inputType = 'text',
  validate,
}) => {
  const [value, setValue] = useState('');
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
    setValue(e.target.value);
    handleChange(e.target.value);
  };
  let style = '';
  switch (size) {
    case 'sm':
      style = style + ' w-36 h-9';
      break;
    case 'md':
      style = style + ' w-52 h-9';
      break;
    case 'lg':
      style = style + ' w-72 h-9';
      break;
    default:
      style = style + ' w-full h-9';
      break;
  }
  if (round === true) {
    style = style + ' rounded-full';
  }
  return (
    <div className='flex flex-col items-start gap-y-1 text-darkColor-500 dark:text-lightColor-500'>
      {label ? <span className=''>{label}</span> : null}
      <input
        className={`${style} px-3 py-1 border-2 border-lightAccent-500 bg-darkColor-500 text-lightAccent-500 dark:bg-lightColor-500 dark:text-darkAccent-500 dark:border-darkAccent-500 hover:bg-darkColor-700 dark:hover:bg-lightColor-300 outline-none focus:outline-mainColor-500`}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        type={inputType}
      ></input>
      {validateText ? (
        <div className='text-warning-500'>{validateText}</div>
      ) : null}
    </div>
  );
};

Input.propTypes = {};

export default Input;
