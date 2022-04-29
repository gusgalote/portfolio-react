import styled, { css } from 'styled-components';

export const Container = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.weights.light};
    letter-spacing: 0.6px;

    background: ${theme.colors.gradientBackground};
    color: ${theme.colors.text};
    border-radius: ${theme.radius.small};

    padding: 0.5rem 1rem;
    white-space: nowrap;

    vertical-align: baseline;
  `}
`;
