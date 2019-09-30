import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { builder, BuilderComponent } from '@builder.io/react'
import { NotFound } from './../Errors/NotFound'
import './Home.css'

builder.init('81aa9277c42f4db9bd37132f8f2b29f8')

interface HomeProps {
}

interface HomeState {
    notFound: boolean
    isLoaded: boolean
}

class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props)

        this.state = {
            notFound: false,
            isLoaded: false,
        }
    }

    render() {
        return (
            ! this.state.notFound ? (
                <CSSTransition
                    in={ this.state.isLoaded }
                    timeout={ 300 }
                    classNames={ 'Builder' }
                >
                    <BuilderComponent
                        name={ 'page' }
                        entry={ '8eba9528293c412ca905f7c7c522e227' }
                        contentLoaded={ (data) => {
                            if (data === undefined) {
                                this.setState({ notFound: true, })
                            } else {
                                this.setState({ isLoaded: true, })
                            }
                        } }
                    />
                </CSSTransition>
            ) : (
                <NotFound />
            )
        )
    }
}

export { Home, }