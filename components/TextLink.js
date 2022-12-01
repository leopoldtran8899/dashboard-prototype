import React from 'react'
import PropTypes from 'prop-types'

const TextLink = ({text, onClick, align='text-left'}) => {
  return (
    <div onClick={onClick} className={`${align} w-full underline text-darkColor-500 dark:text-lightColor-500 hover:cursor-pointer hover:text-darkColor-400 dark:hover:text-lightColor-600`}>{text}</div>
  )
}

TextLink.propTypes = {}

export default TextLink