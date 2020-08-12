import React from 'react';

import Header from '../../components/header/header.component';
import Main from '../../components/main/main.component';
import SideBar from '../../components/sidebar/sidebar.component';
import InfoBoxes from '../../components/info-boxs/info-boxes';
import Footer from '../../components/footer/footer.compoent';

import './homepage.style.scss'

const HomePage = () => {

  return (
    <div className='home-page'>
      <Header/>
      <div className="spacer"></div>
      <div className="container">
        <div className="row">
          <div className="main-content">
            <Main/>
          </div>
          <div className="side-bar">
            <SideBar/>
          </div>
        </div>
        <div className="spacer"></div>

        <div className="row">
          <InfoBoxes/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default HomePage;
