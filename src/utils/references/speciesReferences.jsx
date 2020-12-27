import { 
  img1,  img2,  img3,  img4,  img5,  img6,  img7,  img8,  img9,  img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
  img31, img32, img33, img34, img35, img36, img37,
  notFound
 } from "../helpers/imports/speciesImports";

// At this point, it is one switch refactored !!!
export default function getSpecies(url){
  const response = {
    "https://swapi.dev/api/species/1/":{ id: 1, img: img1, name: "Human" },
    "https://swapi.dev/api/species/2/":{ id: 2, img: img2, name: "Droid" },
    "https://swapi.dev/api/species/3/":{ id: 3, img: img3, name: "Wookiee" },
    "https://swapi.dev/api/species/4/":{ id: 4, img: img4, name: "Rodian" },
    "https://swapi.dev/api/species/5/":{ id: 5, img: img5, name: "Hutt" },
    "https://swapi.dev/api/species/6/":{ id: 6, img: img6, name: "Yoda's species" },
    "https://swapi.dev/api/species/7/":{ id: 7, img: img7, name: "Trandoshan" },
    "https://swapi.dev/api/species/8/":{ id: 8, img: img8, name: "Mon Calamari" },
    "https://swapi.dev/api/species/9/":{ id: 9, img: img9, name: "Ewoks" },
    "https://swapi.dev/api/species/10/":{ id: 10, img: img10, name: "Sullustan" },
    "https://swapi.dev/api/species/11/":{ id: 11, img: img11, name: "Neimoidian" },
    "https://swapi.dev/api/species/12/":{ id: 12, img: img12, name: "Gungan" },
    "https://swapi.dev/api/species/13/":{ id: 13, img: img13, name: "Toydarian" },
    "https://swapi.dev/api/species/14/":{ id: 14, img: img14, name: "Dug" },
    "https://swapi.dev/api/species/15/":{ id: 15, img: img15, name: "Twi'lek" },
    "https://swapi.dev/api/species/16/":{ id: 16, img: img16, name: "Aleena" },
    "https://swapi.dev/api/species/17/":{ id: 17, img: img17, name: "Vulptereen" },
    "https://swapi.dev/api/species/18/":{ id: 18, img: img18, name: "Xexto" },
    "https://swapi.dev/api/species/19/":{ id: 19, img: img19, name: "Toong" },
    "https://swapi.dev/api/species/20/":{ id: 20, img: img20, name: "Cerean" },
    "https://swapi.dev/api/species/21/":{ id: 21, img: img21, name: "Nautolan" },
    "https://swapi.dev/api/species/22/":{ id: 22, img: img22, name: "Zabrak" },
    "https://swapi.dev/api/species/23/":{ id: 23, img: img23, name: "Tholothian" },
    "https://swapi.dev/api/species/24/":{ id: 24, img: img24, name: "Iktotchi" },
    "https://swapi.dev/api/species/25/":{ id: 25, img: img25, name: "Quermian" },
    "https://swapi.dev/api/species/26/":{ id: 26, img: img26, name: "Kel Dor" },
    "https://swapi.dev/api/species/27/":{ id: 27, img: img27, name: "Chagrian" },
    "https://swapi.dev/api/species/28/":{ id: 28, img: img28, name: "Geonosian" },
    "https://swapi.dev/api/species/29/":{ id: 29, img: img29, name: "Mirialan" },
    "https://swapi.dev/api/species/30/":{ id: 30, img: img30, name: "Clawdite" },
    "https://swapi.dev/api/species/31/":{ id: 31, img: img31, name: "Besalisk" },
    "https://swapi.dev/api/species/32/":{ id: 32, img: img32, name: "Kaminoan" },
    "https://swapi.dev/api/species/33/":{ id: 33, img: img33, name: "Skakoan" },
    "https://swapi.dev/api/species/34/":{ id: 34, img: img34, name: "Muun" },
    "https://swapi.dev/api/species/35/":{ id: 35, img: img35, name: "Togruta" },
    "https://swapi.dev/api/species/36/":{ id: 36, img: img36, name: "Kaleesh" },
    "https://swapi.dev/api/species/37/":{ id: 37, img: img37, name: "Pau'an" },
    "default": notFound,
  }
  return (response[url]||response["default"]);
}
