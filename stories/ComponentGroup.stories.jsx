import React from 'react';

import ComponentGroup from '../components/ComponentGroup';

const ComponentGroupStory = {
  title: 'Component',
  component: ComponentGroup,
  argTypes: {
    width: {
      options: ['w-1/2', 'w-1/3', 'w-1/4', 'w-full'],
      control: { type: 'radio' },
    },
    align: {
      options: ['start', 'end', 'center'],
      control: { type: 'radio' },
    },
  },
};
export default ComponentGroupStory;
// export const Primary = () => <Button name='Button 1' round={false} />;

const Template = args => (
  <html className={args.dark || ''}>
    <div className='w-full bg-slate-400'>
      <ComponentGroup {...args}>
        <div>Component Group</div>
        <p>
          Malawi program Account Sunt quo molestiae sint voluptatibus facilis
          quaerat. Ab corporis expedita sit est necessitatibus blanditiis. Quas
          possimus voluptatem non aperiam illo quia unde. Esse aut deleniti
          delectus error saepe dolorem.
        </p>
      </ComponentGroup>
    </div>
  </html>
);

// 👇 Each story then reuses that template
export const Normal = Template.bind({});
Normal.args = { width: 'w-1/3' };
export const Dark = Template.bind({});
Dark.args = { dark: 'dark', width: 'w-1/2' };
