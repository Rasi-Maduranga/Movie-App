import React from 'react'
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import MovieCard from '../components/MovieCard'

function Home () {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }catch(err){
                console.log(err)
                setError("Failed to load movies...")
            }
            finally{
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();
        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to search movie...")
        } finally {
            setLoading(false)
        }
    };

  return (
    <div class="container mx-auto">
        {/* <h1 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Our Products</h1> */}
        <form onSubmit={handleSearch}>
            <div className="m-6 flex max-w-md gap-x-4">
              <input
                type='text'
                value={searchQuery}
                onChange={ (e) => setSearchQuery(e.target.value)}
                placeholder="Search Movie"
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Search
              </button>
            </div>
        </form>

        {error && <div className="p-4 text-red-500">Error: {error}</div>}
        
        {loading ? (
            <div className="p-4 text-center text-2xl text-blue-500">Loading movies...</div>
        ) : (
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {movies.map((movie) =>
                (
                    <MovieCard movie={movie} key={movie.id} />
                ))}

            </div>
        )}

    </div>
  )
}

export default Home
