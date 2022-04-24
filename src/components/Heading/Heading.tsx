import P from 'prop-types';
import * as Styled from './styles';

const Heading = ({
  children,
  as = 'h1',
  size = 'huge',
  primaryColor = false,
}) => {
  return (
    <Styled.Title as={as} size={size} primaryColor={primaryColor}>
      {children}
    </Styled.Title>
  );
};

export { Heading };

Heading.propTypes = {
  children: P.node.isRequired,
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  primaryColor: P.bool,
};
