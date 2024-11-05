import { useParams } from "react-router-dom"

export default function planetPage ({planets}) {
  const {planetName} = useParams()
  console.log(planetName)
  const singleplanet = planets.find((planet) => planet.name === planetName)
  console.log(singleplanet)

  return !singleplanet ? (<h1>planet Not Found!</h1>) : (
    <>
      <h1>planet: {singleplanet.name}</h1>
      <h2>Details</h2>
      <dl>
      <dt>Crew:</dt> 
      <dd>{singleplanet.climate} </dd>
        <dt>Model:</dt>
        <dd> {singleplanet.terrain}</dd>
        <dt>Manufacture:</dt>
        <dd>{singleplanet.rotation_period}</dd>
        <dt>Cost: </dt>
        <dd>{singleplanet.population} </dd>
        <dt>Passengers:</dt>
        <dd>{singleplanet.orbital_period}</dd>
      </dl>
    </>
  )
}