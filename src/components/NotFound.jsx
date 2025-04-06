import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-white px-6">
            <div className="text-center">
                <h1 className="text-[100px] font-bold text-gray-800">404</h1>
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
                <p className="text-md text-gray-600 mb-6">
                    Oops! The page you're looking for doesn’t exist or is temporarily unavailable.
                </p>
                <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-orange-400 text-white rounded-full hover:bg-orange-500 transition"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
