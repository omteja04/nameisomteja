import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import NotFound from './components/NotFound'
import UnderConstruction from './components/UnderConstruction'
const router = createBrowserRouter([
    {
        path: 'home',
        element: <div>
            <Navbar />
            <Home />
        </div>
    },
    {
        path: '/',
        element: <div>
            <Navbar />
            <Home />
        </div>
    },
    {
        path: 'about',
        element: <div>
            <Navbar />
            {/* <About /> */}
            <UnderConstruction />
        </div>
    },
    {
        path: 'skills',
        element: <div>
            <Navbar />
            <UnderConstruction />
        </div>
    },
    {
        path: 'projects',
        element: <div>
            <Navbar />
            <UnderConstruction />
        </div>
    },
    {
        path: 'contact',
        element: <div>
            <Navbar />
            <UnderConstruction />
        </div>
    },
    {
        path: '*',
        element: <NotFound />
    },
])
const App = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default App
