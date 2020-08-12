import React from 'react';

import './input.style.scss';

const Input = ({label, id, ...props}) => (
  <div className="form-group">
    {label && (<label htmlFor={id}>{label}</label>)}
    <input {...props}/>
  </div>
);

export default Input;
