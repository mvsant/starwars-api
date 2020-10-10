import notFound from "../../assets/img.png";
import img1 from "../../assets/images/planets_images/Tatooine_TPM.png";
import img2 from "../../assets/images/planets_images/Alderaan.jpg";
import img3 from "../../assets/images/planets_images/Eaw_Yavin4.jpg";
import img4 from "../../assets/images/planets_images/Hoth_SWCT.png";
import img5 from "../../assets/images/planets_images/Dagobah_ep3.jpg";
import img6 from "../../assets/images/planets_images/Bespin-SWCT.png";
import img7 from "../../assets/images/planets_images/Endor_FFGRebellion.png";
import img8 from "../../assets/images/planets_images/Naboo_planet.png";
import img9 from "../../assets/images/planets_images/CoruscantGlobeE1.png";
import img10 from "../../assets/images/planets_images/Kamino-DB.png";
import img11 from "../../assets/images/planets_images/Geonosis_AotC.png";
import img12 from "../../assets/images/planets_images/UtapauRotS.png";
import img13 from "../../assets/images/planets_images/Mustafar-TROSGG.png";
import img14 from "../../assets/images/planets_images/Kashyyyk_FFGRebellion.png";
import img15 from "../../assets/images/planets_images/PolisMassa-BFII.jpg";
import img16 from "../../assets/images/planets_images/Mygeeto_GE2.jpg";
import img17 from "../../assets/images/planets_images/Felucia_SWCT.png";
import img18 from "../../assets/images/planets_images/Cato_Neimoidia_CotG.png";
import img19 from "../../assets/images/planets_images/Saleucami-TD.png";

import img21 from "../../assets/images/planets_images/Eriadu_AoRGMT.png";
import img22 from "../../assets/images/planets_images/Corellia_SOF.png";
import img23 from "../../assets/images/planets_images/Rodia_canon.png";
import img24 from "../../assets/images/planets_images/Nal-hutta.png";
import img25 from "../../assets/images/planets_images/Dantooine2.jpg";
import img26 from "../../assets/images/planets_images/Bestine-TFABG.png";
import img27 from "../../assets/images/planets_images/Ord_Mantell_EotECR.png";

import img29 from "../../assets/images/planets_images/Trandosha-PL.png";
import img30 from "../../assets/images/planets_images/Socorro.png";
import img31 from "../../assets/images/planets_images/Dac-AORCR.png";
import img32 from "../../assets/images/planets_images/Chandrila_AoRCR.png";
import img33 from "../../assets/images/planets_images/SullustAoR.png";
import img34 from "../../assets/images/planets_images/Toydaria-TCW.png";
import img35 from "../../assets/images/planets_images/MalastareNEGAS.jpg";
import img36 from "../../assets/images/planets_images/Dathomir.jpg";
import img37 from "../../assets/images/planets_images/Ryloth_EotECR.png";
import img38 from "../../assets/images/planets_images/Aleen_NEGAS.jpg";
import img39 from "../../assets/images/planets_images/Vulpter_FF7.jpg";
import img40 from "../../assets/images/planets_images/TroikenQuermia.jpg";
import img41 from "../../assets/images/planets_images/Tundatlas.jpg";
import img42 from "../../assets/images/planets_images/Pax-TFABG.png";
import img43 from "../../assets/images/planets_images/Cerea-FDCR.png";
import img44 from "../../assets/images/planets_images/Glee_Anselm_fuel_log.png";
import img45 from "../../assets/images/planets_images/Iridonia.jpg";

import img47 from "../../assets/images/planets_images/Iktotch_FDNP.png";
import img48 from "../../assets/images/planets_images/Quermia_NEGAS.jpg";
import img49 from "../../assets/images/planets_images/Dorin-FDCR.png";
import img50 from "../../assets/images/planets_images/Champala_NEGAS.jpg";
import img51 from "../../assets/images/planets_images/Ruuria-TFABG.jpg";
import img52 from "../../assets/images/planets_images/Serenno-Massacre.png";
import img53 from "../../assets/images/planets_images/Concord_Dawn_system.png";
import img54 from "../../assets/images/planets_images/Zolan.jpg";
import img55 from "../../assets/images/planets_images/Ojom.jpg";
import img56 from "../../assets/images/planets_images/Skako-Minor-ADE.png";
import img57 from "../../assets/images/planets_images/Muunilinst.jpg";
import img58 from "../../assets/images/planets_images/ShiliNEGAS.jpg";
import img59 from "../../assets/images/planets_images/KaleePlanet.jpg";
import img60 from "../../assets/images/planets_images/Umbara-Planet_SWTOR.jpg";

