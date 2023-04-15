/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './POPOSSpace.css';
import { Link } from 'react-router-dom';

function POPOSSpace({
  // eslint-disable-next-line react/prop-types
  name, image, address, hours, id,
}) {
  return (
    <div className="POPOSSpace">
      <Link
        className="POPOSSpace-link"
        to={`/details/${id}`}
      >
        <img
          src={`${process.env.PUBLIC_URL}images/${image}`}
          // width="300"
          // height="300"
          alt="Hello"
        />

        <h1>{ name }</h1>
        <div className="POPOSSpace-info">
          <div>{address}</div>
          <div className="hours">{hours}</div>
        </div>
      </Link>
    </div>
  );
}

export default POPOSSpace;
