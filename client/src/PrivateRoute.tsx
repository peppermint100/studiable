import React from "react";
import { Route, Redirect } from "react-router-dom";
import {  useSelector } from "react-redux";
import { RootReducerType } from "./redux/reducers/rootReducer";

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest}) => {

    const currentUser = useSelector((state: RootReducerType) => state.authReducers);

      return(
        <Route
            {...rest}
            render={routeProps =>
                !!(currentUser.email && currentUser.username) ? (
                <Component {...routeProps} />
                ) : (
                <Redirect to={"/login"} />
                )
            }
            />
    )
}

export default PrivateRoute;