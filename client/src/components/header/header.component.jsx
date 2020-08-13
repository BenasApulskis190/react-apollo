import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client';

import logo from '../../assets/images/testpage-logo.svg';
import NavBar from '../navbar/navbar.component';

import './header.style.scss'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const NAV_BAR_ITEMS = gql`
      query GetExchangeRates {
          page {
              navBar {
                  text
                  link
                  submenu {
                      id
                      items {
                          text
                          link
                      }
                  }
              }
          }
      }
  `;

  const {loading, error, data} = useQuery(NAV_BAR_ITEMS);

  if (error) {
    console.log(error);
    return
  }

  const handleClick = () => {
    setMobileOpen(!mobileOpen);
  }

  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="row">
              <img src={logo} alt="logo" className="logo"/>
              <div className={`mobile-nav-btn ${mobileOpen && 'open'}`} onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="column">
            <NavBar isMobileOpen={mobileOpen} menu={!loading ? data.page.navBar : []}/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
