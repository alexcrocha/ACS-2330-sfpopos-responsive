/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './POPOSSpace.css';
import { Link } from 'react-router-dom';

function POPOSSpace({
  // eslint-disable-next-line react/prop-types
  name, image, address, hours, id,
}) {
  return (
    <article className="POPOSSpace" aria-labelledby="space-title">
      <Link
        className="POPOSSpace-link"
        to={`/details/${id}`}
      >
        <figure>
          <img
            src={`${process.env.PUBLIC_URL}images/${image}`}
            alt={name}
          />
        </figure>

        <h1 id="space-title">{ name }</h1>
        <section className="POPOSSpace-info">
          <p>{address}</p>
          <p className="hours">{hours}</p>
        </section>
      </Link>
    </article>
  );
}

export default POPOSSpace;
