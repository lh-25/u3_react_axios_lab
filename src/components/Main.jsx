import { useState, useEffect } from "react"
import { Route,Routes } from "react-router-dom"
import axios from "axios"
import Home from "./Home"
import StarshipList from "./StarshipList"
import FilmsList from "./FilmsList"
import PlanetsList from "./PlanetsList"
import CharactersList from "./CharactersList"
import Nav from "./Nav"


export default function Main () {

  const [starships, setStarShips] = useState([])
  const [films, setFilms] = useState([])
  const [planets, setPlanets] = useState([])
  const [characters, setCharacters] = useState([])


  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get(`https://swapi.dev/api/starships/`)
      setStarShips(response.data.results)
    }
    getStarships()
  }, [])

  useEffect(() => {
    const getFilms = async () => {
      const response = await axios.get(`https://swapi.dev/api/films/`)
      setFilms(response.data.results)
    }
    getFilms()
  }, [])
  useEffect(() => {
    const getPlanets = async () => {
      const response = await axios.get(`https://swapi.dev/api/planets/`)
      setPlanets(response.data.results)
    }
    getPlanets()
  }, [])
  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get(`https://swapi.dev/api/people/`)
      setCharacters(response.data.results)
    }
    getCharacters()
  }, [])
  return (
   <>
   <Nav />
    <Routes>
    <Route path='/' element={<Home  />} />
    <Route path='/starships' element={<StarshipList starships={starships}/>} />
    <Route path='/films' element={<FilmsList films={films}/>} />
    </Routes>
    <Route path='/planets' element={<PlanetsList planets={planets}/>} />
    <Home />
    <Route path='/characters' element={<CharactersList characters={characters}/>} />

   </>
  )
 }