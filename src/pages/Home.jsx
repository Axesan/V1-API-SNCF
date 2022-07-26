import React from 'react'
import CityCards from '../components/CityCards.jsx'

function Home() {
  return (
    <div className="home">
      <div className="home__content-wrapper">
        {/* COMPOSANT */}
        <CityCards />
      </div>
    </div>
  )
}
export default Home
