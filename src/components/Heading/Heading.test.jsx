import { screen } from '@testing-library/dom';
import { ThemeProvider } from 'styled-components';

import { renderTheme } from '../../styles/render-theme';
import { dark as theme } from '../../styles/themes/dark';

import { Heading } from './Heading';

describe('Heading />', () => {
  it('should render with default styles', () => {
    renderTheme(<Heading>title</Heading>);

    const heading = screen.getByRole('heading', { name: 'title' });

    expect(heading).toHaveStyle({
      color: theme.colors.text,
      'font-size': theme.font.sizes.xhuge,
    });
  });

  it('should render with primary color when primaryColor is true', () => {
    const { rerender } = renderTheme(<Heading primaryColor>title</Heading>);

    const heading = screen.getByRole('heading', { name: 'title' });

    expect(heading).toHaveStyle({
      color: theme.colors.primary,
    });
  });

  it('should render with different sizes', () => {
    renderTheme(<Heading size="small">small</Heading>);
    const smallHeading = screen.getByRole('heading', { name: 'small' });
    expect(smallHeading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });

    renderTheme(<Heading size="medium">medium</Heading>);
    const mediumHeading = screen.getByRole('heading', { name: 'medium' });
    expect(mediumHeading).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });

    renderTheme(<Heading size="big">big</Heading>);
    const bigHeading = screen.getByRole('heading', { name: 'big' });
    expect(bigHeading).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });

    renderTheme(<Heading size="huge">huge</Heading>);
    const hugeHeading = screen.getByRole('heading', { name: 'huge' });
    expect(hugeHeading).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });
  });

  it('should adapt huge font-size when screen reaches less than 768px breakpoint', () => {
    const text = 'lessThanMedium';
    renderTheme(<Heading>{text}</Heading>);
    const heading = screen.getByRole('heading', { name: text });

    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xlarge, {
      media: theme.media.lessThanMedium,
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">heading6</Heading>);

    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
