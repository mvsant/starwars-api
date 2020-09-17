import notFound from "../../assets/img.png";
import img1 from "../../assets/images/species_images/HumansInTheResistance-TROS.jpg";
import img2 from "../../assets/images/species_images/Droid_Trio_TLJ_alt.png";
import img3 from "../../assets/images/species_images/Chewbacca-Fathead.png";
import img4 from "../../assets/images/species_images/Rodian_DICE.png";
import img5 from "../../assets/images/species_images/JabbaPromo.png";
import img6 from "../../assets/images/species_images/MP-YodaSpecies.png";
import img7 from "../../assets/images/species_images/Bossk_full_body.png";
import img8 from "../../assets/images/species_images/The_Mon_Calamari.png";
import img9 from "../../assets/images/species_images/Ewoks_Encyclopedia.png";
import img10 from "../../assets/images/species_images/Sullustan_NEGAS.jpg";
import img11 from "../../assets/images/species_images/Neimoidian_NEGAS.jpg";
import img12 from "../../assets/images/species_images/Gungan_warrior.png";
import img13 from "../../assets/images/species_images/Wattoep2promotionalfull.jpg";
import img14 from "../../assets/images/species_images/Dug_full_body.png";
import img15 from "../../assets/images/species_images/Twileks.png";
import img16 from "../../assets/images/species_images/Databank_aleena.png";
import img17 from "../../assets/images/species_images/Dud_Bolt_Podracer_Cockpit.png";
import img18 from "../../assets/images/species_images/Gasgano.jpg";
import img19 from "../../assets/images/species_images/BenQuadinarosFull-SWE.png";
import img20 from "../../assets/images/species_images/Mundi_bodyshot.png";
import img21 from "../../assets/images/species_images/Kitfisto_detail.png";
import img22 from "../../assets/images/species_images/ZabrakNEGAS.jpg";
import img23 from "../../assets/images/species_images/Tholothian-UP.png";
import img24 from "../../assets/images/species_images/Iktotchi_NEGAS.jpg";
import img25 from "../../assets/images/species_images/Yarael_Poof_USW.png";
import img26 from "../../assets/images/species_images/Plokoon_detail.png";
import img27 from "../../assets/images/species_images/Mas_Amedda_SWE.png";
import img28 from "../../assets/images/species_images/Geonosian_NEGAS.png";
import img29 from "../../assets/images/species_images/Mirialan_Diplomat.png";
import img30 from "../../assets/images/species_images/Clawdite_Shapeshifter_AoN.png";
import img31 from "../../assets/images/species_images/Dexter_Jettster.jpg";
import img32 from "../../assets/images/species_images/Kaminoan_FO_Arden_Beckwith.png";
import img33 from "../../assets/images/species_images/Wat_Tambor_SWE.png";
import img34 from "../../assets/images/species_images/N_Card.jpg";
import img35 from "../../assets/images/species_images/ShaakTi-TCWs3BR1.png";
import img36 from "../../assets/images/species_images/Kaleesh-Alien_Archive.jpg";
import img37 from "../../assets/images/species_images/Pauan.jpg";

// A pretty ugly hardcoded image seeker
export default function speciesReferences(url) {
  switch (url) {
    case "https://swapi.dev/api/species/1/":
      return { id: 1, img: img1, name: "Human" };

    case "https://swapi.dev/api/species/2/":
      return { id: 2, img: img2, name: "Droid" };

    case "https://swapi.dev/api/species/3/":
      return { id: 3, img: img3, name: "Wookiee" };

    case "https://swapi.dev/api/species/4/":
      return { id: 4, img: img4, name: "Rodian" };

    case "https://swapi.dev/api/species/5/":
      return { id: 5, img: img5, name: "Hutt" };

    case "https://swapi.dev/api/species/6/":
      return { id: 6, img: img6, name: "Yoda's species" };

    case "https://swapi.dev/api/species/7/":
      return { id: 7, img: img7, name: "Trandoshan" };

    case "https://swapi.dev/api/species/8/":
      return { id: 8, img: img8, name: "Mon Calamari" };

    case "https://swapi.dev/api/species/9/":
      return { id: 9, img: img9, name: "Ewoks" };

    case "https://swapi.dev/api/species/10/":
      return { id: 10, img: img10, name: "Sullustan" };

    case "https://swapi.dev/api/species/11/":
      return { id: 11, img: img11, name: "Neimoidian" };

    case "https://swapi.dev/api/species/12/":
      return { id: 12, img: img12, name: "Gungan" };

    case "https://swapi.dev/api/species/13/":
      return { id: 13, img: img13, name: "Toydarian" };

    case "https://swapi.dev/api/species/14/":
      return { id: 14, img: img14, name: "Dug" };

    case "https://swapi.dev/api/species/15/":
      return { id: 15, img: img15, name: "Twi'lek" };

    case "https://swapi.dev/api/species/16/":
      return { id: 16, img: img16, name: "Aleena" };

    case "https://swapi.dev/api/species/17/":
      return { id: 17, img: img17, name: "Vulptereen" };

    case "https://swapi.dev/api/species/18/":
      return { id: 18, img: img18, name: "Xexto" };

    case "https://swapi.dev/api/species/19/":
      return { id: 19, img: img19, name: "Toong" };

    case "https://swapi.dev/api/species/20/":
      return { id: 20, img: img20, name: "Cerean" };

    case "https://swapi.dev/api/species/21/":
      return { id: 21, img: img21, name: "Nautolan" };

    case "https://swapi.dev/api/species/22/":
      return { id: 22, img: img22, name: "Zabrak" };

    case "https://swapi.dev/api/species/23/":
      return { id: 23, img: img23, name: "Tholothian" };

    case "https://swapi.dev/api/species/24/":
      return { id: 24, img: img24, name: "Iktotchi" };

    case "https://swapi.dev/api/species/25/":
      return { id: 25, img: img25, name: "Quermian" };

    case "https://swapi.dev/api/species/26/":
      return { id: 26, img: img26, name: "Kel Dor" };

    case "https://swapi.dev/api/species/27/":
      return { id: 27, img: img27, name: "Chagrian" };

    case "https://swapi.dev/api/species/28/":
      return { id: 28, img: img28, name: "Geonosian" };

    case "https://swapi.dev/api/species/29/":
      return { id: 29, img: img29, name: "Mirialan" };

    case "https://swapi.dev/api/species/30/":
      return { id: 30, img: img30, name: "Clawdite" };

    case "https://swapi.dev/api/species/31/":
      return { id: 31, img: img31, name: "Besalisk" };

    case "https://swapi.dev/api/species/32/":
      return { id: 32, img: img32, name: "Kaminoan" };

    case "https://swapi.dev/api/species/33/":
      return { id: 33, img: img33, name: "Skakoan" };

    case "https://swapi.dev/api/species/34/":
      return { id: 34, img: img34, name: "Muun" };

    case "https://swapi.dev/api/species/35/":
      return { id: 35, img: img35, name: "Togruta" };

    case "https://swapi.dev/api/species/36/":
      return { id: 36, img: img36, name: "Kaleesh" };

    case "https://swapi.dev/api/species/37/":
      return { id: 37, img: img37, name: "Pau'an" };

    default:
      return notFound;
  }
}
