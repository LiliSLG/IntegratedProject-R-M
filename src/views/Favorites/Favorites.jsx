import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import styles from './Favorites.module.css';
import Card from '../../components/Card/Card';
import { filterCards, orderCards } from '../../redux/actions';



function Favorites({ myFavorites }) {
    const dispatch = useDispatch(); //especie de closure
    const [aux, setAux] = React.useState(false);

    const handleOrder = (event) => {
        setAux(!aux);
        dispatch(orderCards(event.target.value))
    }
    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }
    //!en vez de hacrlo separado, llamo a handleclick    
    //     const handleClick = (e) => {
    //         const { name, value } = e.target
    //         switch (name) {
    //             case order:
    //                 return dispatch(orderCards(value))
    //             case filter:
    //                 return dispatch(filterCards(value))
    //             default:
    //                 break;
    //         }
    //     }

    return (
        <div >
            <div className={styles.menu}>
                <div>
                    <div className={styles.radioContainer}>
                        <div className={styles.radioTileGroup} onChange={handleOrder}>
                            <div className={styles.inputContainer}>
                                <input id="Ascendente" type="radio" name="orden" value="Ascendente" />
                                <div className={styles.radioTile}>
                                    <ion-icon name="arrow-up-outline"></ion-icon>
                                    {/* <ion-icon name="caret-up-circle-outline"></ion-icon> */}
                                    {/* <label for="Ascendente">Up</label> */}
                                </div>
                            </div>
                            <div className={styles.inputContainer}>
                                <input id="Descendente" type="radio" name="orden" value="Descendente" />
                                <div className={styles.radioTile}>
                                    <ion-icon name="arrow-down-outline"></ion-icon>
                                    {/* <ion-icon name="caret-down-circle-outline"></ion-icon> */}
                                    {/* <label for="Descendente">Down</label> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <select name="order" onChange={(e) => { dispatch(orderCards(e.target.value)) }}> */}
                    {/* <select name="order" onChange={handleOrder}>
                        <option value="Ascendente">Ascendente</option>
                        <option value="Descendente">Descendente</option>
                    </select> */}
                </div>
                <div>
                    <div className={styles.radioContainer}>
                        <div className={styles.radioTileGroup} onChange={handleFilter}>
                            <div className={styles.inputContainer}>
                                <input id="All" type="radio" name="filter" value="All" />
                                <div className={styles.radioTile}>
                                    <ion-icon name="male-female-outline"></ion-icon>
                                    {/* <label for="Ascendente">Up</label> */}
                                </div>
                            </div>
                            <div className={styles.inputContainer}>
                                <input id="Female" type="radio" name="filter" value="Female" />
                                <div className={styles.radioTile}>
                                    <ion-icon name="female-outline"></ion-icon>
                                    {/* <label for="Descendente">Down</label> */}
                                </div>
                            </div>
                            <div className={styles.inputContainer}>
                                <input id="Male" type="radio" name="filter" value="Male" />
                                <div className={styles.radioTile}>
                                    <ion-icon name="male-outline"></ion-icon>
                                    {/* <label for="Descendente">Down</label> */}
                                </div>
                            </div>
                            <div className={styles.inputContainer}>
                                <input id="Lessgender" type="radio" name="filter" value="Lessgender" />
                                <div className={styles.radioTile}>
                                    <ion-icon name="ellipse-outline"></ion-icon>
                                    {/* <label for="Descendente">Down</label> */}
                                </div>
                            </div>
                            <div className={styles.inputContainer}>
                                <input id="unknown" type="radio" name="filter" value="unknown" />
                                <div className={styles.radioTile}>
                                    <ion-icon name="close-outline"></ion-icon>
                                    {/* <ion-icon name="close-circle-outline"></ion-icon> */}
                                    {/* <label for="Descendente">Down</label> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <select name="filter" onChange={(e) => { dispatch(filterCards(e.target.value)) }}> */}
                    {/* <select name="filter" onChange={handleFilter}>
                        <option value="All">All</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">Unknown</option>
                    </select> */}
                </div>
            </div>
            <div className={styles.container}>
                {myFavorites?.map(({ id,
                    name,
                    status,
                    species,
                    gender,
                    origin,
                    image }) => (<Card
                        id={id}
                        name={name}
                        status={status}
                        species={species}
                        gender={gender}
                        origin={origin}
                        image={image} />))}
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)
