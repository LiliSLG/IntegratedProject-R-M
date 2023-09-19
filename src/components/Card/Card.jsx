import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './Card.module.css';
import { addFavorite, removeFavorite } from '../../redux/actions';

// export default function Card(props) {
function Card(props) {
   const { id, name, status, species, gender, origin, image, onClose,
      removeFavorite, addFavorite, myFavorites } = props;
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFavorite(id)
      } else {
         setIsFav(true);
         addFavorite({ id, name, status, species, gender, origin, image, onClose })
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.card}>
         <div className={styles.buttonContainer}>
            {isFav ?
               (<button id='favicon' 
                  className={styles.favicon}
                  onClick={handleFavorite}>❤️</button>)
               : (<button id='favicon' 
                  className={styles.favicon}
                  onClick={handleFavorite}>🤍</button>)
            }
            {isFav ? null : (<button 
                              id='buttonClose' 
                              className={styles.buttonClose}
                              onClick={onClose}>X</button>)}
         </div>
         <Link to={`/details/${id}`} className={styles.link}>
            <div className={(status === "Alive") ? styles.imageContainerLive : styles.imageContainerDead}>
               <img className={styles.cardImage} src={image} alt={name} />
            </div>
            <div className={styles.wrapperText}>
               <div >
                  <p className={styles.name}>{name}</p>
               </div>
               <div className={styles.details}>

                  <div className={(status === "Alive") ? styles.textLive : ((status === "Dead") ? styles.textDead : styles.textUnknownDead)}>
                     <p><b> # </b> <br></br> {id} </p>
                  </div>
                  <p><b>Estado</b> <br></br>{status}</p>
                  <p><b>Especie</b> <br></br>{species}</p>
                  {/* <b>Género: </b> {gender} <br></br>
                     <b>Origen:</b> {origin}</p> */}
               </div>
            </div>
         </Link>
      </div >

   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => { dispatch(addFavorite(character)) },
      removeFavorite: (id) => { dispatch(removeFavorite(id)) }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
