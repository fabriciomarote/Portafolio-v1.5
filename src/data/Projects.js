import Pokedex1 from "../assets/img/projects/pokedex1.png";
import Pokedex2 from "../assets/img/projects/pokedex2.png";
import PPTLS1 from "../assets/img/projects/PPTLS1.png";
import PPTLS2 from "../assets/img/projects/PPTLS2.jpg";
//import Horney from "../assets/img/projects/horney.png";
import Rotten1 from "../assets/img/projects/rotten1.png";
import Rotten2 from "../assets/img/projects/rotten2.png";
import Calculadora1 from "../assets/img/projects/calculadora1.png";
import Calculadora2 from "../assets/img/projects/calculadora2.jpg";
import Turnero1 from "../assets/img/projects/turnero1.png";
import Turnero2 from "../assets/img/projects/turnero2.png";
import Unqfy from "../assets/img/projects/Unqfy.png"
import Ubermen from "../assets/img/projects/Ubermen.png"

const projects = [
    {
      id: 1,
      image1: Pokedex1,
      image2: Pokedex2,
      link1: "https://pokedex-web-self.vercel.app",
      link2: "https://jowells-barber-shop.vercel.app",
      title: "Pokedex",
      text: "Es un proyecto realizado de la pagina codealo.dev. Se consumen datos de una api externa y se desarrolló con Javascript, HTML, CSS, React y Bootstrap.",
      type: "Frontend",
    },
    {
      id: 2,
      image1: Calculadora1,
      image2: Calculadora2,
      link1: "https://calculadora-eight-beta.vercel.app",
      link2: "https://github.com/fabriciomarote/calculadora",
      title: "Calculadora",
      text: "Calculadora basica realizada con Javascript y CSS.",
      type: "Frontend",
    },
    {
      id: 3,
      image1: PPTLS1,
      image2: PPTLS2,
      link1: "https://piedra-papel-tijera-largarto-spock.vercel.app",
      link2: "https://cupcake-landing-page.netlify.app",
      title: "Piedra, Papel, Tijera, Lagarto y Spock",
      text: "Es un juego que realicé en el marco de un proyecto en la Universidad. Se desarrolló con HTML, CSS, React y Bootstrap. ",
      type: "Frontend",
    },
    {
      id: 4,
      image1: Rotten1,
      image2: Rotten2,
      link1: "",
      link2: "",
      title: "Rotten Tomatoes",
      text: "Es una pagina web donde hay que loguearse para poder criticar y se visualiza información sobre peliculas. Fue desarrollado en el marco de un proyecto en la Universidad. La parte de Backend se hizo con Kotlin y Javalin, y la parte de Frontend con React, HTML, CSS y Bootstrap.",
      type: "Fullstack",
    },
    {
      id: 5,
      image1: Turnero1,
      image2: Turnero2,
      link1: "",
      link2: "",
      title: "Turnero",
      text: "Es una web con sistemas de turnos medicos, donde además tiene un login, registro y edición de perfil. Fue realizada con ReactJS, Kotlin, Spring Boot y SQL. Fue desarrollado en el marco de un proyecto en la Universidad.",
      type: "Fullstack",
    },
    {
      id: 6,
      image1: Ubermen,
      image2: Ubermen,
      link1: "",
      link2: "https://github.com/fabriciomarote/Ubermen",
      title: "Ubermen",
      text: "Se realiza una API Rest con su CRUD correspondiente. Se desarrolló con Kotlin y Spring Boot. Y se utilizaron bases de datos relacionales y no relaciones: MySQL, MongoDB, Y Neo4j.",
      type: "Backend",
    },
    {
      id: 7,
      image1: Unqfy,
      image2: Unqfy,
      link1: "",
      link2: "https://github.com/fabriciomarote/UNQfy",
      title: "Unqfy",
      text: "Es una API donde se puede agregar y borrar artistas, albumes y canciones, además agregar playlist y reproducir las canciones. Se desarrolló con Javascript, Node.js y Express.",
      type: "Backend",
    },
  ];
  
  export default projects;


  /* 
    {
      id: 4,
      image: "",
      //link1: "https://github.com/Bluefox182/ultimate-weather-app",
      //link2: "https://bluefox182-weather-app.vercel.app/",
      title: "Twitter",
      text: "Fue desarrollado en el marco de un proyecto de la facultad.",
      type: "FullStack",
    },
    {
      id: 3,
      image: Horney,
      link1: "https://horney-joyas.vercel.app",
      link2: "https://monteza-eventos.vercel.app/",
      title: "Horney Joyas",
      text: "Es una Website realizada con React, Javascrpit y CSS.",
    },
    {
      id: 4,
      image: "",
      //link1: "https://github.com/Bluefox182/ultimate-weather-app",
      //link2: "https://bluefox182-weather-app.vercel.app/",
      title: "Ubermen",
      text: "",
      type: "Backend",
    },
    {
      id: 4,
      image: "",
      //link1: "https://github.com/Bluefox182/ultimate-weather-app",
      //link2: "https://bluefox182-weather-app.vercel.app/",
      title: "Unqfy",
      text: "",
      type: "Backend",
    },
    {
      id: 4,
      image: "",
      //link1: "https://github.com/Bluefox182/ultimate-weather-app",
      //link2: "https://bluefox182-weather-app.vercel.app/",
      title: "",
      text: "",
      type: "",
    },
  */