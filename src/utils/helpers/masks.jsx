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

// At this point, it is one switch refactored !!!
export function categoryMask(category,item){
 item = {
    "height": `${item / 100} m`,
    "mass": item === 'unknown' ? 'unknown':`${item} Kg`,
    "rotation_period": `${item} days`,
    "orbital_period": `${item} days`,
    "diameter": item === 'unknown' ? 'unknown':`${Number(item).toLocaleString()} Km`,
    "surface_water": item === 'unknown' ? 'unknown':`${item} %`,
    "population": item === 'unknown' ? 'unknown':`${Number(item).toLocaleString()} habitants`,
    "cost_in_credits": item === 'unknown' ? 'unknown':`${Number(item).toLocaleString()} credits`,
    "length": `${item} m`,
    "max_atmosphering_speed": isNaN(item) ? item:`${Number(item).toLocaleString()} Mph`,
    "passengers": isNaN(item) ? item:`${Number(item).toLocaleString()} member(s)`,
    "crew": `${item} member(s)`,
    "cargo_capacity": isNaN(item) ? item:`${Number(item).toLocaleString()} ton(s)`,
    "average_height": item === 'unknown' ? 'unknown':`${item / 100} m`,
    "average_lifespan": item === 'unknown' ? 'unknown':`${item} years`,
    "default": item,
  }
  return (item[category]||item["default"]);
}