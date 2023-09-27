import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";
import { searchCharacters } from "../../redux/actions";

export default function SearchBar() {
  const characters = useSelector((state) => state.allCharacters); // los traigo para buscar repetidos
  const [character, setCharacter] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    // const {value} = event.target;
    setCharacter(event.target.value);
  };

  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      handleSearch(character);
    }
  };

  async function handleSearch(id, random = false) {
    try {
      navigate("/home");
      if (random) id = Math.floor(Math.random() * 826);

      if (isNaN(id) || id === "") {
        window.alert("¡Ingrese un ID válido!");
        } else if (characters.filter((char) => char.id === +id).length > 0) {
          window.alert("¡Ya existe un personaje con este ID!");
      } else {
        dispatch(searchCharacters(id));
      }
      setCharacter("");
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.imput}
        id="id-input"
        type="search"
        placeholder="Escriba un ID"
        onChange={handleInputChange}
        onKeyUp={handleEnter}
        value={character}
      />
      <div>
        <button
          className={styles.buttonAgregar}
          onClick={() => handleSearch(character)}
          // onClick={() => props.onSearch(character)}
        >
          Search
        </button>
      </div>
      <div>
        <button
          className={styles.buttonAgregar}
          onClick={() => handleSearch(character, true)}
          // onClick={() => props.onSearch(character, true)}
        >
          Random
        </button>
      </div>
    </div>
  );
}
