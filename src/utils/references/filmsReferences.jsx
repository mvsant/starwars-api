import {img1, img2, img3, img4, img5, img6,notFound} from "../helpers/imports/filmsImports";

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