import React from 'react';
import { gql, useQuery } from '@apollo/client';

import './info-boxes.scss'

const InfoBoxes = () => {
  const INFO_BOXES = gql`
      {
          page {
              infoBoxes
          }
      }
  `;

  const {loading, error, data} = useQuery(INFO_BOXES);

  if (error) {
    console.log(error);
    return
  }

  return !loading ? (
    <div className="InfoBoxes">
      {data.page.infoBoxes.map((box, index) => (<div className="info-box" key={index}>{box}</div>))}
    </div>
  ) : (
    <div>Loading...</div>
  )
}

export default InfoBoxes;
