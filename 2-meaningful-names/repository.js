const axios = require('axios')

async function fetch(a) {
  const u = `https://swapi.co/api/people/${a}`
  try {
    return axios.get(u)
  } catch (e) {
    console.log(e)
  }
}

async function getPlanet(a) {
  try {
    return axios.get(`https://swapi.co/api/planets/${a}`)
  } catch (err) {
    console.log(err)
  }
}

async function retrieveThing(ship) {
  const rsc = `https://swapi.co/api/starships/${ship}`
  try {
    return axios.get(rsc)
  } catch (e) {
    console.log(e)
  }
}
