
import peopleImagesReferences from "./peopleImagesReferences";
import filmsImagesReferences from "./filmsImagesReferences";
import planetsImagesReferences from "./planetsImagesReferences";
import starshipsImagesReferences from "./starshipsImagesReferences";
import vehiclesImagesReferences from "./vehiclesImagesReferences";
import speciesImagesReferences from './speciesImagesReferences'

// A pretty ugly hardcoded image seeker
export function imagesReferences(url) {
  url = url.replace('http:', 'https:')
  if (url.match(/people/g)) {
    return peopleImagesReferences(url)
  }
  else if (url.match(/films/g)) {
    return filmsImagesReferences(url)
  }
  else if (url.match(/planets/g)) {
    return planetsImagesReferences(url)
  }
  else if (url.match(/vehicles/g)) {
    return vehiclesImagesReferences(url)
  }
  else if (url.match(/starships/g)) {
    return starshipsImagesReferences(url)
  }
  else if (url.match(/species/g)) {
    return speciesImagesReferences(url)
  }
  else {
    return "erro"
  }
}
