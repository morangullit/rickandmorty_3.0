import './App.css'
import React, { useState, useEffect } from 'react';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { About } from './components/About/About';
import { Detail } from './components/Detail/Detail';
import { Error } from './components/Error/Error';
import { Form } from './components/Form/Form';
import  Favorites  from './components/Favorites/Favorites';



function App (props) {

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const username = 'gmoran@gmail.com';
  const password = 'gmoran1234';

  const login =(userData) => {
    if (userData.password === password && userData.username === username) {
       setAccess(false);
       navigate('/home');
    }
 }

 useEffect(() => {
  !access && navigate('/');
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [access]);

  const onSearch = (characterId) => {
    /* const example = {
      name: 'Morty Smith',
      species: 'Human',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    };
    setCharacters([...characters, example]) */
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          const index = characters.findIndex(c => c.id === data.id);
          if(index === -1) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("Este personaje ya fue agregado");
          }
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
  }

  function onClose(id) {
    setCharacters((oldChars) => oldChars.filter((character) => character.id !== id));
 }

 const onRandomSearch = () => {
  const randomId = Math.floor(Math.random() * 826) + 1;
  onSearch(randomId);
}

  return (
    <div className='App' style={{ padding: '25px' }}>
      
      <div>
      {location.pathname !== '/' && <Nav onSearch={onSearch} onRandomSearch={onRandomSearch}/>}
        <Routes>
          <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/detail/:detailId" element={<Detail />} /> 
          <Route path="/" element={<Form login={login}/>} />
          <Route path='*' element={<Error/>}/> 
        </Routes>
        </div>
    </div>
    
  )
}

export default App
