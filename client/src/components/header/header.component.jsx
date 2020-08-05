import React from 'react'
import './header.style.scss'
import logo from '../../assets/images/testpage-logo.svg';
import NavBar from '../navbar/navbar.component';

const Header = () => (
  <header>
    <div className="container">
      <div className="row">
        <div className="column">
          <img src={logo} alt="logo" className="logo"/>
        </div>
        <div className="column">
          <NavBar />
        </div>
      </div>
    </div>
  </header>
)

export default Header;
