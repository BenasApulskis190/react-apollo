import React, { useState, useEffect, useRef, cloneElement } from 'react';

import NavLink from '../navItem/nav-link.component';
import DropDown from '../dropdown/dropdown.component';

import './navbar.style.scss'

const NavBar = ({isMobileOpen, menu}) => {
  const [activeSubmenu, setActiveSubmenu] = useState();

  function handleClick(e) {
    e.preventDefault();
    setActiveSubmenu(e.target.id);
  }

  const ClickOutside = ({children, onClick}) => {
    const ref = useRef();
    useEffect(() => {
      if (!ref?.current) {
        return;
      }
      const handleClickOutside = (e) => {
        if (onClick && !ref.current.contains(e.target)) {
          onClick(e);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [onClick]);
    return <div>{cloneElement(children, {ref})}</div>;
  };

  const handleOutsideClick = () => {
    setActiveSubmenu(undefined)
  }

  const ListMenu = ({link, text, submenu}) => {

    if (submenu) {
      return (
        <ClickOutside onClick={handleOutsideClick}>
          <div className="nav-item">
            <NavLink href={link} text={text} onClick={handleClick} id={submenu.id}/>
            <DropDown isOpen={activeSubmenu === submenu.id && 'open'}>
              {submenu.items.map(({link, text}, index) => (
                <div className="nav-item" key={index}>
                  <NavLink href={link} text={text}/>
                </div>
              ))}
            </DropDown>
          </div>
        </ClickOutside>
      );
    } else {
      return (
        <div className="nav-item">
          <NavLink href={link} text={text}/>
        </div>
      );
    }
  };

  return (
    <nav className={isMobileOpen && 'open'}>
      {menu.map((item, index) => (
        <ListMenu {...item} key={index}/>
      ))}
    </nav>
  )
}

export default NavBar;
