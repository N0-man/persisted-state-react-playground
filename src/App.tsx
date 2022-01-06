// import React from 'react';
import logo from './catmon.jpg'
import './App.css'
import CatFactCard from './CatFactCard'

function App() {
  // const [joke, newFact] = useCatFacts()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CatFactCard />
        <CatFactCard />
        <CatFactCard />
      </header>
    </div>
  )
}

export default App
