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
    <article className="Join">
      <section className="Join-image">
        <figure>
          <img src={`${process.env.PUBLIC_URL}images/${image}`} alt={title} />
          <figcaption>{title}</figcaption>
        </figure>
      </section>
      <section className="Join-info">
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
            <button
              type="submit"
              onClick={(event) => event.preventDefault}
            >
              Submit
            </button>
          </NavLink>
        </form>
      </section>
    </article>
  );
}

export default Join;
