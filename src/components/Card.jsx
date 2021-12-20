import React from 'react';
import {NavLink} from 'react-router-dom';
import {card, button, name, container, temperature, img} from './Card.module.css'

function Card({onClose, city}) {
  return (
    <div className={card}>
      <button className={button} onClick={onClose}>X</button>

      <NavLink to={`/city/${city.id}`} className={name}>
        {city.name.length > 20 ? city.name.slice(0,20) + '...' : city.name}
      </NavLink>

      <div className={container}>
        <ul className={temperature}>
          <li> Max.</li> 
          <li>{Math.round(city.max)+'°C'}</li>
        </ul> 

        <ul className={temperature}>
          <li> Min.</li> 
          <li>{Math.round(city.min)+'°C'}</li>
        </ul> 

        <img src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}
          alt="Weather"
          className={img}/>
      </div>
    </div>
  )
};

export default Card;
