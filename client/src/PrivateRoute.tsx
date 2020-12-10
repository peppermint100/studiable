import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "./redux/reducers/rootReducer";
import { meRequest } from "./redux/actions/Auth/authActions";

const PrivateRoute: React.FC<{component: any}> = ({ component: Component, ...rest}) => {

    const [cookies, _] = useCookies();
    const dispatch = useDispatch();
    const currentUser = useSelector((state: RootReducerType) => state.authReducers);

    useEffect(() => {
        if(cookies.Authorization){
            const token = cookies.Authorization;
            dispatch(meRequest(token));
        }
    }, [dispatch])

    return(
        <Route {...rest} 
            render={ props => (
                currentUser 
                ? <Component {...props} />
                : <Redirect to="/login" />
            )} />
    )
}

export default PrivateRoute;