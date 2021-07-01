export function urlMask(url) {
  const extract = url.slice(22, -1);
  return extract;
}

export function mask(name) {
  name = name.charAt(0).toUpperCase() + name.slice(1);
  return name.replace(/[_-]/g, " ");
}

// At this point, it is one switch refactored !!!
export function categoryMask(category, item) {
  item = {
    height: `${item / 100} m`,
    mass: item === "unknown" ? "unknown" : `${item} Kg`,
    rotation_period: `${item} days`,
    orbital_period: `${item} days`,
    diameter:
      item === "unknown" ? "unknown" : `${Number(item).toLocaleString()} Km`,
    surface_water: item === "unknown" ? "unknown" : `${item} %`,
    population:
      item === "unknown"
        ? "unknown"
        : `${Number(item).toLocaleString()} habitants`,
    cost_in_credits:
      item === "unknown"
        ? "unknown"
        : `${Number(item).toLocaleString()} credits`,
    length: `${item} m`,
    max_atmosphering_speed: isNaN(item)
      ? item
      : `${Number(item).toLocaleString()} Mph`,
    passengers: isNaN(item)
      ? item
      : `${Number(item).toLocaleString()} member(s)`,
    crew: `${item} member(s)`,
    cargo_capacity: isNaN(item)
      ? item
      : `${Number(item).toLocaleString()} ton(s)`,
    average_height: item === "unknown" ? "unknown" : `${item / 100} m`,
    average_lifespan: item === "unknown" ? "unknown" : `${item} years`,
    default: item,
  };
  return item[category] || item["default"];
}
