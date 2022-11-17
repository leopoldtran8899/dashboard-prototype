import React from 'react';

import Button from '../components/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: { handleClick: { action: console.log('click') } }
};

const handleClick = () => console.log('Click on Button')

export const Primary = () => <Button name='Button 1' handleClick={handleClick}/>;
