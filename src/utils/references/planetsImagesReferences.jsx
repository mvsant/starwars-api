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
export default function planetsImagesReferences(url) {
  switch (url) {
    case "https://swapi.dev/api/planets/1/":
      return img1;

    case "https://swapi.dev/api/planets/2/":
      return img2;

    case "https://swapi.dev/api/planets/3/":
      return img3;

    case "https://swapi.dev/api/planets/4/":
      return img4;

    case "https://swapi.dev/api/planets/5/":
      return img5;

    case "https://swapi.dev/api/planets/6/":
      return img6;

    case "https://swapi.dev/api/planets/7/":
      return img7;

    case "https://swapi.dev/api/planets/8/":
      return img8;

    case "https://swapi.dev/api/planets/9/":
      return img9;

    case "https://swapi.dev/api/planets/10/":
      return img10;

    case "https://swapi.dev/api/planets/11/":
      return img11;

    case "https://swapi.dev/api/planets/12/":
      return img12;

    case "https://swapi.dev/api/planets/13/":
      return img13;

    case "https://swapi.dev/api/planets/14/":
      return img14;

    case "https://swapi.dev/api/planets/15/":
      return img15;

    case "https://swapi.dev/api/planets/16/":
      return img16;

    case "https://swapi.dev/api/planets/17/":
      return img17;

    case "https://swapi.dev/api/planets/18/":
      return img18;

    case "https://swapi.dev/api/planets/19/":
      return img19;

    case "https://swapi.dev/api/planets/20/":
      return notFound;

    case "https://swapi.dev/api/planets/21/":
      return img21;

    case "https://swapi.dev/api/planets/22/":
      return img22;

    case "https://swapi.dev/api/planets/23/":
      return img23;

    case "https://swapi.dev/api/planets/24/":
      return img24;

    case "https://swapi.dev/api/planets/25/":
      return img25;

    case "https://swapi.dev/api/planets/26/":
      return img26;

    case "https://swapi.dev/api/planets/27/":
      return img27;

    case "https://swapi.dev/api/planets/28/":
      return notFound;

    case "https://swapi.dev/api/planets/29/":
      return img29;

    case "https://swapi.dev/api/planets/30/":
      return img30;

    case "https://swapi.dev/api/planets/31/":
      return img31;

    case "https://swapi.dev/api/planets/32/":
      return img32;

    case "https://swapi.dev/api/planets/33/":
      return img33;

    case "https://swapi.dev/api/planets/34/":
      return img34;

    case "https://swapi.dev/api/planets//35":
      return img35;

    case "https://swapi.dev/api/planets/36/":
      return img36;

    case "https://swapi.dev/api/planets/37/":
      return img37;

    case "https://swapi.dev/api/planets/38/":
      return img38;

    case "https://swapi.dev/api/planets/39/":
      return img39;

    case "https://swapi.dev/api/planets/40/":
      return img40;

    case "https://swapi.dev/api/planets/41/":
      return img41;

    case "https://swapi.dev/api/planets/42/":
      return img42;

    case "https://swapi.dev/api/planets/43/":
      return img43;

    case "https://swapi.dev/api/planets/44/":
      return img44;

    case "https://swapi.dev/api/planets/45/":
      return img45;

    case "https://swapi.dev/api/planets/46/":
      return notFound;

    case "https://swapi.dev/api/planets/47/":
      return img47;

    case "https://swapi.dev/api/planets/48/":
      return img48;

    case "https://swapi.dev/api/planets/49/":
      return img49;

    case "https://swapi.dev/api/planets/50/":
      return img50;

    case "https://swapi.dev/api/planets/51/":
      return img51;

    case "https://swapi.dev/api/planets/52/":
      return img52;

    case "https://swapi.dev/api/planets/53/":
      return img53;

    case "https://swapi.dev/api/planets/54/":
      return img54;

    case "https://swapi.dev/api/planets/55/":
      return img55;

    case "https://swapi.dev/api/planets/56/":
      return img56;

    case "https://swapi.dev/api/planets/57/":
      return img57;

    case "https://swapi.dev/api/planets/58/":
      return img58;

    case "https://swapi.dev/api/planets/59/":
      return img59;

    case "https://swapi.dev/api/planets/60/":
      return img60;

    default:
      return notFound;
  }
}
