import React, {useState, useEffect} from 'react'

const MovieDetails = ({match}) => {
  const [movie, setMovie] = useState(null)
  const [cast, setCast] = useState([])

  useEffect(() => {
    fetchMovieDetails(match.params.id)
    fetchCastDetails(match.params.id)
  }, [match.params.id])

  const fetchMovieDetails = async id => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=35a1e1bedb26fe18aeea320ab607a134&language=en-US`,
      )
      const data = await response.json()
      setMovie(data)
    } catch (error) {
      console.error('Error fetching movie details:', error)
    }
  }

  const fetchCastDetails = async id => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=35a1e1bedb26fe18aeea320ab607a134&language=en-US`,
      )
      const data = await response.json()
      setCast(data.cast)
    } catch (error) {
      console.error('Error fetching cast details:', error)
    }
  }

  return (
    <div className="movie-details-container">
      {movie && (
        <div className="movie-details">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
          <p>Rating: {movie.vote_average}</p>
          <p>Duration: {movie.runtime} minutes</p>
          <p>Genre: {movie.genres.map(genre => genre.name).join(', ')}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Overview: {movie.overview}</p>
        </div>
      )}
      <div className="cast-details">
        <h3>Cast</h3>
        <div className="cast-container">
          {cast.map(actor => (
            <div key={actor.id} className="actor">
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
              />
              <p>Name: {actor.name}</p>
              <p>Character: {actor.character}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
