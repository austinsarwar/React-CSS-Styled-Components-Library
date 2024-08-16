import { useState } from 'react'
import './App.css'
import Button from './components/Button_Hover/Button'
import SearchBar from './components/SearchBar/SearchBar'


function App() {


  return (
    <>
     <h1 className='main-heading'>CSS Projects Showcase</h1>
       <h2>Button Hover</h2>
       <section id="button-hover">
     
        <Button />
      </section>
      <h2>Expanding Search Bar</h2>
      <section id="search-bar">
       
        <SearchBar />
      </section>
     

  
    </>
  )
}

export default App
