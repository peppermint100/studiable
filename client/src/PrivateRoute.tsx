import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute: React.FC<any> = ({ component: Component, currentUser, ...rest}) => {
      return(
        <Route
            {...rest}
            render={routeProps =>
                (currentUser.username && currentUser.email)
                ? <Component {...routeProps} />
                : <Redirect to="/login" />
            }/>
    )
}

export default PrivateRoute;