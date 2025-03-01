import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from './sfpopos-data.json';

function POPOSList() {
  const spaces = data.map(({ title, address, images, hours }) => (
    <POPOSSpace
      key={title}  // Unique key for React optimization
      name={title}
      address={address}
      image={images[0]}  // Use the first image in the array
      hours={hours}  // Display opening hours
    />
  ));

  return <div className="POPOSList">{spaces}</div>;
}

export default POPOSList;
