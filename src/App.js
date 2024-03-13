import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import PopularMovies from './components/PopularMovies'
import TopRatedMovies from './components/TopRatedMovies'
import UpcomingMovies from './components/UpcomingMovies'
import MovieDetails from './components/MovieDetails'
import SearchedMovies from './components/SearchedMovies'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={PopularMovies} />
          <Route path="/top-rated" component={TopRatedMovies} />
          <Route path="/upcoming" component={UpcomingMovies} />
          <Route path="/movie/:id" component={MovieDetails} />
          <Route path="/search/:query" component={SearchedMovies} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
