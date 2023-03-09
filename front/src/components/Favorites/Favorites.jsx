import { connect, useDispatch } from "react-redux"
import { filterCards, orderCards, /* getFavorite */ deleteFavorite } from "../../redux/actions/actions";
import  Card  from "../Card/Card"
import styles from "./Favorites.module.css"

export function Favorites ({ myFavorites }){

    const dispatch = useDispatch();

    //dispatch(getFavorite());

    const handleDispatch = (e) => {

        const { name, value } = e.target;

        if(name === 'order'){
            return dispatch(orderCards(value))
        }
        if(name === 'filter'){
            return dispatch(filterCards(value))
        }
    }

    function handleClose(id) {
        dispatch(deleteFavorite(id));
      }
      
    
    return(
            <div>
                <div className={styles.container_cards}>
                    <select className={styles.select_botton} name='order' onClick={handleDispatch}>
                        <option value="Ascendente">Ascendente</option>
                        <option value="Descendente">Descendente</option>
                    </select>

                    <select className={styles.select_botton} name='filter' onClick={handleDispatch}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">unknown</option>
                    </select>
                </div>

            {myFavorites?.map(fav => (
                <Card
                name={fav.name}
                id={fav.id}
                key={fav.id}
                gender={fav.gender}
                image={fav.image}
                species={fav.species}
                status={fav.status}
                origin={fav.origin}
                onClose={() => handleClose(fav.id)}
                />
            ))}
        </div>
    )
}


export function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)