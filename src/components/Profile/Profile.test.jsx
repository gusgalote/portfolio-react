import { fireEvent, getByDisplayValue, screen } from '@testing-library/react';
import { FiChevronDown } from 'react-icons/fi';

import { renderTheme } from '../../styles/render-theme';
import { dark as theme } from '../../styles/themes/dark';
import { Profile } from './Profile';

describe('<Profile />', () => {
  it('should render details section with default display on smaller screen', () => {
    const { getByTestId } = renderTheme(<Profile />);

    const detailsSection = document.querySelector('#details');

    expect(detailsSection).toHaveStyleRule('display', 'none', {
      media: theme.media.lessThanMedium,
    });
  });

  it('should details section display', () => {
    const { getByTestId } = renderTheme(<Profile />);

    const detailsButton = document.querySelector('#details-button');
    const detailsSection = document.querySelector('#details');

    fireEvent.click(detailsButton);

    expect(detailsSection).toHaveStyleRule('display', 'block', {
      media: theme.media.lessThanMedium,
    });
  });
});
