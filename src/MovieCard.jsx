
import Button from "./Button"
import movies from "./movies"
import { Link } from "react-router-dom"


const MovieCard = () => {
  return (
    <>
    <div>

    <div className="flex flex-col text-center items-center my-2"> 
      {movies.map((movie) => (
        <>
        <div className="">
            <img className="" src={movie.photoUrl} alt="" />
        </div>
        <div>
        <p className="font-black font-serif">{movie.title}</p>
        </div>
        <div>
        <Link className="" to='/moviedes'><Button props='More Details'/></Link>
        </div>
        </>
      ))}
      <div>
        
      </div>
    </div>
    </div></>
  )
}

export default MovieCard
