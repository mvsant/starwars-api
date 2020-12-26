import notFound from "../../assets/img.png";
import img1 from "../../assets/images/films_images/Star_Wars_Style_A_poster_1977.jpg";
import img2 from "../../assets/images/films_images/Empire_strikes_back_old.jpg";
import img3 from "../../assets/images/films_images/ReturnOfTheJediPoster1983.jpg";
import img4 from "../../assets/images/films_images/EPI_TPM_poster.png";
import img5 from "../../assets/images/films_images/Attack-Clones-Poster.jpg";
import img6 from "../../assets/images/films_images/EPIII_RotS_poster.png";

// At this point, it is one switch refactored !!!
export default function getFilms(url){
  const response = {
    "https://swapi.dev/api/films/1/":{ id: 1, img: img1, name: "A New Hope" },
    "https://swapi.dev/api/films/2/":{ id: 2, img: img2, name: "The Empire Strikes Back" },
    "https://swapi.dev/api/films/3/":{ id: 3, img: img3, name: "Return of the Jedi" },
    "https://swapi.dev/api/films/4/":{ id: 4, img: img4, name: "The Phantom Menace" },
    "https://swapi.dev/api/films/5/":{ id: 5, img: img5, name: "Attack of the Clones" },
    "https://swapi.dev/api/films/6/":{ id: 6, img: img6, name: "Revenge of the Sith" },
    "default": notFound,
  }
  return (response[url]||response["default"]);
}