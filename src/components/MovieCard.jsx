 import { useMovieContext } from "../contexts/MovieContext"

function MovieCard ({movie}) {

    const {addToFavorites, removeFromFavorite, isFavorite} = useMovieContext()
    const favorite = isFavorite(movie.id)

    function onFavoriteClick(e)
    {
        e.preventDefault()
        if (favorite) removeFromFavorite(movie.id)
        else addToFavorites(movie)
    }

  return (

        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-md transition-shadow">
            <a href="#">
                <img className="p-8 rounded-t-lg w-full h-fit object-contain" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">{movie.title}</h5>
                </a>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{movie.release_date?.split("-")[0]}</span>
                    <button 
                    onClick={onFavoriteClick}
                    href="#" 
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-4xl text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {favorite ? "❤️" : "🤍" }
                    </button>
                </div>
            </div>
        </div>

  )
}

export default MovieCard
