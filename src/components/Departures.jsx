import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { parseUTCDate, getFullMinutes, calculateDelay } from './Utils'
import Stops from './Stops.jsx'

function Departures() {
  const { codeStation } = useParams()
  const [nextDepartures, setNextDepartures] = useState([])

  // USEEFFECT
  useEffect(() => {
    // Fonction fetch data
    async function fetchData() {
      // On récupere la réponse avec Axios donc de l'api SNCF+ Authentification
      const response = await axios.get(
        `https://api.sncf.com/v1/coverage/sncf/stop_areas/${codeStation}/departures`,
        {
          headers: {
            Authorization: `${process.env.REACT_APP_API_KEY}`,
          },
        }
      )
      // On map les données
      const nextDeparturesApi = response.data.departures.map((departure) => ({
        // on selectionne l'id de notre API pour chaque trajet
        id: departure.links[1].id,
        operator: '',
        transportationMode: departure.display_informations.network,
        // Numeros du trains
        trainNumber: departure.display_informations.headsign,
        // Heure a laquelle le train est censé arrivé
        baseDepartureTime: parseUTCDate(
          departure.stop_date_time.base_departure_date_time
        ),
        realDepartureTime: parseUTCDate(
          departure.stop_date_time.departure_date_time
        ),
        destination: departure.display_informations.direction.split(' (')[0],
      }))

      setNextDepartures(nextDeparturesApi)
    } // EO FETCH
    fetchData()
  }, [codeStation])

  // compteur
  const [isTimeDisplayed, setIsTimeDisplayed] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTimeDisplayed((prevIsTimeDisplayed) => !prevIsTimeDisplayed)
    }, 5000)

    return clearInterval(interval)
  }, [])

  return (
    <div className="departures">
      {nextDepartures.map((departure, index) => (
        <div
          key={departure.id}
          className={`departure ${index % 2 ? '' : 'departure--light'} `}
        >
          <p className="departure__operator">{departure.operator}</p>

          <p className="departure__train-type">
            {departure.transportationMode}
          </p>
          <p className="departure__train-number">{departure.trainNumber}</p>
          <p
            className={`departure__time ${
              isTimeDisplayed ? '' : 'departure_time--disappear'
            }`}
          >
            {departure.baseDepartureTime.getHours()}h
            {getFullMinutes(departure.baseDepartureTime)}
          </p>
          <p
            className={`departure__delay ${
              isTimeDisplayed ? 'departure__delay--disappear' : ''
            }`}
          >
            {calculateDelay(
              departure.baseDepartureTime,
              departure.realDepartureTime
            )}
          </p>
          <p className="departure_destination">{departure.destination}</p>
          <Stops idDeparture={departure.id} />
        </div>
      ))}
    </div>
  )
}

export default Departures
