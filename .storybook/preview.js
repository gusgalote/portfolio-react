import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/global-styles';
import { dark as theme } from '../src/styles/themes/dark';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'light',
        value: theme.colors.white,
      },
      {
        name: 'dark',
        value: theme.colors.black,
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  ),
];
