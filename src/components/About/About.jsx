import React from 'react';
import data from '../../sfpopos-data';
import './About.css';

function About() {
  const randomSite = data[Math.floor(Math.random() * data.length)];
  const image = randomSite.images[0];
  const { title } = randomSite;
  return (
    <div className="About">
      <div className="About-image">
        <img src={`${process.env.PUBLIC_URL}images/${image}`} alt={title} />
      </div>
      <div className="About-info">
        <h1>About SFPOPOS</h1>
        <p>
          POPOS are publicly accessible spaces in
          forms of plazas, terraces, atriums, small
          parks, and even snippets which are provided
          and maintained by private developers. In San
          Francisco, POPOS mostly appear in the Downtown
          office district area.
        </p>
      </div>
    </div>
  );
}

export default About;
