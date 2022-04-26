import P from 'prop-types';

import * as Styled from './Base.styles';

const Base = ({ children }) => {
  return (
    <Styled.Main>
      <Styled.Container>
        <Styled.Row>{children}</Styled.Row>
      </Styled.Container>
    </Styled.Main>
  );
};

Base.propTypes = {
  children: P.node.isRequired,
};

export { Base };
