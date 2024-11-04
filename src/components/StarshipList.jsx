
export default function StarshipList ({starships}) {

  return !starships ? (
    <h1>Loading Please Wait</h1>) : (
  <div className="grid">
    {starships.map((starship,index) => (
      <div key={index} className="card">
        <h2>{starship.name}</h2>
        <h3>Crew: {starship.crew}</h3> 
        <p>Model: {starship.model}</p>
        <p>Manufacture: {starship.manufacture}</p>
        <p>Cost: {starship.cost_in_credits}</p>
        <p>Passengers: {starship.passengers}</p>
      </div>
    ))}
  </div>
  )
 }