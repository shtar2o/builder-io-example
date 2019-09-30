import React from 'react'
import './App.css'
import { Home } from './Builder/Home'

function App() {
    return (
        <div className='App'>
            <h1 className='ContainerTitle'>
                builder.io @ example
            </h1>

            <div className='Builder'>
                {/** builder.io */}
                <Home />
            </div>
        </div>
    )
}

export { App, }