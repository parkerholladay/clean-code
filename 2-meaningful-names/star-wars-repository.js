const axios = require('axios')

const baseUrl = `https://swapi.co/api`

async function makeGetRequest(url) {
  try {
    return axios.get(url)
  } catch (error) {
    console.log(error)
  }
}

async function getPerson(personId) {
  const url = `${baseUrl}/people/${personId}`
  return makeGetRequest(url)
}

async function getPlanet(planetId) {
  const url = `${baseUrl}/planets/${planetId}`
  return makeGetRequest(url)
}

async function getStarship(starshipId) {
  const url = `${baseUrl}/starships/${starshipId}`
  return makeGetRequest(url)
}
