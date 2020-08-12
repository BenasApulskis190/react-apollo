import React from 'react';

import './button.style.scss';

const Button = ({text, ...props}) => (
  <button {...props} className="btn">{text}</button>
);

export default Button;
