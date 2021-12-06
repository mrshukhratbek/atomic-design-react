import React from 'react';
import PropTypes from 'prop-types';

const Context = React.createContext();

const Provider = function provider({ children = 'salom' }) {
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

Provider.propTypes = {
  children: PropTypes.element,
};

Provider.defaultProps = {
  children: 'Not Allowed',
};

const auth = (settrOnly) => {
  const { token, setToken } = React.useContext(Context);
  return settrOnly ? [token, setToken] : [token];
};

export { auth, Provider };
