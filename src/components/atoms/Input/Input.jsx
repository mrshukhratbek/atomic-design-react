import PropTypes from 'prop-types';
import styled from 'styled-components';

const theme = {
  primary: {
    default: '#6E737B',
    hover: '#0D1523',
    focus: '#065FD4',
  },
  succes: {
    default: '#2FB254',
    hover: '#49be6A',
  },
  error: {
    default: '#FF5454',
    hover: '#FF5454',
  },
};

const Input = styled.input`
  padding: 12px 15px;
  border: 1px solid ${(props) => theme[props.theme].default};
  box-sizing: border-box;
  border-radius: 4px;

  &:hover {
    border: 1px solid ${(props) => theme[props.theme].hover};
  }

  &:focus {
    outline: none;
    border: 1px solid ${(props) => theme[props.theme].focus};
  }

  &:disabled {
    background-color: #E7E8E9;
    border: 1px solid #CECECE;
    cursor: default;
    opacity: 0.3;
  }
`;

Input.defaultProps = {
  theme: 'primary',
};

Input.propTypes = {
  theme: PropTypes.string,
};

export default Input;
