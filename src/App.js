import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { PEOPLE_BASE_URL } from './Contants/index'
import Character from './components/Character';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacter] = useState([])
 
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    const getCharacters = () => {
      axios.get(`${PEOPLE_BASE_URL}`)
      .then(res => {
        console.log('It is working',res.data);
        setCharacter(res.data)
      }).catch(err => {
        console.log('Error!!!', err);
      })
    };
    getCharacters();
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      <Character data={characters} />
    </div>
  );
}

export default App;
