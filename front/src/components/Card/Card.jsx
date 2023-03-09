import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { addFavorite, deleteFavorite } from '../../redux/actions/actions';
import { connect } from 'react-redux';

export function Card(props){
  const { name, species, gender, image } = props;
  const [isFav, setIsFav] = useState(false);

   function handleFavorite(){
      if(isFav){
         setIsFav(false)
         props.deleteFavorite(props.id)
      }else {
         setIsFav(true)
         props.addFavorite(props)
      }
   }

   useEffect(() => {
    props.myFavorites?.forEach((fav) => {
          if (fav.id === props.id) {
             setIsFav(true);
          }
       });
    }, [props.id, props.myFavorites]);

return (
    <div className={styles.card_div}>
      <div className={styles.buttonContainer}>
            {isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )}
      <button className={styles.card_close} onClick={() => props.onClose(props.id)}>X</button>
      <div className={styles.card_info}>
      <Link to={`/detail/${props.id}`} >
        <h3>{name}</h3>
      </Link>
        <p>{species}</p>
        <p>{gender}</p>
      <img src={image} alt={name} />
      </div>
      </div>
    </div>
    );
}

export function mapDispatchToProps(dispatch){
  return {
     addFavorite: function(fav){
        dispatch(addFavorite(fav))
     },

     deleteFavorite: function(id){
        dispatch(deleteFavorite(id))
     }
  }
}

export function mapStateToProps (state){
  return {
     myFavorites: state.myFavorites
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Card);