import { useParams } from "react-router-dom"

export default function planetPage ({planets}) {
  const {planetName} = useParams()
  console.log(planetName)
  const singleplanet = planets.find((planet) => planet.name === planetName)
  console.log(singleplanet)

  return !singleplanet ? (<h1>planet Not Found!</h1>) : (
    <>
      <h1>Planet: {singleplanet.name}</h1>
      <h2>Details</h2>
      <dl>
      <dt>Climate</dt> 
      <dd>{singleplanet.climate} </dd>
        <dt>Terrian:</dt>
        <dd> {singleplanet.terrain}</dd>
        <dt>Rotation Period:</dt>
        <dd>{singleplanet.rotation_period}</dd>
        <dt>Population: </dt>
        <dd>{singleplanet.population} </dd>
        <dt>Obital Period:</dt>
        <dd>{singleplanet.orbital_period}</dd>
      </dl>
    </>
  )
}