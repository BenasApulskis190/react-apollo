import React from 'react';
import './nav-link.style.scss'

const NavLink = ({text, classNames, ...props}) => (
  <a {...props} className={classNames ?? classNames}>{text}</a>
)

export default NavLink;
