import React from 'react';
import { Outlet } from 'react-router-dom';
import Title from './Title';
import './App.css';

function App() {
  return (
    <div>
      <Title />
      <Outlet /> {/* This allows child routes (like About and List) to be displayed here */}
    </div>
  );
}

export default App;
