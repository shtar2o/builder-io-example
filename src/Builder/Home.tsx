import React from 'react'
import { builder, BuilderComponent } from '@builder.io/react'
import { NotFound } from './../Errors/NotFound'

builder.init('81aa9277c42f4db9bd37132f8f2b29f8')

interface HomeProps {
}

interface HomeState {
    notFound: boolean
}

class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props)

        this.state = {
            notFound: false,
        }
    }

    render() {
        return (
            ! this.state.notFound ? (
            <BuilderComponent
                name={ 'page' }
                entry={ '8eba9528293c412ca905f7c7c522e227' }
                contentLoaded={ (data) => {
                    if (data === undefined) {
                        this.setState({ notFound: true, })
                    }
                } }
            /> ) : (
                <NotFound />
            )
        )
    }
}

export { Home, }