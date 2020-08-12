import React from 'react';
import './loader.style.scss'

const Loader = props => (
  <span className={`loader ${props.classNames}`}></span>
);

export default Loader;
