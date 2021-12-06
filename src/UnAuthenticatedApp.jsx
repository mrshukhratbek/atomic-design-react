import React from 'react';

import Button from './components/atoms/Button';

const UnAuthenticatedApp = function unAuthenticatedApp() {
  return (
    <>
      <Button>Button</Button>
      <Button theme="succes">Button</Button>
      <Button theme="danger">Button</Button>
      <Button theme="outlined" disabled>Button</Button>
      Ro`yhatdan o`tmagan
    </>
  );
};

export default UnAuthenticatedApp;
