import styled, { css } from 'styled-components';

export const Container = styled.aside`
  ${({ theme }) => css`
    position: relative;
    flex: 0 0 auto;
    width: 25%;

    max-width: 100%;
    padding-left: ${theme.spacings.medium};
    padding-right: ${theme.spacings.medium};
    margin-top: ${theme.spacings.xsmall};

    @media ${theme.media.lessThanMedium} {
      width: 100%;
    }
  `}
`;

export const Box = styled.div`
  ${({ theme }) => css`
    z-index: 10;

    background-color: ${theme.colors.grayDarker};
    border: 1px solid ${theme.colors.grayDark};
    border-radius: ${theme.radius.default};

    padding: ${theme.spacings.medium};
    margin-top: 0;
    position: relative;

    transition: all 3s ease-in-out;
  `}
`;
