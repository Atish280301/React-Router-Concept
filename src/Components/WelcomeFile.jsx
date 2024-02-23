import React from "react";
import { Route } from 'react-router-dom';
const WelcomeFile = () => {
    return (
        <>
            <h1>Welcome To Our App!</h1>
            <Route path="/Welcome/new-user">
                <p>Welcome To New User Section </p>
            </Route>
        </>
    );
}
export default WelcomeFile;