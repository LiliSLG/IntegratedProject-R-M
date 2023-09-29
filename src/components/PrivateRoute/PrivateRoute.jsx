import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Component }) => {
  const isLoggedIn = useSelector((state) => state.access);
  return isLoggedIn ? <Component /> : <Navigate to="/" />; //lo lleva al login si no es ruta valida
};

export default PrivateRoute;
