import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Details from "./views/Details/Details";
import NotFound_404 from "./views/NotFound_404/NotFound_404";
import Favorites from "./views/Favorites/Favorites.jsx";
import Login from "./views/Login/Login";
import Nav from "./components/Nav/Nav.jsx";
// import Cards from "./components/Cards/Cards.jsx";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const backToHome = () => {
    navigate("/home");
  };

  const URL = "http://localhost:3001/rickandmorty/character/";

//mover a actions
  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      // const  accesso  = data.access;
      // setAccess(data);
      setAccess(access);
      access && navigate("/home");
      if (!access)
        alert("Revise los datos ingresados, email o password incorrectos");
    } catch (error) {
      alert(error.message);
    }
  }

  function logOut() {
    access && setAccess(false);
    setCharacters([]);
    navigate("/");
    // window.location.reload();
  }

  // useEffect para validar el acceso al sistema ej:si el usuario ingresa manualmente /home, redirigira a la página de inicio ("locahost:3000" ó "/" que es donde esta el form del login)
  // con el useEffect no puedo abrir error404 VEEEER

      useEffect(() => {
        !access && navigate("/");
      }, [access, navigate]);

//mover a actions
  async function onSearch(id, random = false) {
    try {
      backToHome();
      if (random) id = Math.floor(Math.random() * 826);

      if (isNaN(id) || id === "") {
        window.alert("¡Ingrese un ID válido!");
      } else if (characters.filter((char) => char.id === +id).length > 0) {
        window.alert("¡Ya existe un personaje con este ID!");
      } else {
        const { data } = await axios.get(URL + id);
        data.name
          ? setCharacters((characters) => [...characters, data])
          : window.alert("¡No hay personajes con este ID!");
      }
      // !XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      const inputDOM = document.getElementById("id-input");
      inputDOM.value = "";
      // !NO DEBERIA MANIPULAR EL DOM
    } catch (error) {
      alert(error.message);
    }
  }

  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== id);
    setCharacters(filtered);
  };

  return (
    <div className="App">
      <div className="Presentacion">
        {/* <h1 className='Bienvenidos'> Rick and Morty</h1> */}
        <img
          className="LogoRickMorty"
          src="https://vectorlogo4u.com/wp-content/uploads/2020/11/Rick-and-Morty-Logo-Vector-01-1536x726.png"
          alt="No encuentro la imagen"
        />
      </div>
      {location.pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut} />}
      <Routes>
        <Route path="/" element={<Login login={login} />} />
        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:detailId" element={<Details />} />
        <Route path="*" element={<NotFound_404 />} />
        {/* <Route path=':error' element={<NotFound_404 />}/> */}
      </Routes>
    </div>
  );
}

export default App;

//login antes de async await
// function login(userData) {

//     const { email, password } = userData;
//     const URL = "http://localhost:3001/rickandmorty/login/";
//     axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
//       const { access } = data;
//       // const  accesso  = data.access;
//       // setAccess(data);
//       setAccess(access);
//       access && navigate("/home");
//       if (!access)
//         alert("Revise los datos ingresados, email o password incorrectos");
//     });
//   }

  // const URL = `https://rickandmortyapi.com/api/character/${id}`
  // const EMAIL = 'juanperez@hotmail.com';
  // const PASSWORD = 'cocoloco1';

  // const EMAIL = "ejemplo@gmail.com";
  // const PASSWORD = "1Password";

  //login antes de server
  // function login(userData) {
  //   if (userData.password === PASSWORD && userData.email === EMAIL) {
  //     setAccess(true);
  //     navigate("/home");
  //     return true;
  //   } else return false;
  //   // setAccess(true);
  //   // navigate('/home');
  // }

// const onSearch = (id, random = false) => {
//   fetch(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((res) => res.json())
//     .then((data) => {
//       setCharacters((characters) => [...characters, data]);
//     })
//     .catch(window.alert("¡No hay personajes con este ID!"));
//   //setCharacters(...characters, data]) ES LO MISMO
//   // .catch((error) => window.alert());//"¡No hay personajes con este ID!"
// }
// }

// Función para obtener todos los personajes
// const onSearch = (id) => {
//    if (isNaN(id)) {
//      alert("Por favor, ingresa un número válido como ID.");
//      return;
//    }

//    axios(`https://rickandmortyapi.com/api/character/${id}`)
//      .then(({ data }) => {
//        if (data.name) {
//          const characterExists = characters.some(
//            (character) => character.id === data.id
//          );

//          if (characterExists) {
//            alert("Este personaje ya se encuentra en la lista.");
//          } else {
//            setCharacters((characters) => [...characters, data]);
//          }
//        } else {
//          alert(`¡No hay personajes con el ID proporcionado!`);
//        }
//      })
//      .catch((error) => {
//        alert(
//          `Ocurrió un error al obtener los datos de la API. Por favor, intenta nuevamente más tarde.`
//        );
//        console.error(error);
//      });
//  };
