import './App.css';
import React from 'react';

import { auth } from './context/AuthContext';

import AuthenticatedApp from './AuthenticatedApp';
import UnAuthenticatedApp from './UnAuthenticatedApp';

const App = function app() {
  const [token] = auth();

  if (token) {
    return <AuthenticatedApp />;
  }

  return <UnAuthenticatedApp />;
};

export default App;
