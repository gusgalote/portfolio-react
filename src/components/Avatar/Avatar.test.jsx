import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { dark as theme } from '../../styles/themes/dark';
import { Avatar } from './Avatar';

describe('<Avatar />', () => {
  it('should render with required props', () => {
    const src = 'http://test.com/test.png';
    const alt = 'test';

    const { container } = renderTheme(<Avatar altText={alt} srcImage={src} />);

    const image = container.querySelector('img');

    expect(image.src).toBe(src);
    expect(image.alt).toBe(alt);
  });

  it('should render with big size only when screen is more than extra large', () => {
    const { container } = renderTheme(
      <Avatar altText="test" srcImage="test.png" size="big" />,
    );

    const figure = container.firstChild;

    expect(figure).toHaveStyleRule('height', '160px', {
      media: theme.media.moreThanExtraLarge,
    });

    expect(figure).toHaveStyle({
      width: '80px',
      height: '80px',
    });
  });
});
