import React from 'react';

import Button from './components/atoms/Button';
import Input from './components/atoms/Input';

const UnAuthenticatedApp = function unAuthenticatedApp() {
  return (
    <>
      <Button>Button</Button>
      <Input theme="error" placeholder="label" disabled />
      Ro`yhatdan o`tmagan
    </>
  );
};

export default UnAuthenticatedApp;
