import React, {useState, useEffect} from 'react'

const PopularMovies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchPopularMovies()
  }, [])

  const fetchPopularMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=35a1e1bedb26fe18aeea320ab607a134&language=en-US&page=1`,
      )
      const data = await response.json()
      setMovies(data.results)
    } catch (error) {
      console.error('Error fetching popular movies:', error)
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

export default PopularMovies
