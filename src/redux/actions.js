import axios from "axios";
import {
  SEARCH_CHARACTERS,
  ADD_FAV,
  FILTER,
  ORDER,
  REMOVE_FAV,
  GET_FAVS,
  CLOSE_CARD,
  LOGIN,
  LOGOUT,
  ERROR,
} from "./action-types";

export const searchCharacters = (id) => async (dispatch) => {
  try {
    const URL_API = "rickandmorty/character";
    // const { data } = await axios.get("rickandmorty/character/" + id);
    const response = await axios.get(`${URL_API}/${id}`);
    const data = response.data;
    if (data.name) {
      data.id = parseInt(data.id);
      await dispatch({
        type: SEARCH_CHARACTERS,
        payload: data,
      });
    }
  } catch (error) {
    window.alert(`¡No hay personajes con el ID ${id}`);
  }
};

export const addFavorite = (char, idUser) => {
  const endpoint = `rickandmorty/fav?idUser=${idUser}`; //paso por query el id del personaje
  return async (dispatch) => {
    try {
      const data = { character: char }; // para poder hacer el destructuring en el server
      const response = await axios.post(endpoint, data); //lo que cargo en el payload
      return dispatch({
        type: ADD_FAV,
        payload: response.data,
      });
    } catch (error) {
      // return dispatch({ type: ERROR, payload: error.message });
      window.alert(error.message);
    }
  };
};

export const removeFavorite = (id, idUser) => {
  const endpoint = `rickandmorty/fav/${id}?idUser=${idUser}`; //paso por query el ide del personaje

  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      // return dispatch({ type: ERROR, payload: error.message });
      window.alert(error.message);
    }
  };
};

export const getFavorites = (idUser) => {
  const endpoint = `rickandmorty/fav?idUser=${idUser}`; //paso por query el ide del personaje

  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: GET_FAVS,
        payload: data,
      });
    } catch (error) {
      // return dispatch({ type: ERROR, payload: error.message });
      window.alert(error.message);
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

export const closeCard = (id) => {
  return { type: CLOSE_CARD, payload: id };
};

//**********************************************************************/

export const loginUser = (user) => {
  const { email, password } = user;
  const endpoint = `rickandmorty/login/?email=${email}&password=${password}`;
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      const { access, id } = data;
      if (access) {
        return dispatch({
          type: LOGIN,
          payload: id,
        });
      }
      if (!data) window.alert(`Error: No hay datos `);
      // const res = await axios(endpoint);
      // return res.status === 200
      //   ?  dispatch({ type: LOGIN, payload: res.data.access })
      //   :  dispatch({ type: ERROR, payload: res.data.message });
    } catch (error) {
      window.alert(error.message);
      // return dispatch({ type: ERROR, payload: error.message });
    }
  };
};

export const registerUser = (user) => {
  const { fullName, email, password } = user;
  const endpoint = `rickandmorty/register/?fullName=${fullName}&email=${email}&password=${password}`;
  return async (dispatch) => {
    try {
      const data = {
        newUser: { fullName: fullName, email: email, password: password },
      }; // para poder hacer el destructuring en el server
      const response = await axios.post(endpoint, data); //lo que cargo en el payload

      const res = await axios.post(endpoint, data);
      const { access, id } = res.data;
      if (res.status === 200) {
        return dispatch({
          //logueo al user
          type: LOGIN,
          payload: true,
        });
      }
    } catch (error) {
      window.alert(error.message);
      // return dispatch({ type: ERROR, payload: error.message });
    }
  };
};

export const logoutUser = () => {
  return { type: LOGOUT };
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
