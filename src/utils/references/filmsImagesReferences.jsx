import notFound from "../../assets/img.png";
import img1 from "../../assets/images/films_images/Star_Wars_Style_A_poster_1977.jpg";
import img2 from "../../assets/images/films_images/Empire_strikes_back_old.jpg";
import img3 from "../../assets/images/films_images/ReturnOfTheJediPoster1983.jpg";
import img4 from "../../assets/images/films_images/EPI_TPM_poster.png";
import img5 from "../../assets/images/films_images/Attack-Clones-Poster.jpg";
import img6 from "../../assets/images/films_images/EPIII_RotS_poster.png";

// A pretty ugly hardcoded image seeker
export default function filmsImagesReferences(url) {
  switch (url) {
    case "https://swapi.dev/api/films/1/":
      return img1;

    case "https://swapi.dev/api/films/2/":
      return img2;

    case "https://swapi.dev/api/films/3/":
      return img3;

    case "https://swapi.dev/api/films/4/":
      return img4;

    case "https://swapi.dev/api/films/5/":
      return img5;

    case "https://swapi.dev/api/films/6/":
      return img6;

    default:
      return notFound;
  }
}
