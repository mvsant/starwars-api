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
export default function vehiclesReferences(url) {
  switch (url) {
    case "https://swapi.dev/api/vehicles/4/":
      return { id: 4, img: img4, name: "Sand Crawler" };

    case "https://swapi.dev/api/vehicles/6/":
      return { id: 6, img: img6, name: "T-16 skyhopper" };

    case "https://swapi.dev/api/vehicles/7/":
      return { id: 7, img: img7, name: "X-34 landspeeder" };

    case "https://swapi.dev/api/vehicles/8/":
      return { id: 8, img: img8, name: "TIE/LN starfighter" };

    case "https://swapi.dev/api/vehicles/14/":
      return { id: 14, img: img14, name: "Snowspeeder" };

    case "https://swapi.dev/api/vehicles/16/":
      return { id: 16, img: img16, name: "TIE bomber" };

    case "https://swapi.dev/api/vehicles/18/":
      return { id: 18, img: img18, name: "AT-AT" };

    case "https://swapi.dev/api/vehicles/19/":
      return { id: 19, img: img19, name: "AT-ST" };

    case "https://swapi.dev/api/vehicles/20/":
      return { id: 20, img: img20, name: "Storm IV Twin-Pod cloud car" };

    case "https://swapi.dev/api/vehicles/24/":
      return { id: 24, img: img24, name: "Sail barge" };

    case "https://swapi.dev/api/vehicles/25/":
      return { id: 25, img: img25, name: "Bantha-II cargo skiff" };

    case "https://swapi.dev/api/vehicles/26/":
      return { id: 26, img: img26, name: "TIE/IN interceptor" };

    case "https://swapi.dev/api/vehicles/30/":
      return { id: 30, img: img30, name: "Imperial Speeder Bike" };

    case "https://swapi.dev/api/vehicles/33/":
      return { id: 33, img: img33, name: "Vulture Droid" };

    case "https://swapi.dev/api/vehicles/34/":
      return { id: 34, img: img34, name: "Multi-Troop Transport" };

    case "https://swapi.dev/api/vehicles/35/":
      return { id: 35, img: img35, name: "Armored Assault Tank" };

    case "https://swapi.dev/api/vehicles/36/":
      return { id: 36, img: img36, name: "Single Trooper Aerial Platform" };

    case "https://swapi.dev/api/vehicles/37/":
      return { id: 37, img: img37, name: "C-9979 landing craft" };

    case "https://swapi.dev/api/vehicles/38/":
      return { id: 38, img: img38, name: "Tribubble bongo" };

    case "https://swapi.dev/api/vehicles/42/":
      return { id: 42, img: img42, name: "Sith speeder" };

    case "https://swapi.dev/api/vehicles/44/":
      return { id: 44, img: img44, name: "Zephyr-G swoop bike" };

    case "https://swapi.dev/api/vehicles/45/":
      return { id: 45, img: img45, name: "Koro-2 Exodrive airspeeder" };

    case "https://swapi.dev/api/vehicles/46/":
      return { id: 46, img: img46, name: "XJ-6 airspeeder" };

    case "https://swapi.dev/api/vehicles/50/":
      return { id: 50, img: img50, name: "LAAT/i" };

    case "https://swapi.dev/api/vehicles/51/":
      return { id: 51, img: img51, name: "LAAT/c" };

    case "https://swapi.dev/api/vehicles/53/":
      return { id: 53, img: img53, name: "AT-TE" };

    case "https://swapi.dev/api/vehicles/54/":
      return { id: 54, img: img54, name: "SPHA" };

    case "https://swapi.dev/api/vehicles/55/":
      return { id: 55, img: img55, name: "Flitknot speeder" };

    case "https://swapi.dev/api/vehicles/56/":
      return { id: 56, img: img56, name: "Neimoidian shuttle" };

    case "https://swapi.dev/api/vehicles/57/":
      return { id: 57, img: img57, name: "Geonosian starfighter" };

    case "https://swapi.dev/api/vehicles/60/":
      return { id: 60, img: img60, name: "Tsmeu-6 personal wheel bike" };

    case "https://swapi.dev/api/vehicles/62/":
      return { id: 62, img: img62, name: "Emergency Firespeeder" };

    case "https://swapi.dev/api/vehicles/67/":
      return { id: 67, img: img67, name: "Droid tri-fighter" };

    case "https://swapi.dev/api/vehicles/69/":
      return { id: 69, img: img69, name: "Oevvaor jet catamaran" };

    case "https://swapi.dev/api/vehicles/70/":
      return { id: 70, img: img70, name: "Raddaugh Gnasp fluttercraft" };

    case "https://swapi.dev/api/vehicles/71/":
      return { id: 71, img: img71, name: "Clone turbo tank" };

    case "https://swapi.dev/api/vehicles/72/":
      return { id: 72, img: img72, name: "Corporate Alliance tank droid" };

    case "https://swapi.dev/api/vehicles/73/":
      return { id: 73, img: img73, name: "Droid gunship" };

    case "https://swapi.dev/api/vehicles/76/":
      return { id: 76, img: img76, name: "AT-RT" };

    default:
      return notFound;
  }
}
