import React from 'react';
import { useSelector } from "react-redux";
import styles from './Cards.module.css';
import Card from '../Card/Card.jsx';

export default function Cards() {   
   // const { characters } = props;
   const characters = useSelector((state) => state.allCharacters);
   
   return (
      <div className={styles.container}>
         {characters?.map((eachCard) => {
            return (
               <Card
               key={eachCard.id}
               id={eachCard.id}
               name={eachCard.name}
               status={eachCard.status}
               species={eachCard.species}
               gender={eachCard.gender}
               origin={eachCard.origin?.name}
               image={eachCard.image}
               // onClose={() => props.onClose(eachCard.id)}               
               />)
         })}
      </div>)
}