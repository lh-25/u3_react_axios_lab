import { useParams } from "react-router-dom"

export default function CharacterPage ({characters}) {
  const {characterName} = useParams()
  console.log(characterName)
  const singlecharacter = characters.find((character) => character.name === characterName)
  console.log(singlecharacter)

  return !singlecharacter ? (<h1>character Not Found!</h1>) : (
    <>
      <h1>character: {singlecharacter.name}</h1>
      <h2>Details</h2>
      <dl>
      <dt>Crew:</dt> 
      <dd>{singlecharacter.birth_year} </dd>
        <dt>Model:</dt>
        <dd> {singlecharacter.height}</dd>
        <dt>Manufacture:</dt>
        <dd>{singlecharacter.hair_color}</dd>
        <dt>Cost: </dt>
        <dd>{singlecharacter.eye_color} </dd>
        <dt>Passengers:</dt>
        <dd>{singlecharacter.gender}</dd>
      </dl>
    </>
  )
}