import notFound from "../../assets/img.png";
import img4 from "../../assets/images/vehicles_images/Sandcrawler.png";
import img6 from "../../assets/images/vehicles_images/T16skyhopper_negvv.png";
import img7 from "../../assets/images/vehicles_images/X-34_landspeeder_EtU.png";
import img8 from "../../assets/images/vehicles_images/TIEfighter2-Fathead.png";
import img14 from "../../assets/images/vehicles_images/Rebel_snowspeeder_SWL.png";
import img16 from "../../assets/images/vehicles_images/TIE_Bomber_BF2.png";
import img18 from "../../assets/images/vehicles_images/ATAT-SWFB.jpg";
import img19 from "../../assets/images/vehicles_images/ATST-SWBdice.png";
import img20 from "../../assets/images/vehicles_images/Cloud-car-v2.png";
import img24 from "../../assets/images/vehicles_images/Sailbarge-chron1.jpg";
import img25 from "../../assets/images/vehicles_images/Skiff-NEGVV.png";
import img26 from "../../assets/images/vehicles_images/Tieinter2.jpg";
import img30 from "../../assets/images/vehicles_images/74zSpeederbike-NEGVV.png";
import img33 from "../../assets/images/vehicles_images/CIS_Vulture_droid.jpg";
import img34 from "../../assets/images/vehicles_images/MTT_BF2.png";
import img35 from "../../assets/images/vehicles_images/AAT_swtcgvg.jpg";
import img36 from "../../assets/images/vehicles_images/STAP-SWE.png";
import img37 from "../../assets/images/vehicles_images/C9979_ep1ig.jpg";
import img38 from "../../assets/images/vehicles_images/Bongo.jpg";
import img42 from "../../assets/images/vehicles_images/FC20_speeder_bike_SWFFfb.png";
import img44 from "../../assets/images/vehicles_images/Zephyr-G.jpg";
import img45 from "../../assets/images/vehicles_images/Koro2_uvg.jpg";
import img46 from "../../assets/images/vehicles_images/XJ-6_hotrod.jpg";
import img50 from "../../assets/images/vehicles_images/Low_Altitude_Assault_Transport.png";
import img51 from "../../assets/images/vehicles_images/Laatc.jpg";
import img53 from "../../assets/images/vehicles_images/AT-TE-636.JPG.jpg";
import img54 from "../../assets/images/vehicles_images/SPHA-T.JPG.jpg";
import img55 from "../../assets/images/vehicles_images/FlitknotSpeeder.jpg";
import img56 from "../../assets/images/vehicles_images/NeimoidianShuttleSecretWeapons.png";
import img57 from "../../assets/images/vehicles_images/Nantex_NEGVV.png";
import img60 from "../../assets/images/vehicles_images/GrievWheelBike_wsmi.jpg";
import img62 from "../../assets/images/vehicles_images/Fire_ship.jpg";
import img67 from "../../assets/images/vehicles_images/Tri-fighter.jpg";
import img69 from "../../assets/images/vehicles_images/Wookieeflyingcat2.png";
import img70 from "../../assets/images/vehicles_images/Catamaran.JPG.jpg";
import img71 from "../../assets/images/vehicles_images/JuggernautROTS.jpg";
import img72 from "../../assets/images/vehicles_images/Tank_droid_TCW.png";
import img73 from "../../assets/images/vehicles_images/DroidGunship-DB.png";
import img76 from "../../assets/images/vehicles_images/AT-RT_BF2.png";
// A pretty ugly hardcoded image seeker
export default function vehiclesImagesReferences(url) {
  switch (url) {
    case "https://swapi.dev/api/vehicles/4/":
      return img4;

    case "https://swapi.dev/api/vehicles/6/":
      return img6;

    case "https://swapi.dev/api/vehicles/7/":
      return img7;

    case "https://swapi.dev/api/vehicles/8/":
      return img8;

    case "https://swapi.dev/api/vehicles/14/":
      return img14;

    case "https://swapi.dev/api/vehicles/16/":
      return img16;

    case "https://swapi.dev/api/vehicles/18/":
      return img18;

    case "https://swapi.dev/api/vehicles/19/":
      return img19;

    case "https://swapi.dev/api/vehicles/20/":
      return img20;

    case "https://swapi.dev/api/vehicles/24/":
      return img24;

    case "https://swapi.dev/api/vehicles/25/":
      return img25;

    case "https://swapi.dev/api/vehicles/26/":
      return img26;

    case "https://swapi.dev/api/vehicles/30/":
      return img30;

    case "https://swapi.dev/api/vehicles/33/":
      return img33;

    case "https://swapi.dev/api/vehicles/34/":
      return img34;

    case "https://swapi.dev/api/vehicles/35/":
      return img35;

    case "https://swapi.dev/api/vehicles/36/":
      return img36;

    case "https://swapi.dev/api/vehicles/37/":
      return img37;

    case "https://swapi.dev/api/vehicles/38/":
      return img38;

    case "https://swapi.dev/api/vehicles/42/":
      return img42;

    case "https://swapi.dev/api/vehicles/44/":
      return img44;

    case "https://swapi.dev/api/vehicles/45/":
      return img45;

    case "https://swapi.dev/api/vehicles/46/":
      return img46;

    case "https://swapi.dev/api/vehicles/50/":
      return img50;

    case "https://swapi.dev/api/vehicles/51/":
      return img51;

    case "https://swapi.dev/api/vehicles/53/":
      return img53;

    case "https://swapi.dev/api/vehicles/54/":
      return img54;

    case "https://swapi.dev/api/vehicles/55/":
      return img55;

    case "https://swapi.dev/api/vehicles/56/":
      return img56;

    case "https://swapi.dev/api/vehicles/57/":
      return img57;

    case "https://swapi.dev/api/vehicles/60/":
      return img60;

    case "https://swapi.dev/api/vehicles/62/":
      return img62;

    case "https://swapi.dev/api/vehicles/67/":
      return img67;

    case "https://swapi.dev/api/vehicles/69/":
      return img69;

    case "https://swapi.dev/api/vehicles/70/":
      return img70;

    case "https://swapi.dev/api/vehicles/71/":
      return img71;

    case "https://swapi.dev/api/vehicles/72/":
      return img72;

    case "https://swapi.dev/api/vehicles/73/":
      return img73;

    case "https://swapi.dev/api/vehicles/76/":
      return img76;

    default:
      return notFound;
  }
}
