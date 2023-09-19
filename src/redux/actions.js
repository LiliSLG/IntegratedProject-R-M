import axios from "axios";
import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";

export const addFavorite = (char) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const data = { character: char }; // para poder hacer el destructuring en el server
      const response = await axios.post(endpoint, data); //lo que cargo en el payload
      return dispatch({
        type: ADD_FAV,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };
};

export const removeFavorite = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};

// //MODIFICADO CUANDO AGREGUE async await
// export const addFavorite = (char) => {
//   const endpoint = 'http://localhost:3001/rickandmorty/fav';
//   return (dispatch) => {
//       const data  = { character: char } // para poder hacer el destructuring en el server
//      axios.post(endpoint, data).then(({ data }) => {
//         return dispatch({
//            type: ADD_FAV,
//            payload: data,
//         });
//      });
//   };
// };
// export const removeFavorite = (id) => {
//   const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
//   return (dispatch) => {
//     axios.delete(endpoint).then(({ data }) => {
//       return dispatch({
//         type: REMOVE_FAV,
//         payload: data,
//       });
//     });
//   };
// };

// //MODIFICADO CUANDO AGREGUE EL SERVER express

// export const ADD_FAV = 'ADD_FAV';
// export const REMOVE_FAV = 'REMOVE_FAV';
// export const FILTER = 'FILTER';
// export const ORDER = 'ORDER';

// export const addFavorite = (character) => {
//   return {
//       type: ADD_FAV,
//       payload: character
//   }
// }

// export const removeFavorite = (id) => {
//   return {
//       type: REMOVE_FAV,
//       payload: id
//   }
// }

// export const filterCards = (gender) => {
//   return {
//       type: FILTER,
//       payload: gender
//   }
// }

// export const orderCards = (orden) => {
//   return {
//       type: ORDER,
//       payload: orden
//   }
// }
