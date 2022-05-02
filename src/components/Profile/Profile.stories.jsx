import { Profile } from './Profile';

export default {
  title: 'Profile',
  component: Profile,
};

export const Template = (args) => {
  return (
    <div style={{}}>
      <Profile {...args} />
    </div>
  );
};
