
import movies from './movies.json'

class MovieService {
    static getMovies(){
    return movies ? movies : [];
 }
}

export default MovieService
