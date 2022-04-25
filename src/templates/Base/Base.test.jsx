import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { dark as theme } from '../../styles/themes/dark';

import { Base } from '../Base/Base';

describe('<Base />', () => {
  it('should match snapshot for default styles', () => {
    const { container } = renderTheme(<Base>test</Base>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should change max-width on breakpoints', () => {
    const { container } = renderTheme(<Base>test</Base>);

    const main = container.querySelector('main');

    const containerToBeTested = main.firstChild;

    expect(containerToBeTested).toHaveStyleRule('max-width', '540px', {
      media: theme.media.lessThanMedium,
    });

    expect(containerToBeTested).toHaveStyleRule('max-width', '1230px', {
      media: theme.media.moreThanExtraLarge,
    });
  });
});
