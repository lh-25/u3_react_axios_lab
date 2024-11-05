
export default function CharactersList ({characters}) {

  return !characters ? (
    <h1>Loading Please Wait</h1>) : (
  <div className="grid">
    {characters.map((character,index) => (
      <div key={index} className="card">
        <h2>{character.name}</h2>
        <h3>Crew: {character.birth_year}</h3> 
        <p>Model: {character.height}</p>
        <p>Manufacture: {character.hair_color}</p>
        <p>Cost: {character.eye_color}</p>
        <p>Passengers: {character.gender}</p>
      </div>
    ))}
  </div>
  )
 }