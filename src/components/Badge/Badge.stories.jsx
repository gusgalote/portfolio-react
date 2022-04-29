import { Badge } from './Badge';

export default {
  title: 'Badge',
  component: Badge,
  args: {
    children: 'Custom Text',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return <Badge {...args} />;
};
