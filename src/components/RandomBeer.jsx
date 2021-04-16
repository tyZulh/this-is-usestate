import React, { useState } from 'react';

import BeerCard from './BeerCard';

import './RandomBeer.css';

function RandomBeer() {
  const [beer, setBeer] = useState();

  const fetchBeer = () => {
    fetch('https://api.punkapi.com/v2/beers/random')
      .then((res) => res.json())
      .then((data) => setBeer(data[0]));
  };

  return (
    <div className="w-screen flex flex-col items-center">
      <input className="RandomBeer-button  text-4xl mb-10" type="button" value="GET BEER" onClick={fetchBeer} />

      {beer && <BeerCard name={beer.name} abv={beer.abv} ibu={beer.ibu} description={beer.description} />}
    </div>
  );
}

export default RandomBeer;
