import { useParams } from "react-router-dom"

export default function filmPage ({films}) {
  const {filmName} = useParams()
  console.log(filmName)
  const singlefilm = films.find((film) => film.name === filmName)
  console.log(singlefilm)

  return !singlefilm ? (<h1>film Not Found!</h1>) : (
    <>
      <h1>Film: {singlefilm.title}</h1>
      <h2>Details</h2>
      <dl>
      <dt>Crew:</dt> 
      <dd>{singlefilm.opening_crawl} </dd>
        <dt>Model:</dt>
        <dd> {singlefilm.episode_id}</dd>
        <dt>Manufacture:</dt>
        <dd>{singlefilm.director}</dd>
        <dt>Cost: </dt>
        <dd>{singlefilm.producer} </dd>
        <dt>Passengers:</dt>
        <dd>{singlefilm.release_date}</dd>
      </dl>
    </>
  )
}