import React from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <Searchbar />
    </div>
  );
}
