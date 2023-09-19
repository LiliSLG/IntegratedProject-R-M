import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import FavReducer from './reducer';
//! me daba error: Expected the reducer to be a function. importe thunk y applimiddleware

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS 
// esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS )

const store = createStore(
    FavReducer,
    composeEnhancer(applyMiddleware(thunk)) // esta línea es para poder hacer peticiones a un server
);


export default store;