import { Avatar } from './Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
  args: {
    srcImage: 'https://github.com/gusgalote.png',
    altText: 'Profile picture',
  },
  argTypes: {
    srcImage: { type: 'string' },
    altText: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Avatar {...args} />
    </div>
  );
};
