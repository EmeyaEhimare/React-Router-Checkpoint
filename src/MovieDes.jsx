import movies from "./movies"
import { Link } from "react-router-dom"


const MovieDes = () => {
  return (
    <div>
    {movies.map((movie) => (
        // eslint-disable-next-line react/jsx-key
        <div className="flex flex-col items-center">
            
        <p>Description: {movie.description}</p>
        <iframe src={movie.trailer} frameBorder="0"></iframe>
        <Link to='/'><button className="border-2 border-amber-900 p-1 bg-amber-300 rounded-lg hover:bg-transparent m-2">Go Back</button></Link>
        </div>
    ))}
    </div>
  )
}

export default MovieDes
