
export default function PlanetsList ({planets}) {

  return !planets ? (
    <h1>Loading Please Wait</h1>) : (
  <div className="grid">
    {planets.map((planet,index) => (
      <div key={index} className="card">
        <h2>{planet.name}</h2>
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