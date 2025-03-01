// src/POPOSList.js
import './POPOSList.css';
import POPOSSpace from './POPOSSpace';


const spaces = [
  {
    name: "50 California Street",
    address: "50 California St.",
    image: "50-california-st.jpg",
  },
  {
    name: "100 Pine Street",
    address: "100 Pine St.",
    image: "100-pine.jpg",
  },
  {
    name: "101 California Street",
    address: "101 California St.",
    image: "101-california.jpg",
  },
  {
    name: "343 Sansome Roof Garden",
    address: "343 Sansome St.",
    image: "343-sansome-roof-garden.jpg",
  },
  {
    name: "525 Market Street Plaza",
    address: "525 Market St.",
    image: "525-market-street-plaza.jpg",
  },
  {
    name: "555 California Street",
    address: "555 California St.",
    image: "555-california.jpg",
  }
];

function POPOSList() {
  return (
    <div className="POPOSList">
      {spaces.map((space, index) => (
        <POPOSSpace 
          key={index}
          name={space.name}
          address={space.address}
          image={space.image}
        />
      ))}
    </div>
  );
}

export default POPOSList;
