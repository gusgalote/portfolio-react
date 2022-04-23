import { useState } from 'react';
import P from 'prop-types';

const App = ({ children }) => {
  return <h1>{children}</h1>;
};

export { App };

App.propTypes = {
  children: P.string.isRequired,
};
