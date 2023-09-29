import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./About.module.css";

export default function About() {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/home");
  };
  return (
    /* girar carta */
    // <div class={styleAbout.carta_box}>
    //   <div class={styleAbout.carta}>
    //     <div class={styleAbout.cara}>
    //       <img src="http://wiki.vykar.com/skins/common/images/2000px-Playing_card_spade_A_svg.png" width="200" height="250px" />
    //     </div>
    //     <div class={styleAbout.cara_detras}>
    //       <img src="http://chetart.com/blog/wp-content/uploads/2012/05/playing-card-back.jpg" width="200" height="250px" />
    //     </div>
    //   </div>
    // </div>
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button onClick={backToHome}>X</button>
      </div>
      <div>
        <h2>Acerca de esta aplicacion</h2>
        <h4>En construccion</h4>
        {/* <img src="https://wallpaperaccess.com/full/831749.png" alt="" resizeMode="cover"/> */}
      </div>
    </div>
  );
}

/* background-image:url("https://preview.redd.it/jfvf3w5rr3dz.png?width=960&crop=smart&auto=webp&s=3710d0cab3f7d317a9372278f0c1554213515d02") ; */
/* background-image:url("https://www.pixelstalk.net/wp-content/uploads/images6/Abstract-Rick-And-Morty-Wallpaper-4K.jpg") ;    */
/* background-image:url("https://wallpaperaccess.com/full/831749.png") ; */
/* background-image:url("https://www.xtrafondos.com/descargar.php?id=6534&resolucion=6000x3000") ; */
