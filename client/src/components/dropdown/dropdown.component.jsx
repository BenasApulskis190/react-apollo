import React  from 'react'
import './dropdown.style.scss'

const DropDown = function ({children, isOpen}) {
  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      {children}
    </div>
  )
}

export default DropDown;
