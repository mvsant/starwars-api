import peopleReferences from "./peopleReferences";
import filmsReferences from "./filmsReferences";
import starshipsReferences from "./starshipsReferences";
import planetsReferences from "./planetsReferences";
import vehiclesReferences from "./vehiclesReferences";
import speciesReferences from "./speciesReferences";

// A pretty ugly hardcoded image setter
export function references(url) {
  url = url.replace("http:", "https:");
  if (url.match(/people/g)) {
    return peopleReferences(url);
  } else if (url.match(/films/g)) {
    return filmsReferences(url);
  } else if (url.match(/planets/g)) {
    return planetsReferences(url);
  } else if (url.match(/vehicles/g)) {
    return vehiclesReferences(url);
  } else if (url.match(/starships/g)) {
    return starshipsReferences(url);
  } else if (url.match(/species/g)) {
    return speciesReferences(url);
  } else {
    return "error";
  }
}
