import React from 'react'
import { NavLink } from 'react-router-dom'
import propTypes from 'prop-types'

function TrainStations({ stations }) {
  return (
    <div className="train-stations">
      {/* Recuperation de mes clés et on map chaque nom de gare */}

      {Object.keys(stations).map((stationName) => (
        <NavLink
          className={({ isActive }) =>
            `train-stations__link ${
              isActive ? 'train-stations__link--active' : ''
            }`
          }
          key={stationName}
          to={`${stations[stationName]}`}
        >
          <span className="train-stations__link">{stationName}</span>
        </NavLink>
      ))}
    </div>
  )
}

TrainStations.propTypes = {
  // eslint-disabled-next-line react/forbid-prop-types
  stations: propTypes.object.isRequired,
}
export default TrainStations
