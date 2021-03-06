import React from 'react';
import PropTypes from 'prop-types';
import { Btn, BtnContained } from './styles';

function Button({
  color, icon: Icon, label, onClick, size, type, variant,
}) {
  let Component = Btn;
  if (variant === 'contained') {
    Component = BtnContained;
  }
  return (
    <Component $color={color} onClick={onClick} type={type} $size={size}>
      { Icon && (
        <Icon />
      )}
      {label}
    </Component>
  );
}

Button.propTypes = {
  color: PropTypes.oneOf(['neutral', 'primary', 'secondary']),
  icon: PropTypes.elementType,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['fit', 'small', 'big']),
  type: PropTypes.oneOf(['button', 'submit']),
  variant: PropTypes.oneOf(['text', 'contained']),
};

Button.defaultProps = {
  color: 'neutral',
  icon: null,
  onClick: undefined,
  size: 'fit',
  type: 'button',
  variant: 'text',
};

export default Button;
