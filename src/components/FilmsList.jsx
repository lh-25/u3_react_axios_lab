import { Link } from "react-router-dom"
export default function FilmsList ({films}) {

  return !films ? (
    <h1>Loading Please Wait</h1>) : (
  <div>
    {films.map((film,index) => (
      <div key={index} >
        <Link to={`/films/${film.title}`}>{film.title}</Link>
      </div>
    ))}
  </div>
  )
 }