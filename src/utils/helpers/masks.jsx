export function namesMask(url) {
  if (url.match(/people/g)) {
    return "People";
  } else if (url.match(/films/g)) {
    return "Films";
  } else if (url.match(/planets/g)) {
    return "Planets";
  } else if (url.match(/vehicles/g)) {
    return "Vehicles";
  } else if (url.match(/starships/g)) {
    return "Starships";
  } else if (url.match(/species/g)) {
    return "Species";
  } else {
    return "Jabba!";
  }
}

export function urlMask(url) {
  if (url.match(/people/g)) {
    return "/people";
  } else if (url.match(/films/g)) {
    return "/films";
  } else if (url.match(/planets/g)) {
    return "/planets";
  } else if (url.match(/vehicles/g)) {
    return "/vehicles";
  } else if (url.match(/starships/g)) {
    return "/starships";
  } else if (url.match(/species/g)) {
    return "/species";
  } else {
    return "Jabba!";
  }
}

export function mask(name) {
  name = name.charAt(0).toUpperCase() + name.slice(1);
  return name.replace(/[_-]/g, " ");
}

// It's messy but works !!!
export function categoryMask(category, item) {
  switch (category) {
    case "height":
      return `${item / 100} m`;

    case "mass":
      return `${item} Kg`;

    case "rotation_period":
      return `${item} days`;

    case "orbital_period":
      return `${item} days`;

    case "diameter":
      return `${Number(item).toLocaleString()} Km`;

    case "surface_water":
      return `${item} %`;

    case "population":
      return `${Number(item).toLocaleString()} habitants`;

    case "cost_in_credits":
      return `${Number(item).toLocaleString()} credits`;

    case "length":
      return `${item} m`;

    case "max_atmosphering_speed":
      return `${Number(item).toLocaleString()} Mph`;

    case "crew":
      return `${item} member(s)`;

    case "cargo_capacity":
      return `${Number(item).toLocaleString()} ton(s)`;

    case "average_height":
      return `${item / 100} m`;

    case "average_lifespan":
      return `${item} years`;

    default:
      return item;
  }
}
