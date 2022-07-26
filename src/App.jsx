import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.scss'
import City from './pages/City.jsx'
import TrainStation from './components/TrainStation.jsx'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 

          ROUTES DE l'affichage des gares  contient une variable :city qui est donc notre nom de ville ('ref: fichier : City.jsx')
          Grace à react-router-dom
          ex : https://localhost:3000/paris

        */}
        <Route path="/:city" element={<City />}>
          <Route path=":codeStation" element={<TrainStation />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
