import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Details.module.css";

// const URL = `http://localhost:3001/rickandmorty/character/${id}`
// const URL = `https://rickandmortyapi.com/api/character/${+DetailId}`

export default function Details() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${detailId}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
          setLoading(false);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [detailId]);

  const backToHome = () => {
    navigate("/home");
  };

  return loading ? (
    <h1 className={styles.name}>Loading...</h1>
  ) : (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button onClick={backToHome}>X</button>
      </div>

      <div className={styles.detailCard}>
        <h1 className={styles.name}> {character.name} </h1>
        <p>
          <b>Estado:</b> {character.status} <br></br>
          <b>Especie:</b> {character.species} <br></br>
          <b>Género: </b> {character.gender} <br></br>
          <b>Origen:</b> {character.origin?.name}
        </p>
      </div>
      <div>
        <img src={character.image} alt={character.name} />
      </div>

      {/* <div className={styles.detailCard}>
        <h1 className={styles.name}> {ca[0].name} </h1>
        <p><b>Estado:</b> {ca[0].status} <br></br>
          <b>Especie:</b> {ca[0].species} <br></br>
          <b>Género: </b> {ca[0].gender} <br></br>
          <b>Origen:</b> {ca[0].origin?.name}</p>
      </div>
      <div>
        <img src={ca[0].image} alt={ca[0].name} />
      </div> */}
    </div>
  );
}
// image
