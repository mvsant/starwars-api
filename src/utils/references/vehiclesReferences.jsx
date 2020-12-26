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

// At this point, it is one switch refactored !!!
export default function getVehicles(url){
  const response = {
    "https://swapi.dev/api/vehicles/4/":{ id: 4, img: img4, name: "Sand Crawler" },
    "https://swapi.dev/api/vehicles/6/":{ id: 6, img: img6, name: "T-16 skyhopper" },
    "https://swapi.dev/api/vehicles/7/":{ id: 7, img: img7, name: "X-34 landspeeder" },
    "https://swapi.dev/api/vehicles/8/":{ id: 8, img: img8, name: "TIE/LN starfighter" },
    "https://swapi.dev/api/vehicles/14/":{ id: 14, img: img14, name: "Snowspeeder" },
    "https://swapi.dev/api/vehicles/16/":{ id: 16, img: img16, name: "TIE bomber" },
    "https://swapi.dev/api/vehicles/18/":{ id: 18, img: img18, name: "AT-AT" },
    "https://swapi.dev/api/vehicles/19/":{ id: 19, img: img19, name: "AT-ST" },
    "https://swapi.dev/api/vehicles/20/":{ id: 20, img: img20, name: "Storm IV Twin-Pod cloud car" },
    "https://swapi.dev/api/vehicles/24/":{ id: 24, img: img24, name: "Sail barge" },
    "https://swapi.dev/api/vehicles/25/":{ id: 25, img: img25, name: "Bantha-II cargo skiff" },
    "https://swapi.dev/api/vehicles/26/":{ id: 26, img: img26, name: "TIE/IN interceptor" },
    "https://swapi.dev/api/vehicles/30/":{ id: 30, img: img30, name: "Imperial Speeder Bike" },
    "https://swapi.dev/api/vehicles/33/":{ id: 33, img: img33, name: "Vulture Droid" },
    "https://swapi.dev/api/vehicles/34/":{ id: 34, img: img34, name: "Multi-Troop Transport" },
    "https://swapi.dev/api/vehicles/35/":{ id: 35, img: img35, name: "Armored Assault Tank" },
    "https://swapi.dev/api/vehicles/36/":{ id: 36, img: img36, name: "Single Trooper Aerial Platform" },
    "https://swapi.dev/api/vehicles/37/":{ id: 37, img: img37, name: "C-9979 landing craft" },
    "https://swapi.dev/api/vehicles/38/":{ id: 38, img: img38, name: "Tribubble bongo" },
    "https://swapi.dev/api/vehicles/42/":{ id: 42, img: img42, name: "Sith speeder" },
    "https://swapi.dev/api/vehicles/44/":{ id: 44, img: img44, name: "Zephyr-G swoop bike" },
    "https://swapi.dev/api/vehicles/45/":{ id: 45, img: img45, name: "Koro-2 Exodrive airspeeder" },
    "https://swapi.dev/api/vehicles/46/":{ id: 46, img: img46, name: "XJ-6 airspeeder" },
    "https://swapi.dev/api/vehicles/50/":{ id: 50, img: img50, name: "LAAT/i" },
    "https://swapi.dev/api/vehicles/51/":{ id: 51, img: img51, name: "LAAT/c" },
    "https://swapi.dev/api/vehicles/53/":{ id: 53, img: img53, name: "AT-TE" },
    "https://swapi.dev/api/vehicles/54/":{ id: 54, img: img54, name: "SPHA" },
    "https://swapi.dev/api/vehicles/55/":{ id: 55, img: img55, name: "Flitknot speeder" },
    "https://swapi.dev/api/vehicles/56/":{ id: 56, img: img56, name: "Neimoidian shuttle" },
    "https://swapi.dev/api/vehicles/57/":{ id: 57, img: img57, name: "Geonosian starfighter" },
    "https://swapi.dev/api/vehicles/60/":{ id: 60, img: img60, name: "Tsmeu-6 personal wheel bike" },
    "https://swapi.dev/api/vehicles/62/":{ id: 62, img: img62, name: "Emergency Firespeeder" },
    "https://swapi.dev/api/vehicles/67/":{ id: 67, img: img67, name: "Droid tri-fighter" },
    "https://swapi.dev/api/vehicles/69/":{ id: 69, img: img69, name: "Oevvaor jet catamaran" },
    "https://swapi.dev/api/vehicles/70/":{ id: 70, img: img70, name: "Raddaugh Gnasp fluttercraft" },
    "https://swapi.dev/api/vehicles/71/":{ id: 71, img: img71, name: "Clone turbo tank" },
    "https://swapi.dev/api/vehicles/72/":{ id: 72, img: img72, name: "Corporate Alliance tank droid" },
    "https://swapi.dev/api/vehicles/73/":{ id: 73, img: img73, name: "Droid gunship" },
    "https://swapi.dev/api/vehicles/76/":{ id: 76, img: img76, name: "AT-RT" },
    "default": notFound,
  }
  return (response[url]||response["default"]);
}