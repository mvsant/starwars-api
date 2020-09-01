export const baseUrl = "https://swapi.dev/api/";

export async function index(setData) {
  await fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => setData(data));
}

export async function indexFullPath(setData, url) {
  await fetch(url)
    .then((response) => response.json())
    .then((data) => setData(data));
}

export async function nestByOne(setData, parameter) {
  await fetch(`${baseUrl}${parameter}`)
    .then((response) => response.json())
    .then((data) => setData(data));
}

export async function nestByPage(setData, parameter, page) {
  await fetch(`${baseUrl}${parameter}/?search=&page=${page}`)
    .then((response) => response.json())
    .then((data) => setData(data));
}