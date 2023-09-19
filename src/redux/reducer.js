import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";
// import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

// export default (state = initialState, action) => {
const FavReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV: {
      return {
        ...state,
        allCharacters: payload,
        myFavorites: payload,
      };
    }
    case REMOVE_FAV: {
      return {
        ...state,
        allCharacters: payload,
        myFavorites: payload,
      };
    }
    case FILTER: {
      // let favoriteFiltered = action.payload === "All" ? state.allFavorites : state.allFavorites.filter(char => char.gender === action.payload)
      let filterByGender = [];
      if (payload !== "All") {
        filterByGender = [...state.allCharacters].filter(
          (character) => character.gender === payload
        ); //El filtro se hace sobre todos los favoritos, no es filtro de filtro
      } else {
        filterByGender = state.allCharacters;
      }
      return {
        ...state,
        myFavorites: filterByGender,
      };
    }
    case ORDER: {
      const ordered = [...state.allCharacters].sort((a, b) => {
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
    default:
      return { ...state };
  }
};

export default FavReducer;
