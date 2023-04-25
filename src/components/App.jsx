import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from 'react-router-dom';
import './App.css';
import Title from './Title/Title';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Title />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
