import styled, { css } from 'styled-components';

export const Main = styled.main`
  display: block;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;

    padding-top: ${theme.spacings.xlarge};
    padding-bottom: ${theme.spacings.xlarge};

    padding-right: ${theme.spacings.small};
    padding-left: ${theme.spacings.small};
    margin-right: auto;
    margin-left: auto;

    @media ${theme.media.lessThanMedium} {
      max-width: 540px;
    }

    @media ${theme.media.moreThanExtraLarge} {
      max-width: 1230px;
    }
  `}
`;
