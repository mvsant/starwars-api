import notFound from "../../assets/img.png";

// A pretty ugly hardcoded image seeker
export default function speciesImagesReferences(url) {
  switch (url) {
    case "https://swapi.dev/api/species/1/":
      return "https://vignette.wikia.nocookie.net/starwars/images/3/3f/HumansInTheResistance-TROS.jpg/revision/latest/scale-to-width-down/500?cb=20200305153027";

    case "https://swapi.dev/api/species/2/":
      return "https://vignette.wikia.nocookie.net/starwars/images/f/fb/Droid_Trio_TLJ_alt.png/revision/latest/scale-to-width-down/250?cb=20200223214952";

    case "https://swapi.dev/api/species/3/":
      return "https://vignette.wikia.nocookie.net/starwars/images/1/1e/Chewbacca-Fathead.png/revision/latest/scale-to-width-down/500?cb=20161108052810";

    case "https://swapi.dev/api/species/4/":
      return "https://vignette.wikia.nocookie.net/starwars/images/d/d3/Rodian_DICE.png/revision/latest/scale-to-width-down/241?cb=20151106032702";

    case "https://swapi.dev/api/species/5/":
      return "https://vignette.wikia.nocookie.net/starwars/images/1/19/JabbaPromo.png/revision/latest/scale-to-width-down/500?cb=20161110010925";

    case "https://swapi.dev/api/species/6/":
      return "https://vignette.wikia.nocookie.net/starwars/images/d/d5/MP-YodaSpecies.png/revision/latest/scale-to-width-down/500?cb=20140412000157";

    case "https://swapi.dev/api/species/7/":
      return "https://vignette.wikia.nocookie.net/starwars/images/7/72/Bossk_full_body.png/revision/latest/scale-to-width-down/269?cb=20160415124424";

    case "https://swapi.dev/api/species/8/":
      return "https://vignette.wikia.nocookie.net/starwars/images/2/23/The_Mon_Calamari.png/revision/latest/scale-to-width-down/349?cb=20150801202537";

    case "https://swapi.dev/api/species/9/":
      return "https://vignette.wikia.nocookie.net/starwars/images/a/a8/Ewoks_Encyclopedia.png/revision/latest/scale-to-width-down/350?cb=20160910212258";

    case "https://swapi.dev/api/species/10/":
      return "https://vignette.wikia.nocookie.net/starwars/images/f/f5/Sullustan_NEGAS.jpg/revision/latest/scale-to-width-down/499?cb=20100810063353";

    case "https://swapi.dev/api/species/11/":
      return "https://vignette.wikia.nocookie.net/starwars/images/5/52/Neimoidian_NEGAS.jpg/revision/latest/scale-to-width-down/295?cb=20061021200803";

    case "https://swapi.dev/api/species/12/":
      return "https://vignette.wikia.nocookie.net/starwars/images/d/d5/Gungan_warrior.png/revision/latest/scale-to-width-down/500?cb=20160911012903";

    case "https://swapi.dev/api/species/13/":
      return "https://vignette.wikia.nocookie.net/starwars/images/6/6e/Wattoep2promotionalfull.jpg/revision/latest/scale-to-width-down/499?cb=20081222024850";

    case "https://swapi.dev/api/species/14/":
      return "https://vignette.wikia.nocookie.net/starwars/images/2/2c/Dug_full_body.png/revision/latest/scale-to-width-down/350?cb=20140728150031";

    case "https://swapi.dev/api/species/15/":
      return "https://vignette.wikia.nocookie.net/starwars/images/5/54/Twileks.png/revision/latest/scale-to-width-down/289?cb=20151229035344";

    case "https://swapi.dev/api/species/16/":
      return "https://vignette.wikia.nocookie.net/starwars/images/a/a4/Databank_aleena.png/revision/latest/scale-to-width-down/500?cb=20160912123529";

    case "https://swapi.dev/api/species/17/":
      return "https://vignette.wikia.nocookie.net/starwars/images/7/73/Dud_Bolt_Podracer_Cockpit.png/revision/latest/scale-to-width-down/500?cb=20141214155313";

    case "https://swapi.dev/api/species/18/":
      return "https://vignette.wikia.nocookie.net/starwars/images/3/30/Gasgano.jpg/revision/latest/scale-to-width-down/241?cb=20150331133737";

    case "https://swapi.dev/api/species/19/":
      return "https://vignette.wikia.nocookie.net/starwars/images/1/18/BenQuadinarosFull-SWE.png/revision/latest/scale-to-width-down/249?cb=20160910192602";

    case "https://swapi.dev/api/species/20/":
      return "https://vignette.wikia.nocookie.net/starwars/images/b/be/Mundi_bodyshot.png/revision/latest/scale-to-width-down/203?cb=20140603153008";

    case "https://swapi.dev/api/species/21/":
      return "https://vignette.wikia.nocookie.net/starwars/images/8/81/Kitfisto_detail.png/revision/latest/scale-to-width-down/298?cb=20170608230157";

    case "https://swapi.dev/api/species/22/":
      return "https://vignette.wikia.nocookie.net/starwars/images/e/ee/ZabrakNEGAS.jpg/revision/latest/scale-to-width-down/500?cb=20070416170907";

    case "https://swapi.dev/api/species/23/":
      return "https://vignette.wikia.nocookie.net/starwars/images/6/66/Tholothian-UP.png/revision/latest/scale-to-width-down/236?cb=20190415010812";

    case "https://swapi.dev/api/species/24/":
      return "https://vignette.wikia.nocookie.net/starwars/images/f/f0/Iktotchi_NEGAS.jpg/revision/latest/scale-to-width-down/500?cb=20061202133616";

    case "https://swapi.dev/api/species/25/":
      return "https://vignette.wikia.nocookie.net/starwars/images/4/4f/Yarael_Poof_USW.png/revision/latest/scale-to-width-down/500?cb=20160701061715";

    case "https://swapi.dev/api/species/26/":
      return "https://vignette.wikia.nocookie.net/starwars/images/f/fd/Plokoon_detail.png/revision/latest/scale-to-width-down/273?cb=20111116042533";

    case "https://swapi.dev/api/species/27/":
      return "https://vignette.wikia.nocookie.net/starwars/images/c/c3/Mas_Amedda_SWE.png/revision/latest/scale-to-width-down/500?cb=20140529044319";

    case "https://swapi.dev/api/species/28/":
      return "https://vignette.wikia.nocookie.net/starwars/images/a/a0/Geonosian_NEGAS.png/revision/latest/scale-to-width-down/500?cb=20170226060952";

    case "https://swapi.dev/api/species/29/":
      return "https://vignette.wikia.nocookie.net/starwars/images/b/b7/Mirialan_Diplomat.png/revision/latest/scale-to-width-down/499?cb=20160207064156";

    case "https://swapi.dev/api/species/30/":
      return "https://vignette.wikia.nocookie.net/starwars/images/d/db/Clawdite_Shapeshifter_AoN.png/revision/latest/scale-to-width-down/500?cb=20190428225058";

    case "https://swapi.dev/api/species/31/":
      return "https://vignette.wikia.nocookie.net/starwars/images/8/83/Dexter_Jettster_%28Besalisk%29_FF44.jpg/revision/latest/scale-to-width-down/500?cb=20070712205318";

    case "https://swapi.dev/api/species/32/":
      return "https://vignette.wikia.nocookie.net/starwars/images/4/40/Kaminoan_FO_Arden_Beckwith.png/revision/latest/scale-to-width-down/500?cb=20180316124841";

    case "https://swapi.dev/api/species/33/":
      return "https://vignette.wikia.nocookie.net/starwars/images/d/d2/Wat_Tambor_SWE.png/revision/latest/scale-to-width-down/285?cb=20160930025610";

    case "https://swapi.dev/api/species/34/":
      return "https://vignette.wikia.nocookie.net/starwars/images/2/23/N_Card.jpg/revision/latest/scale-to-width-down/499?cb=20170524141921";

    case "https://swapi.dev/api/species/35/":
      return "https://vignette.wikia.nocookie.net/starwars/images/a/af/ShaakTi-TCWs3BR1.png/revision/latest/scale-to-width-down/222?cb=20200314025327";

    case "https://swapi.dev/api/species/36/":
      return "https://vignette.wikia.nocookie.net/starwars/images/d/d0/Kaleesh-Alien_Archive.jpg/revision/latest/scale-to-width-down/500?cb=20181011072919";

    case "https://swapi.dev/api/species/37/":
      return "https://vignette.wikia.nocookie.net/starwars/images/2/22/Pau%27an.jpg/revision/latest/scale-to-width-down/499?cb=20070705042952";

    default:
      return notFound;
  }
}
