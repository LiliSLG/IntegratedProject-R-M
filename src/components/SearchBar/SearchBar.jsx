import React from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [character, setCharacter] = React.useState("");
  const handleInputChange = (event) => {
    // const {value} = event.target;
    setCharacter(event.target.value);
  };

  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      props.onSearch(character);
      setCharacter("");
    }
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.imput}
        id="id-input"
        type="search"
        placeholder="Escriba un ID"
        onChange={handleInputChange}
        onKeyUp={handleEnter}
      />
      <div>
        <button
          className={styles.buttonAgregar}
          onClick={() => props.onSearch(character)}
        >
          Search
        </button>
      </div>
      <div>
        <button
          className={styles.buttonAgregar}
          onClick={() => props.onSearch(character, true)}
        >
          Random
        </button>
      </div>
    </div>
  );
}
