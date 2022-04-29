import styled, { css } from 'styled-components';

const figureSizes = {
  small: (theme) => css`
    width: 160px;
    height: 160px;
  `,
  big: (theme) => css`
    width: 80px;
    height: 80px;
  `,
};

export const Figure = styled.figure`
  ${({ theme, size }) => css`
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 40px;
    margin-inline-end: 40px;

    margin: ${theme.spacings.small} auto ${theme.spacings.xsmall};

    overflow: hidden;

    ${figureSizes[size](theme)};

    @media ${theme.media.lessThanMedium} {
      width: 80px;
      height: 80px;
    }

    background: ${theme.colors.gradientBackground};
    border-radius: ${theme.radius.default};

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  `}
`;
