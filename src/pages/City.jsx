import React from 'react'
import { useParams, Outlet } from 'react-router-dom'
import stations from '../gares.json'
import TrainStations from '../components/TrainStations.jsx'

function City() {
  const { city } = useParams()

  return (
    <div className="city">
      <h2 className="city__name">{city}</h2>
      {/* Recuperation des données de ma lsite de stations dans le fichier gares.json  */}
      <TrainStations stations={stations[city]} />
      <Outlet />
    </div>
  )
}

export default City
