import { useParams } from "react-router-dom"

export default function CharacterPage ({characters}) {
  const {characterName} = useParams()
  console.log(characterName)
  const singlecharacter = characters.find((character) => character.name === characterName)
  console.log(singlecharacter)

  return !singlecharacter ? (<h1>character Not Found!</h1>) : (
    <>
      <h1>Character: {singlecharacter.name}</h1>
      <h2>Details</h2>
      <dl>
      <dt>Birth Year:</dt> 
      <dd>{singlecharacter.birth_year} </dd>
        <dt>Height:</dt>
        <dd> {singlecharacter.height}</dd>
        <dt>Hair Color:</dt>
        <dd>{singlecharacter.hair_color}</dd>
        <dt>Eye Color: </dt>
        <dd>{singlecharacter.eye_color} </dd>
        <dt>Gender:</dt>
        <dd>{singlecharacter.gender}</dd>
      </dl>
    </>
  )
}