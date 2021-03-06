import { Route, Redirect } from 'react-router-dom';
import React from 'react';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        rest.isLogin ? (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default PrivateRoute;
