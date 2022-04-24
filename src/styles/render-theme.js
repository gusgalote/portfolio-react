import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { dark as theme } from './themes/dark';

const renderTheme = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

export { renderTheme };
