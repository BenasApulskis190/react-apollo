import React from 'react'
import './header.style.scss'
import logo from '../../assets/images/testpage-logo.svg';
import NavBar from '../navbar/navbar.component';

const menu = [
  {
    link: '#',
    text: 'Projects',
    submenu: {
      id: '1',
      items: [
        {
          link: '#',
          text: 'Projects'
        },
        {
          link: '#',
          text: 'Projects'
        },
        {
          link: '#',
          text: 'Projects'
        },
      ]
    },
  },
  {
    link: '#',
    text: 'Projects',
  },
  {
    link: '#',
    text: 'Projects'
  },
  {
    link: '#',
    text: 'Projects'
  },
];

const Header = () => (
  <header>
    <div className="container">
      <div className="row">
        <div className="column">
          <img src={logo} alt="logo" className="logo"/>
        </div>
        <div className="column">
          <NavBar menu={menu}/>
        </div>
      </div>
    </div>
  </header>
);

function handleClick(e) {
  e.preventDefault();
  console.log('click')
}

export default Header;
