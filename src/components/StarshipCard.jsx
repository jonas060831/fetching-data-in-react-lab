import React from 'react'

const StarshipCard = ({ ship }) => {
  return (
    <div>
        
        Name: {ship.name} <br />
        Class: {ship.starship_class} <br />
        Manufacturer: {ship.manufacturer} <br />
        Model {ship.model}
    </div>
  )
}

export default StarshipCard