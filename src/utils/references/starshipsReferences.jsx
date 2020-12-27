import {
  img2,  img3,  img5,  img9,  img10,  img11,  img12,  img13,  img15,  img17,
  img21,  img22,  img23,  img27,  img28,  img29,  img31,  img32,  img39,  img40,
  img41,  img43,  img47,  img48,  img49,  img52,  img58,  img59,  img61,  img63,
  img64,  img65,  img66,  img68,  img74,  img75,
  notFound
} from "../helpers/imports/starshipsImports";

// At this point, it is one switch refactored !!!
export default function getStarships(url) {
  const response = {
    "https://swapi.dev/api/starships/4/": {
      id: 4,
      img: img5,
      name: "Sentinel-class landing craft",
    },
    "https://swapi.dev/api/starships/2/": {
      id: 2,
      img: img2,
      name: "CR90 corvette",
    },
    "https://swapi.dev/api/starships/3/": {
      id: 3,
      img: img3,
      name: "Star Destroyer",
    },
    "https://swapi.dev/api/starships/5/": {
      id: 5,
      img: img5,
      name: "Sentinel-class landing craft",
    },
    "https://swapi.dev/api/starships/9/": {
      id: 9,
      img: img9,
      name: "Death Star",
    },
    "https://swapi.dev/api/starships/10/": {
      id: 10,
      img: img10,
      name: "Millennium Falcon",
    },
    "https://swapi.dev/api/starships/11/": {
      id: 11,
      img: img11,
      name: "Y-wing",
    },
    "https://swapi.dev/api/starships/12/": {
      id: 12,
      img: img12,
      name: "X-wing",
    },
    "https://swapi.dev/api/starships/13/": {
      id: 13,
      img: img13,
      name: "TIE Advanced x1",
    },
    "https://swapi.dev/api/starships/15/": {
      id: 15,
      img: img15,
      name: "Executor",
    },
    "https://swapi.dev/api/starships/17/": {
      id: 17,
      img: img17,
      name: "Rebel transport",
    },
    "https://swapi.dev/api/starships/21/": {
      id: 21,
      img: img21,
      name: "Slave 1",
    },
    "https://swapi.dev/api/starships/22/": {
      id: 22,
      img: img22,
      name: "Imperial shuttle",
    },
    "https://swapi.dev/api/starships/23/": {
      id: 23,
      img: img23,
      name: "EF76 Nebulon-B escort frigate",
    },
    "https://swapi.dev/api/starships/27/": {
      id: 27,
      img: img27,
      name: "Calamari Cruiser",
    },
    "https://swapi.dev/api/starships/28/": {
      id: 28,
      img: img28,
      name: "A-wing",
    },
    "https://swapi.dev/api/starships/29/": {
      id: 29,
      img: img29,
      name: "B-wing",
    },
    "https://swapi.dev/api/starships/31/": {
      id: 31,
      img: img31,
      name: "Republic Cruiser",
    },
    "https://swapi.dev/api/starships/32/": {
      id: 32,
      img: img32,
      name: "Droid control ship",
    },
    "https://swapi.dev/api/starships/39/": {
      id: 39,
      img: img39,
      name: "Naboo fighter",
    },
    "https://swapi.dev/api/starships/40/": {
      id: 40,
      img: img40,
      name: "Naboo Royal Starship",
    },
    "https://swapi.dev/api/starships/41/": {
      id: 41,
      img: img41,
      name: "Scimitar",
    },
    "https://swapi.dev/api/starships/43/": {
      id: 43,
      img: img43,
      name: "J-type diplomatic barge",
    },
    "https://swapi.dev/api/starships/47/": {
      id: 47,
      img: img47,
      name: "AA-9 Coruscant freighter",
    },
    "https://swapi.dev/api/starships/48/": {
      id: 48,
      img: img48,
      name: "Jedi starfighter",
    },
    "https://swapi.dev/api/starships/49/": {
      id: 49,
      img: img49,
      name: "H-type Nubian yacht",
    },
    "https://swapi.dev/api/starships/52/": {
      id: 52,
      img: img52,
      name: "Republic Assault ship",
    },
    "https://swapi.dev/api/starships/58/": {
      id: 58,
      img: img58,
      name: "Solar Sailer",
    },
    "https://swapi.dev/api/starships/59/": {
      id: 59,
      img: img59,
      name: "Trade Federation cruiser",
    },
    "https://swapi.dev/api/starships/61/": {
      id: 61,
      img: img61,
      name: "Theta-class T-2c shuttle",
    },
    "https://swapi.dev/api/starships/63/": {
      id: 63,
      img: img63,
      name: "Republic attack cruiser",
    },
    "https://swapi.dev/api/starships/64/": {
      id: 64,
      img: img64,
      name: "Naboo star skiff",
    },
    "https://swapi.dev/api/starships/65/": {
      id: 65,
      img: img65,
      name: "Jedi Interceptor",
    },
    "https://swapi.dev/api/starships/66/": {
      id: 66,
      img: img66,
      name: "arc-170",
    },
    "https://swapi.dev/api/starships/68/": {
      id: 68,
      img: img68,
      name: "Banking clan frigte",
    },
    "https://swapi.dev/api/starships/74/": {
      id: 74,
      img: img74,
      name: "Belbullab-22 starfighter",
    },
    "https://swapi.dev/api/starships/75/": {
      id: 75,
      img: img75,
      name: "V-wing",
    },
    default: notFound,
  };
  return response[url] || response["default"];
}
