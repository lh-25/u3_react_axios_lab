import { Link } from "react-router-dom"
export default function StarshipList ({starships}) {

  return !starships ? (
    <h1>Loading Please Wait</h1>) : (
  <div>
    {starships.map((starship, index) => (
      <div key={index}>
       <Link to={`/starships/${starship.name}`}>{starship.name}</Link>
      </div>
    ))}
  </div>
  )
 }