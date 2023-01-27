import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Nav.module.css';

const Nav = (props) => {
  return (
    <nav>
        <div className={styles.nav_container}>
            <Link className={styles.random} to="/home">Home</Link>
            <Link className={styles.random} to="/favorites">Favorito</Link>
            <Link className={styles.random} to="/about">About</Link>
            <SearchBar onSearch={props.onSearch} />
            <button className={styles.random} onClick={props.onRandomSearch}>Random</button>
            <Link className={styles.random} to="/">Logout</Link>
        </div>
        
    </nav>
  )
}

export default Nav;