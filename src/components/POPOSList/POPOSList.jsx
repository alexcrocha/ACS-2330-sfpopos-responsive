import React, { useState } from 'react';
import './POPOSList.css';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import data from '../../sfpopos-data';

function POPOSList() {
  const [query, setQuery] = useState('');
  const spaces = data
    .filter((obj) => obj.title.toLowerCase().includes(query.toLowerCase())
      || obj.address.toLowerCase().includes(query.toLowerCase()))
    .map(({
      id, title, address, images, hours,
    }) => (
      <POPOSSpace
        id={id}
        key={title}
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
      />
    ));

  return (
    <>
      <form className="PLform">
        <input
          value={query}
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="POPOSList">
        {spaces}
      </div>
    </>
  );
}

export default POPOSList;
