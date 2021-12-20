import React from 'react';
import Card from './Card.jsx'
import {citiesStyle, cityStyle} from './Cards.module.css'

function Cards(props) {
  return (
    <ul className={citiesStyle}>
      {props.cities.map((city,index) => {
        return <li className={cityStyle} key={index}> 
          <Card 
            onClose={() => props.onClose(city.id)}
            city={city}
          />
        </li>
      })}
    </ul>
  )
};

export default Cards;
