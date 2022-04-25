import P from 'prop-types';

import * as Styled from './styles';

const Base = ({ children }) => {
  return (
    <Styled.Main>
      <Styled.Container>{children}</Styled.Container>
    </Styled.Main>
  );
};

Base.propTypes = {
  children: P.node.isRequired,
};

export { Base };
