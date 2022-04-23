import { render, screen } from '@testing-library/react';

import { App } from './App';

describe('<App />', () => {
  it('should render a text', () => {
    const text = 'Hello World!';

    render(<App>{text}</App>);
    const heading = screen.getByText(text);

    expect(heading).toBeInTheDocument();
  });
});
