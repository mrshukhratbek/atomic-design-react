import React from 'react';

const Context = React.createContext();

// eslint-disable-next-line react/prop-types
const Provider = function provider({ children }) {
  const [token, setToken] = React.useState(
    localStorage.getItem('auth'),
  );

  React.useEffect(() => {
    if (token) {
      return localStorage.setItem('auth', true);
    }

    return localStorage.removeItem('auth');
  }, [token]);

  const obj = React.useMemo(() => ({ token, setToken }), []);

  return (
    <Context.Provider value={obj}>
      {children}
    </Context.Provider>
  );
};

const auth = (settrOnly) => {
  const { token, setToken } = React.useContext(Context);
  return settrOnly ? [token, setToken] : [token];
};

export { auth, Provider };
