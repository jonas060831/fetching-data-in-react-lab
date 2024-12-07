import React from 'react'
import StarshipCard from './StarshipCard'

import Lottie from 'react-lottie'
import animationData from '../../Animation - 1733529455152.json'


const StarshipList = ({starWarsShips}) => {

  if(starWarsShips.length === 0) {
    return (
      <div 
       style={{
        width: '100vw',
        height: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      >
        <Lottie
         width={100} 
         height={100} 
         options={{loop: true, autoplay: true, animationData}}
         />
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
              <li key={index}>
                <StarshipCard ship={ship} />
              </li>
            ))
          }
          
    
        </ul>

      </section>
    )
  }
  
}

export default StarshipList