import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./Card.module.css";
import { addFavorite, removeFavorite, closeCard } from "../../redux/actions";

function Card(props) {
  const {
    id,
    name,
    status,
    species,
    gender,
    origin,
    image,
    // onClose, //lo puse en actions
    removeFavorite, // viene x mapDispatchToProps
    addFavorite, // viene x mapDispatchToProps
    closeCard, // viene x mapDispatchToProps
    myFavorites, // viene x mapStateToProps
    idUser, // viene x mapStateToProps
  } = props;

  const [isFav, setIsFav] = useState(false);

  const onClose = () => {
    closeCard(id);
  };

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id, idUser);
    } else {
      setIsFav(true);
      addFavorite(
        { id, name, status, species, gender, origin, image },
        idUser
      );
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  return (
    <div className={styles.card}>
      <div className={styles.buttonContainer}>
        {isFav ? (
          <button
            id="favicon"
            className={styles.favicon}
            onClick={handleFavorite}
          >
            ❤️
          </button>
        ) : (
          <button
            id="favicon"
            className={styles.favicon}
            onClick={handleFavorite}
          >
            🤍
          </button>
        )}
        {isFav ? null : (
          <button
            id="buttonClose"
            className={styles.buttonClose}
            onClick={onClose}
          >
            X
          </button>
        )}
      </div>
      <Link to={`/details/${id}`} className={styles.link}>
        <div
          className={
            status === "Alive"
              ? styles.imageContainerLive
              : styles.imageContainerDead
          }
        >
          <img className={styles.cardImage} src={image} alt={name} />
        </div>
        <div className={styles.wrapperText}>
          <div>
            <p className={styles.name}>{name}</p>
          </div>
          <div className={styles.details}>
            <div
              className={
                status === "Alive"
                  ? styles.textLive
                  : status === "Dead"
                  ? styles.textDead
                  : styles.textUnknownDead
              }
            >
              <p>
                <b> # </b> <br></br> {id}{" "}
              </p>
            </div>
            <p>
              <b>Estado</b> <br></br>
              {status}
            </p>
            <p>
              <b>Especie</b> <br></br>
              {species}
            </p>
            {/* <b>Género: </b> {gender} <br></br>
                     <b>Origen:</b> {origin}</p> */}
          </div>
        </div>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
    idUser: state.idUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character, idUser) => {
      dispatch(addFavorite(character, idUser));
    },
    removeFavorite: (id, idUser) => {
      dispatch(removeFavorite(id, idUser));
    },
    closeCard: (id) => {
      dispatch(closeCard(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
