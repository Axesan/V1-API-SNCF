import React from 'react'
import CityCard from './CityCard.jsx'
// Fichier "gares.json" qui contient les données de gare
import stations from '../gares.json'

function CityCards() {
  // Récuperation de mes clés dans mon fichiers json que l'on va mapper
  const cities = Object.keys(stations)

  return (
    <div className="city-cards">
      {/* On fais appel à CityCard en utilisant la variable 'city' en mappant les données */}
      {cities.map((city) => (
        <CityCard key={city} city={city} />
      ))}
    </div>
  )
}

export default CityCards
