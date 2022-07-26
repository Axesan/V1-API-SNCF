import React, { useState } from 'react'
import Departures from './Departures.jsx'
import Arrivals from './Arrivals.jsx'

function TrainStation() {
  const [departureMode, setDepartureMode] = useState(true)
  return (
    <div className="train-station">
      <div className="directions">
        <button
          className={`directions__departures ${
            departureMode ? 'directions__departures--active' : ''
          }`}
          type="button"
          onClick={() => setDepartureMode(true)}
          onKeyPress={() => setDepartureMode(true)}
        >
          Départs
        </button>

        <button
          className={`directions__arrivals ${
            departureMode ? 'directions__arrivals--active' : ''
          }`}
          type="button"
          onClick={() => setDepartureMode(false)}
          onKeyPress={() => setDepartureMode(false)}
        >
          Arrivées
        </button>
      </div>
      {departureMode && <Departures />}
      {/* Si je suis pas en mode depart j'affiche le composant 'Arrivals' */}
      {!departureMode && <Arrivals />}
    </div>
  )
}

export default TrainStation
