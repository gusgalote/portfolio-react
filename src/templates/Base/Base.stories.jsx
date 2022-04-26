import { Base } from './Base';

export default {
  title: 'Base',
  component: Base,
};

export const Template = (args) => {
  return (
    <Base {...args}>
      <span style={{ fontSize: '2rem', padding: '0', margin: '0' }}>TEST</span>
    </Base>
  );
};
