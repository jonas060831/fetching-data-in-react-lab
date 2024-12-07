import React, { useEffect, useState } from 'react'



const StarshipSearch = ({updateTheList}) => {


  //state from the form input onChange
  
  const [inputValue , setInputValue] = useState('')
  
  const handleSearch = (event) => {

    event.preventDefault()
    console.log(inputValue)
    updateTheList(inputValue)
    setInputValue('')
  }

  const handleChange = (event) => {
    const wordSearch = event.target.value
    setInputValue(wordSearch)
  }

  useEffect(() => {
    
  }, [inputValue])

  return (
    <div >
        <h3>Search</h3>
    
        <form onSubmit={handleSearch}>

             <label htmlFor="search">Search Term:</label>

             <input
              type="text"
              name="search"
              id="search"
              value={inputValue}
              onChange={handleChange}
             />

             <button type="submit">Search</button>
        </form>

    </div>
  )
}

export default StarshipSearch