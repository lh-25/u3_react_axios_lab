import { useState } from "react"
import { Route,Routes,Link } from "react-router-dom"

import Home from "./Home"

import StarshipList from "./StarshipList"
import FilmsList from "./FilmsList"
import PlanetsList from "./PlanetsList"
import CharactersList from "./CharactersList"


import StarshipPage from "./StarshipPage"
import FilmPage from "./FilmPage"
import CharacterPage from "./CharacterPage"
import PlanetPage from "./PlanetPage"


export default function Main ({starships,characters,films,planets}) {

  return (
   <>
   <Nav />
    <Routes>
    <Route path='/' element={<Home  />} />
    <Route path='/starships' element={<StarshipList starships={starships}/>} />
    <Route  path='starships/:starshipName' element={<StarshipPage starships={starships} />}/>
    <Route path='/films' element={<FilmsList films={films}/>} />
    </Routes>
    <Route  path='films/:filmTitle' element={<FilmPage films={films} />}/>
    <Route path='/planets' element={<PlanetsList planets={planets}/>} />
    <Route  path='planets/:planetName' element={<PlanetPage planets={planets} />}/>
    <Route path='/characters' element={<CharactersList characters={characters}/>} />
    <Route  path='characters/:characterName' element={<CharacterPage characters={characters} />}/>

   </>
  )
 }