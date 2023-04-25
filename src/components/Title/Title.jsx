/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';
// import RandomSpace from '../RandomSpace/RandomSpace';
import './Title.css';

function Title() {
  return (
    <header className="Title">
      <h1>SFPOPOS</h1>
      <nav className="nav-links" aria-label="Main navigation">
        <NavLink
          className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
          to="/"
        >
          List
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
          to="/join"
        >
          Join
        </NavLink>
        {/* <RandomSpace /> */}
      </nav>
    </header>
  );
}

export default Title;
