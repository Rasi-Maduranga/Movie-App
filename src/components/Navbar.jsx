import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="bg-gray-600 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-15">

                    <div className="flex items-center">
                        <Link to="/" className="text-xl font-bold text-gray-900 text-white">My Movie</Link>
                    </div>


                    <div className="flex items-center space-x-4">
                        <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-100 hover:text-blue-200">Home</Link>
                        <Link to="/favorites" className="px-3 py-2 text-sm font-medium text-gray-100 hover:text-blue-200 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            Favorites
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
