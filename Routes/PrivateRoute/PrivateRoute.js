import React from 'react'
import {Route, Redirect} from 'react-router-dom'

export default function PrivateRoute({component, ...props}) {

    const Component = component;
    const boolean = false;
    return (
        <Route
            {...props}
            render={componentProps =>
                boolean ?
                    <Component currentActive={componentProps.location} {...componentProps} />
                    : (
                        <Redirect
                            to={{
                                pathname: '/',
                                state: {from: componentProps.location},
                            }}
                        />
                    )
            }
        />
    )
}
