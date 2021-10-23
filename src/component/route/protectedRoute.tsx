import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';


interface ProtectedRouteProps extends RouteProps {
    component: any;
    user: any;
    handleLogout: Function
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
    const { component: Component, user, ...rest } = props;
    return (
        <Route {...rest} render={
          props => {
            if (user) {
              return <Component {...rest} {...props} />
            } else {
              return <Redirect to={
                {
                  pathname: '/unauthorized',
                  state: {
                    from: props.location
                  }
                }
              } />
            }
          }
        } />
      )
}

export default ProtectedRoute;
