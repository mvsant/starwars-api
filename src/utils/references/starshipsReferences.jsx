import notFound from "../../assets/img.png";
import img2 from "../../assets/images/starships_images/Corvette_negvv.png";
import img3 from "../../assets/images/starships_images/ISD-I.png";
import img5 from "../../assets/images/starships_images/Imperial_Sentinel-class_shuttle.png";
import img9 from "../../assets/images/starships_images/DSI_hdapproach.png";
import img10 from "../../assets/images/starships_images/Melfal.jpg";
import img11 from "../../assets/images/starships_images/Y-wing.png";
import img12 from "../../assets/images/starships_images/Xwing-SWB.jpg";
import img13 from "../../assets/images/starships_images/TIEfighter2-Fathead.png";
import img15 from "../../assets/images/starships_images/Executor_BF2.png";
import img17 from "../../assets/images/starships_images/GR-75_Medium_Transport_TAEtrivia.png";
import img21 from "../../assets/images/starships_images/Slave_I_Fathead.png";
import img22 from "../../assets/images/starships_images/Shuttle-CHRON.jpg";
import img23 from "../../assets/images/starships_images/NBfrigate.JPG.jpg";
import img27 from "../../assets/images/starships_images/MC90BTS.jpg";
import img28 from "../../assets/images/starships_images/RZ1-BF2.png";
import img29 from "../../assets/images/starships_images/Resistance_B-wing_fighter.png";
import img31 from "../../assets/images/starships_images/Radiant7_negvv.png";
import img32 from "../../assets/images/starships_images/Lucrehulk_battleship_TCW.jpg";
import img39 from "../../assets/images/starships_images/N-1_Starfighter.png";
import img40 from "../../assets/images/starships_images/Naboo_Royal_Starship.png";
import img41 from "../../assets/images/starships_images/Scimitar-USC.png";
import img43 from "../../assets/images/starships_images/J-type_Diplomatic_Barge_TCW.png";
import img47 from "../../assets/images/starships_images/Aa9coruscantfreighter.jpg";
import img48 from "../../assets/images/starships_images/Jedi_Starfighter_EpII.png";
import img49 from "../../assets/images/starships_images/H-Type_Nubian_yacht_USW.png";
import img52 from "../../assets/images/starships_images/Acclamator.jpg";
import img58 from "../../assets/images/starships_images/Solar_sail.jpg";
import img59 from "../../assets/images/starships_images/InvisibleHandStarboard-FF.png";
import img61 from "../../assets/images/starships_images/Theta-class_shuttle.png";
import img63 from "../../assets/images/starships_images/Imperial_attack_cruisers.png";
import img64 from "../../assets/images/starships_images/Naboo_star_skiff_1.png";
import img65 from "../../assets/images/starships_images/Eta-2_Interceptor.png";
import img66 from "../../assets/images/starships_images/ARC170starfighter.jpg";
import img68 from "../../assets/images/starships_images/Munificent_TCW.jpg";
import img74 from "../../assets/images/starships_images/Soulless_One_TCW.jpg";
import img75 from "../../assets/images/starships_images/Nimbus-class_V-wing_TFOWM.png";

// At this point, it is one switch refactored !!!
export default function getStarships(url){
  const response = {
    "https://swapi.dev/api/starships/4/":{ id: 4, img: img5, name: "Sentinel-class landing craft" },
    "https://swapi.dev/api/starships/2/":{ id: 2, img: img2, name: "CR90 corvette" },
    "https://swapi.dev/api/starships/3/":{ id: 3, img: img3, name: "Star Destroyer" },
    "https://swapi.dev/api/starships/5/":{ id: 5, img: img5, name: "Sentinel-class landing craft" },
    "https://swapi.dev/api/starships/9/":{ id: 9, img: img9, name: "Death Star" },
    "https://swapi.dev/api/starships/10/":{ id: 10, img: img10, name: "Millennium Falcon" },
    "https://swapi.dev/api/starships/11/":{ id: 11, img: img11, name: "Y-wing" },
    "https://swapi.dev/api/starships/12/":{ id: 12, img: img12, name: "X-wing" },
    "https://swapi.dev/api/starships/13/":{ id: 13, img: img13, name: "TIE Advanced x1" },
    "https://swapi.dev/api/starships/15/":{ id: 15, img: img15, name: "Executor" },
    "https://swapi.dev/api/starships/17/":{ id: 17, img: img17, name: "Rebel transport" },
    "https://swapi.dev/api/starships/21/":{ id: 21, img: img21, name: "Slave 1" },
    "https://swapi.dev/api/starships/22/":{ id: 22, img: img22, name: "Imperial shuttle" },
    "https://swapi.dev/api/starships/23/":{ id: 23, img: img23, name: "EF76 Nebulon-B escort frigate" },
    "https://swapi.dev/api/starships/27/":{ id: 27, img: img27, name: "Calamari Cruiser" },
    "https://swapi.dev/api/starships/28/":{ id: 28, img: img28, name: "A-wing" },
    "https://swapi.dev/api/starships/29/":{ id: 29, img: img29, name: "B-wing" },
    "https://swapi.dev/api/starships/31/":{ id: 31, img: img31, name: "Republic Cruiser" },
    "https://swapi.dev/api/starships/32/":{ id: 32, img: img32, name: "Droid control ship" },
    "https://swapi.dev/api/starships/39/":{ id: 39, img: img39, name: "Naboo fighter" },
    "https://swapi.dev/api/starships/40/":{ id: 40, img: img40, name: "Naboo Royal Starship" },
    "https://swapi.dev/api/starships/41/":{ id: 41, img: img41, name: "Scimitar" },
    "https://swapi.dev/api/starships/43/":{ id: 43, img: img43, name: "J-type diplomatic barge" },
    "https://swapi.dev/api/starships/47/":{ id: 47, img: img47, name: "AA-9 Coruscant freighter" },
    "https://swapi.dev/api/starships/48/":{ id: 48, img: img48, name: "Jedi starfighter" },
    "https://swapi.dev/api/starships/49/":{ id: 49, img: img49, name: "H-type Nubian yacht" },
    "https://swapi.dev/api/starships/52/":{ id: 52, img: img52, name: "Republic Assault ship" },
    "https://swapi.dev/api/starships/58/":{ id: 58, img: img58, name: "Solar Sailer" },
    "https://swapi.dev/api/starships/59/":{ id: 59, img: img59, name: "Trade Federation cruiser" },
    "https://swapi.dev/api/starships/61/":{ id: 61, img: img61, name: "Theta-class T-2c shuttle" },
    "https://swapi.dev/api/starships/63/":{ id: 63, img: img63, name: "Republic attack cruiser" },
    "https://swapi.dev/api/starships/64/":{ id: 64, img: img64, name: "Naboo star skiff" },
    "https://swapi.dev/api/starships/65/":{ id: 65, img: img65, name: "Jedi Interceptor" },
    "https://swapi.dev/api/starships/66/":{ id: 66, img: img66, name: "arc-170" },
    "https://swapi.dev/api/starships/68/":{ id: 68, img: img68, name: "Banking clan frigte" },
    "https://swapi.dev/api/starships/74/":{ id: 74, img: img74, name: "Belbullab-22 starfighter" },
    "https://swapi.dev/api/starships/75/":{ id: 75, img: img75, name: "V-wing" },
    "default": notFound,
  }
  return (response[url]||response["default"]);
}