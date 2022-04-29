import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { dark as theme } from '../../styles/themes/dark';
import { Badge } from './Badge';

describe('<Badge />', () => {
  it('should render', () => {
    const text = 'badge text';
    const { container } = renderTheme(<Badge>{text}</Badge>);
    const span = container.querySelector('span');

    expect(span.textContent).toBe(text);
  });
});
