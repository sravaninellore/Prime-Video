// Write your code here
import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  constructor(props) {
    super(props)
    this.state = {moviesList: props.moviesList}
  }

  actionMovies = () => {
    const {moviesList} = this.state
    const actionMoviesList = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'ACTION',
    )

    return actionMoviesList
  }

  comedyMovies = () => {
    const {moviesList} = this.state
    const comedyMoviesList = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'COMEDY',
    )

    return comedyMoviesList
  }

  render() {
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-video"
        />
        <div className="movie-container">
          <h1 className="movie-heading">Action Movies</h1>
          <MoviesSlider moviesList={this.actionMovies()} />
          <h1 className="movie-heading">Comedy Movies</h1>
          <MoviesSlider moviesList={this.comedyMovies()} />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
