import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './Detail.module.css';

export const Detail = () => {
    const [character, setCharacter] = useState({})
    const {detailId} = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

  return (
    <div className={styles.detail}>
      <>
        <Link to="/home">
          <button className={styles.button}>Go Back</button>
        </Link>
      </>
        <h1>{character.name}</h1>
        <h2>{character.species}</h2>
        <h2>{character.gender}</h2>
        <h2>{character.status}</h2>
        <h2>{character.origin?.name}</h2>
        <h2>{character.location?.name}</h2>
        <img src={character.image} alt='No hay Imgen' />
    </div>
  )
}

