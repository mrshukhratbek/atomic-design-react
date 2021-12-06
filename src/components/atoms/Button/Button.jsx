import PropTypes from 'prop-types';
import styled from 'styled-components';

const theme = {
  primary: {
    default: '#0d1523',
    hover: '#3d444f',
  },
  succes: {
    default: '#2fb254',
    hover: '#49be6A',
  },
  danger: {
    default: '#ff5454',
    hover: '#ff3939',
  },
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: #fff;
  padding: 12px 25px;
  cursor: pointer;
  border-radius: 2px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }

  &:disabled {
    cursor: default;
    opacity: 0.3;
  }
`;

Button.defaultProps = {
  theme: 'primary',
};

Button.propTypes = {
  theme: PropTypes.string,
};

export default Button;
