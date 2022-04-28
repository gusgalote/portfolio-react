import P from 'prop-types';

import * as Styled from './Avatar.styles';

const Avatar = ({ srcImage, altText, size = 'small' }) => {
  return (
    <Styled.Figure size={size}>
      <img src={srcImage} alt={altText} />
    </Styled.Figure>
  );
};

Avatar.propTypes = {
  srcImage: P.string.isRequired,
  altText: P.string.isRequired,
  size: P.oneOf(['small', 'big']),
};

export { Avatar };
