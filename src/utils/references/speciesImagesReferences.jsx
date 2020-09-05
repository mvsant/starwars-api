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
import img31 from "../../assets/images/species_images/Dexter_Jettster_%28Besalisk%29_FF44.jpg";
import img32 from "../../assets/images/species_images/Kaminoan_FO_Arden_Beckwith.png";
import img33 from "../../assets/images/species_images/Wat_Tambor_SWE.png";
import img34 from "../../assets/images/species_images/N_Card.jpg";
import img35 from "../../assets/images/species_images/ShaakTi-TCWs3BR1.png";
import img36 from "../../assets/images/species_images/Kaleesh-Alien_Archive.jpg";
import img37 from "../../assets/images/species_images/Pau%27an.jpg";

// A pretty ugly hardcoded image seeker
export default function speciesImagesReferences(url) {
  switch (url) {
    case "https://swapi.dev/api/species/1/":
      return img1;

    case "https://swapi.dev/api/species/2/":
      return img2;

    case "https://swapi.dev/api/species/3/":
      return img3;

    case "https://swapi.dev/api/species/4/":
      return img4;

    case "https://swapi.dev/api/species/5/":
      return img5;

    case "https://swapi.dev/api/species/6/":
      return img6;

    case "https://swapi.dev/api/species/7/":
      return img7;

    case "https://swapi.dev/api/species/8/":
      return img8;

    case "https://swapi.dev/api/species/9/":
      return img9;

    case "https://swapi.dev/api/species/10/":
      return img10;

    case "https://swapi.dev/api/species/11/":
      return img11;

    case "https://swapi.dev/api/species/12/":
      return img12;

    case "https://swapi.dev/api/species/13/":
      return img13;

    case "https://swapi.dev/api/species/14/":
      return img14;

    case "https://swapi.dev/api/species/15/":
      return img15;

    case "https://swapi.dev/api/species/16/":
      return img16;

    case "https://swapi.dev/api/species/17/":
      return img17;

    case "https://swapi.dev/api/species/18/":
      return img18;

    case "https://swapi.dev/api/species/19/":
      return img19;

    case "https://swapi.dev/api/species/20/":
      return img20;

    case "https://swapi.dev/api/species/21/":
      return img21;

    case "https://swapi.dev/api/species/22/":
      return img22;

    case "https://swapi.dev/api/species/23/":
      return img23;

    case "https://swapi.dev/api/species/24/":
      return img24;

    case "https://swapi.dev/api/species/25/":
      return img25;

    case "https://swapi.dev/api/species/26/":
      return img26;
    case "https://swapi.dev/api/species/27/":
      return img27;

    case "https://swapi.dev/api/species/28/":
      return img28;

    case "https://swapi.dev/api/species/29/":
      return img29;

    case "https://swapi.dev/api/species/30/":
      return img30;

    case "https://swapi.dev/api/species/31/":
      return img31;

    case "https://swapi.dev/api/species/32/":
      return img32;

    case "https://swapi.dev/api/species/33/":
      return img33;

    case "https://swapi.dev/api/species/34/":
      return img34;

    case "https://swapi.dev/api/species/35/":
      return img35;

    case "https://swapi.dev/api/species/36/":
      return img36;

    case "https://swapi.dev/api/species/37/":
      return img37;

    default:
      return notFound;
  }
}
