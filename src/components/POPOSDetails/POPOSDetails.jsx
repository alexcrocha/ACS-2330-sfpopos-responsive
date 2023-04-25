/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useParams } from 'react-router';
import data from '../../sfpopos-data';
import './POPOSDetails.css';

function POPOSDetails() {
  const params = useParams();
  const { id } = params; // Location index
  const {
    images, title, desc, hours, features, geo, address,
  } = data[id];

  return (
    <article className="POPOSDetails" aria-labelledby="popos-title">
      <figure className="POPOSDetails-image">
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} alt={title} />
      </figure>

      <section className="POPOSDetails-info">
        <h1 className="POPOSDetails-title" id="popos-title">{ title }</h1>
        <p className="POPOSDetails-desc">{desc}</p>
        <p className="POPOSDetails-features">{ features.join(' ') }</p>
        <p className="POPOSDetails-hours">{hours}</p>
        <p className="POPOSDetails-address">{address}</p>
        <p className="POPOSDetails-geo">
          { geo.lat }
          {' '}
          { geo.lon }
        </p>
      </section>
    </article>
  );
}

export default POPOSDetails;
