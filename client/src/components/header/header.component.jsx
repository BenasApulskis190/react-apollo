import React from 'react'
import './header.style.scss'
import logo from '../../assets/images/testpage-logo.svg';
import NavBar from '../navbar/navbar.component';
import { useQuery, gql } from '@apollo/client';

const Header = () => {
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

  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="column">
            <img src={logo} alt="logo" className="logo"/>
          </div>
          <div className="column">
            <NavBar menu={!loading ? data.page.navBar : [] }/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
