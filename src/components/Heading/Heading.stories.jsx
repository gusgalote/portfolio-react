import { Heading } from './Heading';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Heading',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return <Heading {...args} />;
};
