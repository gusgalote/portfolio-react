import P from 'prop-types';

import * as Styled from './Badge.styles';

const Badge = ({ children, background = 'default' }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

Badge.propTypes = {
  children: P.node.isRequired,
  background: P.oneOf(['default', 'primary']),
};

export { Badge };
