import React from 'react';

import Loader from '../loader/loader.component';

import './button.style.scss';

const Button = ({text, isLoading, ...props}) => (
  <button {...props} className="btn">
    {isLoading && (<Loader classNames='loader-sm'/>)}
    <span>{text}</span>
  </button>
);

export default Button;
