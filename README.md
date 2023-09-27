# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# IntegratedProject-R-M

<br />

---

### **👀 ¡COMPROBEMOS NUESTRO TRABAJO!**

Ahora comprobaremos que todo funciona correctamente. Para esto:

1. Abre dos terminales. En una deberás levantar tu proyecto del lado Front-End, y en la otra levantar tu proyecto en el lado Back-End.

2. Una vez que todo esté arriba, intenta utilizar tu aplicación. Trae personajes e ingresa a sus detalles para chequear que no haya ningún error.

> [**NOTA**]: solo podrás buscar a los personajes con id **1**, **2**, **3**, **4** y **5**, ya que estos son los que tienes guardados en tu archivo **`data.js`**.

</br >

<img src="./img/example.gif" alt="" />

npm install axios
npm i express

VARIABLES DE ENTORNO:
para usar .env
   - crear el archivo .env
      PASSWORD='password'
   - instalar dotenv: npm i dotenv
   - en el archivo donde se va a usar:
      Ej en users.js:
      require("dotenv").config();
      const { PASSWORD } = process.env;
      module.exports = [{ email: "ejemplo@gmail.com", password: PASSWORD }];

      TESTING
      Instala las siguientes dependencias en el package.json de tu servidor:

jest
supertest

npm install --save-dev jest supertest (para que se instale como dependencia)
si quiero desinstalar: npm uninstall jest supertest
Además, dentro del package.json deberás agregar el siguiente script:

   "test": "jest --detectOpenHandles --coverage"




PARA AUTENTIFICACION: JWT BCRYPT PASSPORT JS AUTH0


Para este error:
warning: in the working copy of 'Server/package-lock.json', LF will be replaced by CRLF the next time Git touches it
ejecuto:
   git config --global core.autocrlf false

    it("Si no encuentra un personaje para borrar, debe devolver todos los personajes", async () => {