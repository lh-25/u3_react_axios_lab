
export default function FilmsList ({films}) {

  return !films ? (
    <h1>Loading Please Wait</h1>) : (
  <div className="grid">
    {films.map((film,index) => (
      <div key={index} className="card">
        <h2>{film.title}</h2>
        <h3>Crew: {film.opening_crawl}</h3> 
        <p>Model: {film.episode_id}</p>
        <p>Manufacture: {film.director}</p>
        <p>Cost: {film.peoducer}</p>
        <p>Passengers: {film.release_date}</p>
      </div>
    ))}
  </div>
  )
 }