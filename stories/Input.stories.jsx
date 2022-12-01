import React from 'react';

import Input from '../components/Input';

const InputStory = {
  title: 'Input',
  component: Input,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'full'],
      control: { type: 'radio' },
    },
    round: {
      options: [true, false],
      control: { type: 'radio' },
    },
    handleChange: { action: 'change' },
  },
};
export default InputStory;
// export const Primary = () => <Button name='Button 1' round={false} />;

const Template = args => (
  <html className={args.dark || ''}>
    <Input {...args} />
  </html>
);

// 👇 Each story then reuses that template
export const Normal = Template.bind({});
Normal.args = {
  placeholder: 'Enter some text',
  size: 'sm',
  label: 'Text Input',
};

export const Password = Template.bind({});
Password.args = {
  placeholder: 'Enter Password',
  size: 'sm',
  label: 'Password Input',
  inputType: 'password',
};

export const NumberInputValidate = Template.bind({});
NumberInputValidate.args = {
  placeholder: 'Enter some numbers',
  size: 'sm',
  label: 'Number Input',
  errorText: 'Only Accept number',
  validate: value => {
    return /^\d+$/.test(value)
  },
};

export const DarkThemeInput = Template.bind({});
DarkThemeInput.args = {
  dark: 'dark',
  placeholder: 'Enter some text',
  size: 'sm',
  label: 'Text Input',
};
