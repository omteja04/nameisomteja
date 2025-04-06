import React from 'react';
import { Construction } from 'lucide-react';
import { Link } from 'react-router-dom';

const UnderConstruction = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-orange-800 p-6 bg-white">
            <Construction className="w-16 h-16 mb-4" />
            <h1 className="text-4xl font-bold mb-2">Page Under Construction</h1>
            <p className="text-lg text-center max-w-md text-orange-700">
                We're currently working on this page. It'll be live soon. Thanks for your patience!
            </p>
            <Link
                to="/"
                className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-md transition-all"
            >
                Go back to Home
            </Link>
        </div>
    );
};

export default UnderConstruction;
