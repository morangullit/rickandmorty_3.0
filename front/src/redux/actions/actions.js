import axios from 'axios';
import { DELETE_FAVORITE, ADD_FAVORITE, FILTER, ORDER, GET_FAVORITE } from "./types.js";


/* export function addFavorite(fav){
    return {
        type: ADD_FAVORITE,
        payload: fav
    }
} */
/* export function getFavorite() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/rickandmorty/fav")
      .then((response) => response.data)
      .then((data) => dispatch({ type: ALL_FAVORITE, payload: data }));
  };
} */

export const getFavorites = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/rickandmorty/fav');
      const data = await response.json();
      dispatch({
        type: GET_FAVORITE,
        payload: data
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export function addFavorite(props) {
  return function (dispatch) {
    axios
     
      .post("http://localhost:3001/rickandmorty/fav", {id: props.id , gender: props.gender, image: props.image, name: props.name, species: props.species})
      .then((response) => response.data)
      .then((data) => dispatch({ type: ADD_FAVORITE, payload: data }));
  };
}

export function deleteFavorite(id) {
  return function (dispatch) {
    axios
      .delete("http://localhost:3001/rickandmorty/fav/" + id)
      .then((response) => {
        console.log(response); // Agregado para verificar la respuesta del backend
        return response.data;
      })
      .then((data) => dispatch({ type: DELETE_FAVORITE, payload: id }));
  };
}


export function filterCards(status) {
    return {
      type: FILTER,
      payload: status
    }
  }
  
export function orderCards(id) {
    return {
      type: ORDER,
      payload: id
    }
  }