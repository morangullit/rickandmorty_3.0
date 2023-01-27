import React, { useState } from 'react';
import styles from './SearchBar.module.css'

const SearchBar = (props) => {
  const [character, setCharacter] = useState("");
  const handleChange = (e) => {
    setCharacter(e.target.value);
  };
  const handleClick = () => {
    props.onSearch(character);
  };
  return (
    <div>
      <input 
        className={styles.search_input} 
        type="text"
        placeholder="Agregar personaje"
        onChange={handleChange}
        value={character} />
      <button 
      className={styles.search_bar} 
      onClick={handleClick}>Agregar</button>
    </div>
  );
};

export default SearchBar;