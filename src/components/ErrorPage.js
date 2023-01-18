import React from "react";
import { useRouteError } from "react-router-dom";
//useRouteError is a hook as it starts from use


const ErrorPage = () => {
    const {status, error :{message}} = useRouteError();
    console.log(useRouteError());
    return (
        <React.Fragment>
            <h1>Oops ... Page Not Found</h1>
            <h2>{message}</h2>
            <h2>{status}</h2>
        </React.Fragment>
    )
};

export default ErrorPage;