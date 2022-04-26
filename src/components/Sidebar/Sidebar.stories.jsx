import { Sidebar } from './Sidebar';

export default {
  title: 'Sidebar',
  component: Sidebar,
};

export const Template = (args) => {
  return <Sidebar {...args} />;
};
