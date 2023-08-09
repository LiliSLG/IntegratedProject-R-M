import React from 'react';
import { validate } from '../../validation.js'
import styles from './Form.module.css';

export default function Contact(props) {
  const [userData, setUserData] = React.useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = React.useState({
    email: '',
    password: ''
  });

  //mostrar password
  const [shownPwd, setShownPwd] = React.useState(false);
  const switchShownPwd = () => setShownPwd(!shownPwd);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value })
    setErrors(validate({ ...userData, [name]: value }));
    // setErrors(validate({ ...inputs, [event.target.name]: event.target.value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length) {
      alert("Debe llenar todos los campos")
    } else {
      props.login(userData);
      setUserData({
        email: '',
        password: ''
      })
      setErrors(validate({
        email: '',
        password: ''
      }));
    }
  }

  const login = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value })
    setErrors(validate({ ...userData, [name]: value }));
    // setErrors(validate({ ...inputs, [event.target.name]: event.target.value }));
  }
  
  return (
    <div >
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
        <img src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png" alt="" />        
          {/* <img src="https://wallpaperaccess.com/full/831749.png" alt="" /> */}
        </div>
        <div>
          {/* <label htmlFor='email'>Correo Electrónico:</label><br /> */}
          <input class={styles.campo}
            name="email"
            value={userData.email}
            className={errors.email && styles.warning}
            placeholder="Email..."
            type="text"
            onChange={handleChange} />
          <p className={errors.email && styles.danger}>{errors.email}</p>
          {/* <label htmlFor='password'>Password:</label><br /> */}
          <div className={styles.campo}>
            <input name="password"
              value={userData.password}
              className={errors.password && styles.warning}
              placeholder="Password..."
              type={shownPwd ? 'text' : 'password'}
              onChange={handleChange} />
            <span onClick={switchShownPwd}>
              {shownPwd ?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgba(12, 39, 148, 0.712)"
                  height={"1.3rem"}>
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                </svg>
                : <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgba(12, 39, 148, 0.712)"
                  height={"1.3rem"}>
                  <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                  <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                  <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                </svg>}
            </span>
            {/* <span onClick={switchShown}>Mostrar</span> */}
            <div />
            <p className={errors.password && styles.danger}>{errors.password}</p>
          </div>
        </div>
        <div>
          <button type="submit"
            className={styles.buttonBack}>
            Enviar</button>
          {/* disabled={!this.errors.name === !this.errors.price} */}
        </div>
      </form>
    </div>
  )
}
