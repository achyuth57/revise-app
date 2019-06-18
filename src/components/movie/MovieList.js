import React from 'react'
import PropTypes from 'prop-types'
import MovieCard from './MovieCard'


const getMovies = (movies) => {
    return(
        <div className='card-desk'>
            {
                movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
            }
        </div>
    )
}

const MovieList = (props) => {
    return(
        <div>
            {getMovies(props.movies)}
        </div>
    )
}
MovieList.defaultProps = {
    movies:[]
}
MovieList.prototype = {
    movies:PropTypes.array
}

export default MovieList;

