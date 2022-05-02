import P from 'prop-types';

import { Profile } from '../';

import * as Styled from './Sidebar.styles';

const Sidebar = () => {
  return (
    <Styled.Container>
      <Styled.Box>
        <Profile />
      </Styled.Box>
    </Styled.Container>
  );
};

export { Sidebar };
