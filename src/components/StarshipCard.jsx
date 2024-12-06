import React from 'react'

const StarshipCard = ({ ship }) => {
  return (
    <div>

        <p>
            Name: {ship.name} <br />
            Class: {ship.starship_class} <br />
            Manufacturer: {ship.manufacturer} <br />
            Model {ship.model}
        
        </p>

    </div>
  )
}

export default StarshipCard