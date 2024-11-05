import { Link } from "react-router-dom"
export default function StarshipList ({starships}) {

  return !starships ? (
    <h1>Loading Please Wait</h1>) : (
  <ul>
    {starships.map((starship) => (
      <li key={starship.name}>
       <Link to={`/starships/${starship._id}`}>{starship._id}</Link>
      </li>
    ))}
  </ul>
  )
 }