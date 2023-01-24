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
import Unqfy1 from "../assets/img/projects/Unqfy1.png"
import Unqfy2 from "../assets/img/projects/Unqfy2.png"
import Ubermen from "../assets/img/projects/Ubermen.png"

const projects = [
    {
      id: 1,
      image1: Pokedex1,
      image2: Pokedex2,
      link1: "https://pokedex-web-self.vercel.app",
      link2: "https://github.com/fabriciomarote/Pokedex",
      title: "Pokedex",
      techs: ["Javascript","HTML", "CSS", "React", "Bootstrap"],
      text: "Es un proyecto realizado de la pagina codealo.dev y se consumen datos de una api externa para poder realizarlo.",
      type: "Frontend",
    },
    {
      id: 2,
      image1: Calculadora1,
      image2: Calculadora2,
      link1: "https://calculadora-eight-beta.vercel.app",
      link2: "https://github.com/fabriciomarote/calculadora",
      title: "Calculadora",
      techs: ["Javascript", "HTML", "CSS"],
      text: "Calculadora basica.",
      type: "Frontend",
    },
    {
      id: 3,
      image1: PPTLS1,
      image2: PPTLS2,
      link1: "https://piedra-papel-tijera-largarto-spock.vercel.app",
      link2: "https://github.com/fabriciomarote/Piedra-papel-tijera-largarto-spock",
      title: "Piedra, Papel, Tijera, Lagarto y Spock",
      techs: ["HTML", "CSS", "React", "Bootstrap"],
      text: "Es un juego que realicé en el marco de un proyecto en la Universidad. ",
      type: "Frontend",
    },
    {
      id: 4,
      image1: Rotten1,
      image2: Rotten2,
      link1: "",
      link2: "",
      title: "Rotten Tomatoes",
      techs: ["Kotlin", "Javalin", "HTML", "CSS", "React.js", "Bootstrap"],
      text: "Es una pagina web donde hay que loguearse para poder criticar y se visualiza información sobre peliculas. Fue desarrollado en el marco de un proyecto en la Universidad.",
      type: "Fullstack",
    },
    {
      id: 5,
      image1: Turnero1,
      image2: Turnero2,
      link1: "",
      link2: "https://github.com/fabriciomarote/Turnero",
      title: "Turnero",
      techs: ["Kotlin", "Spring Boot", "MySQL", "HTML", "CSS", "React.js", "Bootstrap"],
      text: "Es una web con sistemas de turnos medicos, donde además tiene un login, registro y edición de perfil. Fue desarrollado en el marco de un proyecto en la Universidad.",
      type: "Fullstack",
    },
    {
      id: 6,
      image1: Ubermen,
      image2: Ubermen,
      link1: "",
      link2: "https://github.com/fabriciomarote/Ubermen",
      title: "Ubermen",
      techs: ["Kotlin", "Spring Boot", "Hibernate", "MySQL", "Neo4j", "MongoDB", "HTML", "CSS", "React.js", "Bootstrap"],
      text: "Es Api que simula a la aplicacion Uber, donde se puede agregar, modificar y eliminar, distintos tipos de personajes y escenarios utilizando varias bases de datos",
      type: "Backend",
    },
    {
      id: 7,
      image1: Unqfy1,
      image2: Unqfy2,
      link1: "",
      link2: "https://github.com/fabriciomarote/UNQfy",
      title: "Unqfy",
      techs: ["Javascript", "Express", "Node.js"],
      text: "Es una API donde se puede agregar y borrar artistas, albumes y canciones, además agregar playlist y reproducir las canciones.",
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