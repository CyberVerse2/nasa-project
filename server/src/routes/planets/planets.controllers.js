const { getAllPlanets } = require("../../models/planets.model");


async function httpGetAllPlanets(req, res) {
  const planets = await getAllPlanets()
  return await res.status(200).json(planets);
}

module.exports = {
  httpGetAllPlanets,
};
