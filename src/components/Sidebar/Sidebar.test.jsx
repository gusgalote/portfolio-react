import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { dark as theme } from '../../styles/themes/dark';
import { Sidebar } from './Sidebar';

describe('<Sidebar />', () => {
  it('should change width when screen reaches breakpoint', () => {
    const { container } = renderTheme(<Sidebar />);
    const aside = container.firstChild;

    expect(aside.tagName.toLowerCase()).toBe('aside');
    expect(aside).toHaveStyleRule('width', '25%');
    expect(aside).toHaveStyleRule('width', '100%', {
      media: theme.media.lessThanMedium,
    });
  });
});