// A pretty ugly hardcoded image seeker
export default function planetsReferences(url) {
  switch (url) {
    case "https://swapi.dev/api/planets/1/":
      return { id: 1, img: img1, name: "Tatooine" };

    case "https://swapi.dev/api/planets/2/":
      return { id: 2, img: img2, name: "Alderaan" };

    case "https://swapi.dev/api/planets/3/":
      return { id: 3, img: img3, name: "Yavin IV" };

    case "https://swapi.dev/api/planets/4/":
      return { id: 4, img: img4, name: "Hoth" };

    case "https://swapi.dev/api/planets/5/":
      return { id: 5, img: img5, name: "Dagobah" };

    case "https://swapi.dev/api/planets/6/":
      return { id: 6, img: img6, name: "Bespin" };

    case "https://swapi.dev/api/planets/7/":
      return { id: 7, img: img7, name: "Endor" };

    case "https://swapi.dev/api/planets/8/":
      return { id: 8, img: img8, name: "Naboo" };

    case "https://swapi.dev/api/planets/9/":
      return { id: 9, img: img9, name: "Coruscant" };

    case "https://swapi.dev/api/planets/10/":
      return { id: 10, img: img10, name: "Kamino" };

    case "https://swapi.dev/api/planets/11/":
      return { id: 11, img: img11, name: "Geonosis" };

    case "https://swapi.dev/api/planets/12/":
      return { id: 12, img: img12, name: "Utapau" };

    case "https://swapi.dev/api/planets/13/":
      return { id: 13, img: img13, name: "Mustafar" };

    case "https://swapi.dev/api/planets/14/":
      return { id: 14, img: img14, name: "Kashyyyk" };

    case "https://swapi.dev/api/planets/15/":
      return { id: 15, img: img15, name: "Polis Massa" };

    case "https://swapi.dev/api/planets/16/":
      return { id: 16, img: img16, name: "Mygeeto" };

    case "https://swapi.dev/api/planets/17/":
      return { id: 17, img: img17, name: "Felucia" };

    case "https://swapi.dev/api/planets/18/":
      return { id: 18, img: img18, name: "Cato Neimoidia" };

    case "https://swapi.dev/api/planets/19/":
      return { id: 19, img: img19, name: "Saleucami" };

    case "https://swapi.dev/api/planets/20/":
      return { id: 20, img: notFound, name: "Stewjon" };

    case "https://swapi.dev/api/planets/21/":
      return { id: 21, img: img21, name: "Eriadu" };

    case "https://swapi.dev/api/planets/22/":
      return { id: 22, img: img22, name: "Corellia" };

    case "https://swapi.dev/api/planets/23/":
      return { id: 23, img: img23, name: "Rodia" };

    case "https://swapi.dev/api/planets/24/":
      return { id: 24, img: img24, name: "Nal Hutta" };

    case "https://swapi.dev/api/planets/25/":
      return { id: 25, img: img25, name: "Dantooine" };

    case "https://swapi.dev/api/planets/26/":
      return { id: 26, img: img26, name: "Bestine IV" };

    case "https://swapi.dev/api/planets/27/":
      return { id: 27, img: img27, name: "Ord Mantell" };

    case "https://swapi.dev/api/planets/28/":
      return { id: 28, img: notFound, name: "Unknown" };

    case "https://swapi.dev/api/planets/29/":
      return { id: 29, img: img29, name: "Trandosha" };

    case "https://swapi.dev/api/planets/30/":
      return { id: 30, img: img30, name: "Socorro" };

    case "https://swapi.dev/api/planets/31/":
      return { id: 31, img: img31, name: "Mon Cala" };

    case "https://swapi.dev/api/planets/32/":
      return { id: 32, img: img32, name: "Chandrila" };

    case "https://swapi.dev/api/planets/33/":
      return { id: 33, img: img33, name: "Sullust" };

    case "https://swapi.dev/api/planets/34/":
      return { id: 34, img: img34, name: "Toydaria" };

    case "https://swapi.dev/api/planets/35/":
      return { id: 35, img: img35, name: "Malastare" };

    case "https://swapi.dev/api/planets/36/":
      return { id: 36, img: img36, name: "Dathomir" };

    case "https://swapi.dev/api/planets/37/":
      return { id: 37, img: img37, name: "Rylot" };

    case "https://swapi.dev/api/planets/38/":
      return { id: 38, img: img38, name: "Aleen Minor" };

    case "https://swapi.dev/api/planets/39/":
      return { id: 39, img: img39, name: "Vulpter" };

    case "https://swapi.dev/api/planets/40/":
      return { id: 40, img: img40, name: "Troiken" };

    case "https://swapi.dev/api/planets/41/":
      return { id: 41, img: img41, name: "Tund" };

    case "https://swapi.dev/api/planets/42/":
      return { id: 42, img: img42, name: "Haruun Kal" };

    case "https://swapi.dev/api/planets/43/":
      return { id: 43, img: img43, name: "Cerea" };

    case "https://swapi.dev/api/planets/44/":
      return { id: 44, img: img44, name: "Glee Anselm" };

    case "https://swapi.dev/api/planets/45/":
      return { id: 45, img: img45, name: "Iridonia" };

    case "https://swapi.dev/api/planets/46/":
      return { id: 46, img: notFound, name: "Tholoth" };

    case "https://swapi.dev/api/planets/47/":
      return { id: 47, img: img47, name: "Iktotch" };

    case "https://swapi.dev/api/planets/48/":
      return { id: 48, img: img48, name: "Quermia" };

    case "https://swapi.dev/api/planets/49/":
      return { id: 49, img: img49, name: "Dorin" };

    case "https://swapi.dev/api/planets/50/":
      return { id: 50, img: img50, name: "Champala" };

    case "https://swapi.dev/api/planets/51/":
      return { id: 51, img: img51, name: "Mirial" };

    case "https://swapi.dev/api/planets/52/":
      return { id: 52, img: img52, name: "Serenno" };

    case "https://swapi.dev/api/planets/53/":
      return { id: 53, img: img53, name: "Concord Dawn" };

    case "https://swapi.dev/api/planets/54/":
      return { id: 54, img: img54, name: "Zolan" };

    case "https://swapi.dev/api/planets/55/":
      return { id: 55, img: img55, name: "Ojom" };

    case "https://swapi.dev/api/planets/56/":
      return { id: 56, img: img56, name: "Skako" };

    case "https://swapi.dev/api/planets/57/":
      return { id: 57, img: img57, name: "Muunilinst" };

    case "https://swapi.dev/api/planets/58/":
      return { id: 58, img: img58, name: "Shili" };

    case "https://swapi.dev/api/planets/59/":
      return { id: 59, img: img59, name: "Kalee" };

    case "https://swapi.dev/api/planets/60/":
      return { id: 60, img: img60, name: "Umbara" };

    default:
      return notFound;
  }
}
