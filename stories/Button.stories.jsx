import React from 'react';

import Button from '../components/Button';

const ButtonStory = {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'full'],
      control: { type: 'radio' },
    },
    round: {
      options: [true, false],
      control: { type: 'radio' },
    },
    onClick: { action: 'clicked' }
  },
};
export default ButtonStory;
// export const Primary = () => <Button name='Button 1' round={false} />;

const Template = (args) => (
  <html className={args.dark || ''}>
    <Button {...args} />
  </html>
);

// 👇 Each story then reuses that template
export const Normal = Template.bind({});
Normal.args = { name: 'Button', size: 'sm' };
export const Dark = Template.bind({});
Dark.args = { dark: 'dark',name: 'Button', size: 'sm' };
