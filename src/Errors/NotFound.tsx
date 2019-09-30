import React from 'react'
import './NotFound.css'

interface NotFoundProps {
}

interface NotFoundState {
}

class NotFound extends React.PureComponent<NotFoundProps, NotFoundState> {
    render() {
        return (
            <h1 className='Message'>Error: Page not found <span role='img' aria-label='ghost'>👻</span></h1>
        )
    }
}

export { NotFound, }