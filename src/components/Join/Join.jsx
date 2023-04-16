/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { NavLink } from 'react-router-dom';
import data from '../../sfpopos-data';
import './Join.css';

function Join() {
  const randomSite = data[Math.floor(Math.random() * data.length)];
  const image = randomSite.images[0];
  const { title } = randomSite;

  return (
    <div className="Join">
      <div className="Join-image">
        <img src={`${process.env.PUBLIC_URL}images/${image}`} alt={title} />
      </div>
      <div className="Join-info">
        <h1>Join SFPOPOS Newsletter</h1>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Your Email" />
          <NavLink
            className="submit"
            to="/"
          >
            <input
              type="submit"
              value="Submit"
              onClick={(event) => event.preventDefault}
            />
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default Join;
