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

// A pretty ugly hardcoded image seeker
export default function starshipsReferences(url) {
  switch (url) {
    //Image to homepage
    case "https://swapi.dev/api/starships/4/":
      return { id: 4, img: img5, name: "Sentinel-class landing craft" };

    case "https://swapi.dev/api/starships/2/":
      return { id: 2, img: img2, name: "CR90 corvette" };

    case "https://swapi.dev/api/starships/3/":
      return { id: 3, img: img3, name: "Star Destroyer" };

    case "https://swapi.dev/api/starships/5/":
      return { id: 5, img: img5, name: "Sentinel-class landing craft" };

    case "https://swapi.dev/api/starships/9/":
      return { id: 9, img: img9, name: "Death Star" };

    case "https://swapi.dev/api/starships/10/":
      return { id: 10, img: img10, name: "Millennium Falcon" };

    case "https://swapi.dev/api/starships/11/":
      return { id: 11, img: img11, name: "Y-wing" };

    case "https://swapi.dev/api/starships/12/":
      return { id: 12, img: img12, name: "X-wing" };

    case "https://swapi.dev/api/starships/13/":
      return { id: 13, img: img13, name: "TIE Advanced x1" };

    case "https://swapi.dev/api/starships/15/":
      return { id: 15, img: img15, name: "Executor" };

    case "https://swapi.dev/api/starships/17/":
      return { id: 17, img: img17, name: "Rebel transport" };

    case "https://swapi.dev/api/starships/21/":
      return { id: 21, img: img21, name: "Slave 1" };

    case "https://swapi.dev/api/starships/22/":
      return { id: 22, img: img22, name: "Imperial shuttle" };

    case "https://swapi.dev/api/starships/23/":
      return { id: 23, img: img23, name: "EF76 Nebulon-B escort frigate" };

    case "https://swapi.dev/api/starships/27/":
      return { id: 27, img: img27, name: "Calamari Cruiser" };

    case "https://swapi.dev/api/starships/28/":
      return { id: 28, img: img28, name: "A-wing" };

    case "https://swapi.dev/api/starships/29/":
      return { id: 29, img: img29, name: "B-wing" };

    case "https://swapi.dev/api/starships/31/":
      return { id: 31, img: img31, name: "Republic Cruiser" };

    case "https://swapi.dev/api/starships/32/":
      return { id: 32, img: img32, name: "Droid control ship" };

    case "https://swapi.dev/api/starships/39/":
      return { id: 39, img: img39, name: "Naboo fighter" };

    case "https://swapi.dev/api/starships/40/":
      return { id: 40, img: img40, name: "Naboo Royal Starship" };

    case "https://swapi.dev/api/starships/41/":
      return { id: 41, img: img41, name: "Scimitar" };

    case "https://swapi.dev/api/starships/43/":
      return { id: 43, img: img43, name: "J-type diplomatic barge" };

    case "https://swapi.dev/api/starships/47/":
      return { id: 47, img: img47, name: "AA-9 Coruscant freighter" };

    case "https://swapi.dev/api/starships/48/":
      return { id: 48, img: img48, name: "Jedi starfighter" };

    case "https://swapi.dev/api/starships/49/":
      return { id: 49, img: img49, name: "H-type Nubian yacht" };

    case "https://swapi.dev/api/starships/52/":
      return { id: 52, img: img52, name: "Republic Assault ship" };

    case "https://swapi.dev/api/starships/58/":
      return { id: 58, img: img58, name: "Solar Sailer" };

    case "https://swapi.dev/api/starships/59/":
      return { id: 59, img: img59, name: "Trade Federation cruiser" };

    case "https://swapi.dev/api/starships/61/":
      return { id: 61, img: img61, name: "Theta-class T-2c shuttle" };

    case "https://swapi.dev/api/starships/63/":
      return { id: 63, img: img63, name: "Republic attack cruiser" };

    case "https://swapi.dev/api/starships/64/":
      return { id: 64, img: img64, name: "Naboo star skiff" };

    case "https://swapi.dev/api/starships/65/":
      return { id: 65, img: img65, name: "Jedi Interceptor" };

    case "https://swapi.dev/api/starships/66/":
      return { id: 66, img: img66, name: "arc-170" };

    case "https://swapi.dev/api/starships/68/":
      return { id: 68, img: img68, name: "Banking clan frigte" };

    case "https://swapi.dev/api/starships/74/":
      return { id: 74, img: img74, name: "Belbullab-22 starfighter" };

    case "https://swapi.dev/api/starships/75/":
      return { id: 75, img: img75, name: "V-wing" };

    default:
      return notFound;
  }
}
