export function namesMask(url) {
  if (url.match(/people/g)) {
    return "People"
  }
  else if (url.match(/films/g)) {
    return "Films"
  }
  else if (url.match(/planets/g)) {
    return "Planets"
  }
  else if (url.match(/vehicles/g)) {
    return "Vehicles"
  }
  else if (url.match(/starships/g)) {
    return "Starships"
  }
  else if (url.match(/species/g)) {
    return "Species"
  }
  else {
    return "Jabba!"
  }
}

export function urlMask(url) {
  if (url.match(/people/g)) {
    return '/people'
  }
  else if (url.match(/films/g)) {
    return "/films"
  }
  else if (url.match(/planets/g)) {
    return "/planets"
  }
  else if (url.match(/vehicles/g)) {
    return "/vehicles"
  }
  else if (url.match(/starships/g)) {
    return "/starships"
  }
  else if (url.match(/species/g)) {
    return "/species"
  }
  else {
    return "Jabba!"
  }
}

export function mask(name) {
  name = name.charAt(0).toUpperCase() + name.slice(1)
  return name.replace(/[_-]/g, " ")
}