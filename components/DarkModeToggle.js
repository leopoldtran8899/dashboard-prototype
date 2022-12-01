import React from 'react';
import PropTypes from 'prop-types';

const DarkModeToggle = ({isCheck, toggle}) => {
  return (
    <label className='relative flex items-center cursor-pointer select-none w-max font-title'>
      <span className='mr-3 text-sm font-bold lg:text-lg text-darkColor-500 dark:text-lightColor-500'>Dark Mode</span>
      <input
        type='checkbox'
        checked={isCheck}
        onChange={toggle}
        className='transition-colors border rounded-full appearance-none cursor-pointer border-mainColor-500 w-14 h-7 focus:outline focus:outline-mainColor-500 bg-lightColor-500 checked:bg-darkColor-500 peer'
      />
      <span className='absolute text-xs font-medium uppercase right-1 text-darkColor-500'>
        {' '}
        OFF{' '}
      </span>
      <span className='absolute text-xs font-medium uppercase right-8 text-lightColor-500'>
        {' '}
        ON{' '}
      </span>
      <span className='absolute transition-transform transform rounded-full w-7 h-7 right-7 bg-darkColor-600 peer-checked:bg-lightColor-500 peer-checked:translate-x-7' />
    </label>
  );
};

DarkModeToggle.propTypes = {};

export default DarkModeToggle;
