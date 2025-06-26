import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

const Favorites = () => {

    const {favorites} = useMovieContext();
    if (favorites) {
       return(
            <div>
                <h2 className="text-3xl text-center font-semibold text-gray-700 dark:text-gray-100 my-4">
                    Your Favorites
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">

                    {favorites.map((movie) =>
                    (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}

                </div>
            </div>
        )}

  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] bg-gray-50 dark:bg-gray-900 rounded-lg p-8 mt-6 text-center">
      <h2 className="text-xl font-semibold text-gray-700 dark:text-red-400 mb-2">
        No Favorites Yet
      </h2>
      <p className="text-gray-500 dark:text-gray-400 max-w-md">
        You haven't added any movies to your favorites. Click the ♡ button on movies to save them here!
      </p>
    </div>
  )
}

export default Favorites
