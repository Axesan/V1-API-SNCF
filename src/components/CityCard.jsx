import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

function CityCard({ city }) {
  return (
    // Liens correspondant à la ville souhaiter
    <Link
      // Ou ? dans la variable city qui contient donc notre ville
      to={`${city}`}
      className="city-card"
      style={{ backgroundImage: `url('./images/${city}.webp')` }}
    >
      {/* On affiche notre ville */}
      <h3 className="city-card__name">{city}</h3>
    </Link>
  )
}

// CITY TYPE STRING
CityCard.propTypes = {
  city: propTypes.string.isRequired,
}

export default CityCard
