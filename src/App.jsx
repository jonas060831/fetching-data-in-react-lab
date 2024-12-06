// src/App.jsx

import { useEffect, useState } from "react"
import StarshipList from "./components/StarshipList"
import StarshipSearch from "./components/StarshipSearch"

import './App.css'

const App = () => {


  //we need StarshipSearch
  //StarshiList
  //StarshipCard
  const [starWarsShips, setStarWarsShips] = useState([])
  
  
    const BASE_URL = 'https://swapi.dev/api'

    const fetchStarWarsShips = async() => {
        

        try {
        //reading the documentation
        const response = await fetch(`${BASE_URL}/starships`)
        const jsonData = await response.json()

        //console.log(jsonData.results)
        setStarWarsShips(jsonData.results)
        
        } catch (error) {
          console.log(error)
        }
    }

    //comes from starship search component JOB get event.target.value fomr input text
    const updateTheList = (inputValue) => {
      
      if(!inputValue) {
        //ships in the api
        fetchStarWarsShips()
      } else {

        //
        const filteredSearch = (starWarsShips.filter(ship => {

          return ship.name.toLowerCase().includes(inputValue.toLowerCase())
        }))
  
        setStarWarsShips(filteredSearch)

        console.log(filteredSearch)
      }

      // const searchQuery = inputValue.toLowerCase()
      // console.log(searchQuery)

      // console.log(starWarsShips)
      // const filteredSearch = starWarsShips.filter( ship => ship.name.contains('CR90'))


      // console.log(filteredSearch)
    }

    //lets go and fetch all the ships
    useEffect(() => {
      fetchStarWarsShips()
    }, [])




  return (
    <main>

      <h1>Star Wars API</h1>

      <StarshipSearch updateTheList={updateTheList}/>
        
      <StarshipList starWarsShips={starWarsShips}/>

      

    </main>
  );
}

export default App
