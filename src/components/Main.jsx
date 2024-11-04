import { useState, useEffect } from "react"
import axios from "axios"
import Home from "./Home"
import StarshipList from "./StarshipList"


export default function Main () {

  const [starships, setStarShips] = useState([])

  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get(`https://swapi.dev/api/starships/`)
      setStarShips(response.data.results)
    }
    getStarships()
  }, [])
  return (
   <>
   <main>
    <Home />
    <StarshipList starships={starships}/>
   </main>
   </>
  )
 }