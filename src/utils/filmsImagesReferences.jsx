import notFound from '../assets/img.png'


// A pretty ugly hardcoded image seeker
export default function filmsImagesReferences(url) {
  switch (url) {
    case 'https://swapi.dev/api/films/1/':
      return 'https://vignette.wikia.nocookie.net/starwars/images/0/06/Star_Wars_Style_A_poster_1977.jpg'

    case 'https://swapi.dev/api/films/2/':
      return 'https://vignette.wikia.nocookie.net/starwars/images/e/e4/Empire_strikes_back_old.jpg'

    case 'https://swapi.dev/api/films/3/':
      return 'https://vignette.wikia.nocookie.net/starwars/images/b/b2/ReturnOfTheJediPoster1983.jpg'

    case 'https://swapi.dev/api/films/4/':
      return 'https://vignette.wikia.nocookie.net/starwars/images/7/75/EPI_TPM_poster.png'

    case 'https://swapi.dev/api/films/5/':
      return 'https://vignette.wikia.nocookie.net/starwars/images/d/dd/Attack-Clones-Poster.jpg'

    case 'https://swapi.dev/api/films/6/':
      return 'https://vignette.wikia.nocookie.net/starwars/images/e/e7/EPIII_RotS_poster.png'

    default:
      return notFound
  }
}