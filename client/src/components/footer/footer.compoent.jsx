import React from 'react';
import { gql, useQuery } from '@apollo/client';

import './footer.style.scss'

const Footer = () => {

  const FOOTER = gql`
      {
          page {
              navBar {
                  link
                  text
              }
              footer
          }
      }
  `;
  const {loading, error, data} = useQuery(FOOTER);


  return !loading ? (
    <footer>
      <div className="container">
        <ul>
          {data.page.navBar.map(({link, text}, index) =>
            (<li key={index}><a href={link}>{text}</a></li>))}
        </ul>
        <p>{data.page.footer}</p>
      </div>
    </footer>
  ) : (<div>Loading...</div>)
}

export default Footer;
