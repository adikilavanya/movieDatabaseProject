import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const SearchedMovies = () => {
  const {query} = useParams() // Extracts the 'query' parameter from the URL
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchSearchedMovies(query) // Calls fetchSearchedMovies with the search query
  }, [query])

  const fetchSearchedMovies = async query => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=35a1e1bedb26fe18aeea320ab607a134&language=en-US&query=${query}&page=1`,
      )
      const data = await response.json()
      setMovies(data.results)
    } catch (error) {
      console.error('Error fetching searched movies:', error)
    }
  }

  return (
    <div className="movies-container">
      {movies.map(movie => (
        <div key={movie.id} className="movie">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
          <p>Rating: {movie.vote_average}</p>
          <button>View Details</button>
        </div>
      ))}
    </div>
  )
}

export default SearchedMovies
