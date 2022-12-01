import React from 'react'
import PropTypes from 'prop-types'

const ComponentGroup = ({children, align='start', width=''}) => {
  //FIXME: set width, align not working, always full width and left of center align
  let style = width; 
  style = style + ' items-' + align
  return (
    <div className={`${style} flex flex-col bg-lightColor-500 dark:bg-darkColor-500 text-darkColor-500 dark:text-lightColor-500 px-4 py-6 shadow shadow-darkColor-800 dark:shadow-lightColor-200 dark:shadow gap-y-1`}>
      {children}
    </div>
  )
}

ComponentGroup.propTypes = {}

export default ComponentGroup