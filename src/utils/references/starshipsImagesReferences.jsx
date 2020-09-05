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
export default function starshipsImagesReferences(url) {
  switch (url) {
    //Image to homepage
    case "https://swapi.dev/api/starships/4/":
      return img5;

    case "https://swapi.dev/api/starships/2/":
      return img2;

    case "https://swapi.dev/api/starships/3/":
      return img3;

    case "https://swapi.dev/api/starships/5/":
      return img5;

    case "https://swapi.dev/api/starships/9/":
      return img9;

    case "https://swapi.dev/api/starships/10/":
      return img10;

    case "https://swapi.dev/api/starships/11/":
      return img11;

    case "https://swapi.dev/api/starships/12/":
      return img12;

    case "https://swapi.dev/api/starships/13/":
      return img13;

    case "https://swapi.dev/api/starships/15/":
      return img15;

    case "https://swapi.dev/api/starships/17/":
      return img17;

    case "https://swapi.dev/api/starships/21/":
      return img21;

    case "https://swapi.dev/api/starships/22/":
      return img22;

    case "https://swapi.dev/api/starships/23/":
      return img23;

    case "https://swapi.dev/api/starships/27/":
      return img27;

    case "https://swapi.dev/api/starships/28/":
      return img28;

    case "https://swapi.dev/api/starships/29/":
      return img29;

    case "https://swapi.dev/api/starships/31/":
      return img31;

    case "https://swapi.dev/api/starships/32/":
      return img32;

    case "https://swapi.dev/api/starships/39/":
      return img39;

    case "https://swapi.dev/api/starships/40/":
      return img40;

    case "https://swapi.dev/api/starships/41/":
      return img41;

    case "https://swapi.dev/api/starships/43/":
      return img43;

    case "https://swapi.dev/api/starships/47/":
      return img47;

    case "https://swapi.dev/api/starships/48/":
      return img48;

    case "https://swapi.dev/api/starships/49/":
      return img49;

    case "https://swapi.dev/api/starships/52/":
      return img52;

    case "https://swapi.dev/api/starships/58/":
      return img58;

    case "https://swapi.dev/api/starships/59/":
      return img59;

    case "https://swapi.dev/api/starships/61/":
      return img61;

    case "https://swapi.dev/api/starships/63/":
      return img63;

    case "https://swapi.dev/api/starships/64/":
      return img64;

    case "https://swapi.dev/api/starships/65/":
      return img65;

    case "https://swapi.dev/api/starships/66/":
      return img66;

    case "https://swapi.dev/api/starships/68/":
      return img68;

    case "https://swapi.dev/api/starships/74/":
      return img74;

    case "https://swapi.dev/api/starships/75/":
      return img75;

    default:
      return notFound;
  }
}
