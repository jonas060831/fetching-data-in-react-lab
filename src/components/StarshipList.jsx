import React from 'react'
import StarshipCard from './StarshipCard'

const StarshipList = ({starWarsShips}) => {

  if(starWarsShips.length === 0) {
    return (
      <div>
        Loading...
      </div>
    )
  } else {
    return (
      <section>
        <h3>Starships</h3>

        <p>Number of results: {starWarsShips.length}</p>
        <ul>
          
          {
            starWarsShips.map( (ship, index) => (
              <li>
                <StarshipCard ship={ship} key={index}/>
              </li>
            ))
          }
          
    
        </ul>

      </section>
    )
  }
  
}

export default StarshipList