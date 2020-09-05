import notFound from "../../assets/img.png";
import img1 from "../../assets/images/films_images/Star_Wars_Style_A_poster_1977.jpg";
import img2 from "../../assets/images/films_images/Empire_strikes_back_old.jpg";
import img3 from "../../assets/images/films_images/ReturnOfTheJediPoster1983.jpg";
import img4 from "../../assets/images/films_images/EPI_TPM_poster.png";
import img5 from "../../assets/images/films_images/Attack-Clones-Poster.jpg";
import img6 from "../../assets/images/films_images/EPIII_RotS_poster.png";

// A pretty ugly hardcoded image seeker
export default function filmsReferences(url) {
  switch (url) {
    case "https://swapi.dev/api/films/1/":
      return { id: 1, img: img1, name: "A New Hope" };

    case "https://swapi.dev/api/films/2/":
      return { id: 2, img: img2, name: "The Empire Strikes Back" };

    case "https://swapi.dev/api/films/3/":
      return { id: 3, img: img3, name: "Return of the Jedi" };

    case "https://swapi.dev/api/films/4/":
      return { id: 4, img: img4, name: "The Phantom Menace" };

    case "https://swapi.dev/api/films/5/":
      return { id: 5, img: img5, name: "Attack of the Clones" };

    case "https://swapi.dev/api/films/6/":
      return { id: 6, img: img6, name: "Revenge of the Sith" };

    default:
      return notFound;
  }
}
