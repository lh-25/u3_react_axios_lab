import { Link } from "react-router-dom"
export default function PlanetsList ({planets}) {

  return !planets ? (
    <h1>Loading Please Wait</h1>) : (
  <div>
    {planets.map((planet,index) => (
      <div key={index}>
        <Link to={`/planets/${planet.name}`}>{planet.name}</Link>
        <h3>Crew: {planet.climate}</h3> 
        <p>Model: {planet.terrain}</p>
        <p>Manufacture: {planet.rotation_period}</p>
        <p>Cost: {planet.population}</p>
        <p>Passengers: {planet.orbital_period}</p>
      </div>
    ))}
  </div>
  )
 }