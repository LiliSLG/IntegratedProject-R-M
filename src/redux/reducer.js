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
} from "./action-types";

const initialState = {
  idUser: 0,
  access: false,
  myFavorites: [],
  allCharacters: [],
  myFavoritesFilterAux: [], //Uso este arreglo para el filtrado de favoritos
};

const FavReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_CHARACTERS:
      return {
        ...state,
        allCharacters: [...state.allCharacters, payload],
      };
    case GET_FAVS: {
      return {
        ...state,
        allCharacters: payload, // [...payload]
        myFavorites: payload,
      };
    }
    case ADD_FAV: {
      // para evitar el trafico en la red: C 11a 54' agrego solo el characrter
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };
      // return {
      //   ...state,
      //   allCharacters: payload,
      //   myFavorites: payload,
      // };
    }
    case REMOVE_FAV: {
      // para evitar el trafico en la red: C 11a 54'
      const filtered = state.myFavorites.filter(
        (character) => character.id !== +payload
      );
      return {
        ...state,
        myFavorites: [...filtered],
      };
    }
    // return {
    //   ...state,
    //   allCharacters: payload,
    //   myFavorites: payload,
    // };

    case FILTER: {
      if (!state.myFavoritesFilterAux.length) {
        //la primera vez que uso el filtro
        state.myFavoritesFilterAux = [...state.myFavorites]; //hago una copia de favoritos
      }
      let filterByGender = [];
      //El filtro se hace sobre todos los favoritos, no es filtro de filtro
      if (payload !== "All") {
        filterByGender = [...state.myFavoritesFilterAux].filter(
          (character) => character.gender === payload
        );
      } else {
        //reseteo los filtros
        filterByGender = [...state.myFavoritesFilterAux];
        state.myFavoritesFilterAux = [];
      }
      return {
        ...state,
        myFavorites: filterByGender,
      };
    }
    case ORDER: {
      const ordered = [...state.myFavorites].sort((a, b) => {
        if (a.id > b.id) {
          return payload === "Ascendente" ? 1 : -1;
        } else if (a.id < b.id) {
          return payload === "Descendente" ? 1 : -1;
        } else return 0;
      });
      //!otra opcion
      // if (payload === 'Ascendente') {
      //     return a.id > b.id ? 1 : -1
      // } else {
      //     return a.id < b.id ? 1 : -1
      // }
      return {
        ...state,
        myFavorites: ordered,
      };
    }
    case LOGIN: {
      return {
        ...state,
        idUser: payload,
        access: true,
      };
    }
    case LOGOUT: {
      return {
        //state = initialState
        idUser: 0,
        access: false,
        myFavorites: [],
        allCharacters: [],
      };
    }
    case CLOSE_CARD: {
      const filtered = state.allCharacters.filter(
        (character) => character.id !== +payload
      );
      return {
        ...state,
        allCharacters: [...filtered],
      };
    }
    default:
      return { ...state };
  }
};

export default FavReducer;

//MODIFICADO CUANDO AGREGUE EL SERVER express

// import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

// const initialState = {
//   myFavorites: [],
//   allCharacters: [],
// };

// // export default (state = initialState, action) => {
// const FavReducer = (state = initialState, { type, payload }) => {
//   switch (type) {

//     case ADD_FAV: {
//         return {
//             ...state,
//             allCharacters:
//                 [...state.allCharacters,
//                     payload],
//             myFavorites:
//                 [...state.allCharacters,
//                     payload]
//         }
//     }

//     case REMOVE_FAV: {
//       const filtered = state.myFavorites.filter(
//         (character) => character.id !== +payload
//       );
//       return {
//         ...state,
//         myFavorites: filtered,
//         allCharacters: filtered,
//       };
//     }
//     case FILTER: {
//       // let favoriteFiltered = action.payload === "All" ? state.allFavorites : state.allFavorites.filter(char => char.gender === action.payload)
//       let filterByGender = [];
//       if (payload !== "All") {
//         filterByGender = [...state.allCharacters].filter(
//           (character) => character.gender === payload
//         ); //El filtro se hace sobre todos los favoritos, no es filtro de filtro
//       } else {
//         filterByGender = state.allCharacters;
//       }
//       return {
//         ...state,
//         myFavorites: filterByGender,
//       };
//     }
//     case ORDER: {
//       const ordered = [...state.allCharacters].sort((a, b) => {
//         if (a.id > b.id) {
//           return payload === "Ascendente" ? 1 : -1;
//         } else if (a.id < b.id) {
//           return payload === "Descendente" ? 1 : -1;
//         } else return 0;
//       });
//       //!otra opcion
//       // if (payload === 'Ascendente') {
//       //     return a.id > b.id ? 1 : -1
//       // } else {
//       //     return a.id < b.id ? 1 : -1
//       // }
//       return {
//         ...state,
//         myFavorites: ordered,
//       };
//     }
//     default:
//       return { ...state };
//   }
// };

// export default FavReducer;
