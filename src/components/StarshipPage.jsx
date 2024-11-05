import { useParams } from "react-router-dom"

export default function StarshipDetails ({starships}) {
  const {starshipId} = useParams()
  console.log(starshipId)
  const singleStarship = starships.find((ship) => ship._id === Number(starshipId))
  console.log(singleStarship)

  return !singleStarship ? (<h1>Starship Not Found!</h1>) : (
    <>
      <h1>Starship: {singleStarship.name}</h1>
      <h2>Details</h2>
      <dl>
      <dt>Crew:</dt> 
      <dd>{singleStarship.crew} </dd>
        <dt>Model:</dt>
        <dd> {singleStarship.model}</dd>
        <dt>Manufacture:</dt>
        <dd>{singleStarship.manufacture}</dd>
        <dt>Cost: </dt>
        <dd>{singleStarship.cost_in_credits} </dd>
        <dt>Passengers:</dt>
        <dd>{singleStarship.passengers}</dd>
      </dl>
    </>
  )
}