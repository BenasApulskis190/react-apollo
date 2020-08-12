import React from 'react';

import './input.style.scss';

const Input = ({label, id, inputType, ...props}) => {
  let inputElement;

  switch (inputType) {
    case ('input') :
      inputElement = <input {...props}/>
      break;

    case ('textarea') :
      inputElement = <textarea {...props} />
      break;

    default :
      inputElement = <input {...props}/>
  }

  return (
    <div className="form-group">
      {label && (<label htmlFor={id}>{label}</label>)}
      {inputElement}
    </div>
  )
};

export default Input;
