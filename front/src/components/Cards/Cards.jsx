import React from 'react';
import Card from '../Card/Card';
import styles from '../Cards/Cards.module.css'

const Cards = (props) => {
  const { characters, onClose } = props;
  return (
    <div className={styles.card_container}>
      {characters.map((character, index) => (
        <Card
          key={index}
          id={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          status={character.status}
          origin={character.origin}
          onClose={() => onClose(character.id)}
        />
      ))}
    </div>
  );
};

export default Cards;
