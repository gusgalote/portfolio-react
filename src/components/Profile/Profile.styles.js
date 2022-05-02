import styled, { css } from 'styled-components';

import { Title as Heading } from '../Heading/Heading.styles';
import { Figure as Avatar } from '../Avatar/Avatar.styles';
import { Container as Badge } from '../Badge/Badge.styles';

export const MainInfo = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lessThanMedium} {
      display: flex;
      -webkit-box-align: center;
      align-items: center;

      ${Avatar} {
        margin: 0 ${theme.spacings.medium} 0 0;
      }
    }
  `}
`;

export const TextCenter = styled.div`
  ${({ theme }) => css`
    text-align: center;

    ${Heading} {
      position: relative;
      font-weight: 600;
      margin: 0 0 ${theme.spacings.xsmall};
    }
  `}
`;

export const DetailsButton = styled.button`
  ${({ theme }) => css`
    display: none;

    text-align: center;
    vertical-align: middle;
    position: absolute;
    top: 0;
    right: 0;
    border-top-left-radius: 0;
    border-top-right-radius: ${theme.radius.default};
    border-bottom-left-radius: ${theme.radius.default};
    border-bottom-right-radius: 0;
    background: ${theme.colors.gradientBorder};
    padding: ${theme.spacings.small};
    margin 0;

    @media ${theme.media.lessThanMedium} {
      display: block;
    }

    svg {
      color: ${theme.colors.primary};
    }

    :hover {
      background: ${theme.colors.gradientPrimary};
      svg {
        color: ${theme.colors.secondary};
      }
    }
  `}
`;

export const DetailsInfo = styled.div`
  ${({ theme, showDetails }) => css`
    @media ${theme.media.lessThanMedium} {
      display: ${showDetails ? 'block' : 'none'};
    }
  `}
`;

export const Separation = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gray};

    width: 100%;
    height: 1px;

    margin: ${theme.spacings.large} 0;
  `}
`;

export const DetailsList = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    padding-left: 0;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;

export const DetailsListItem = styled.li`
  ${({ theme }) => css`
    display: flex;

    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.weights.xbold};

    align-items: center;
    margin-bottom: ${theme.spacings.small};
    white-space: nowrap;
  `}
`;

export const IconSpan = styled.span`
  ${({ theme }) => css`
    display: inline-flex;
    position: relative;
    justify-content: center;
    align-items: center;

    font-size: ${theme.font.sizes.small};
    border-radius: ${theme.radius.small};
    height: ${theme.spacings.xlarge};
    width: ${theme.spacings.xlarge};

    color: ${theme.colors.primary};
    background: ${theme.colors.gradientPrimary};

    margin-right: ${theme.spacings.xsmall};
  `}
`;

export const DetailTitle = styled.span`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.grayLight};
    font-size: ${theme.font.sizes.xsmall};
    opacity: 0.7;
    text-transform: uppercase;
  `}
`;

export const DetailContent = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;

    letter-spacing: 0.6px;
  `}
`;

export const Social = styled.div`
  ${({ theme }) => css`
    text-align: center;
  `}
`;

export const SocialLink = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    opacity: 0.6;

    :not(:last-child) {
      margin-right: ${theme.spacings.small};
    }

    color: ${theme.colors.text};
  `}
`;
