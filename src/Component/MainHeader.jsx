import React from "react";
import { Link } from 'react-router-dom';
const MainHeader = () => {
    return (
        <>
            <div>
                <Link to="/Welcome">WelCome</Link><br/>
                <Link to="/Product">Product</Link>
            </div>
        </>
    );
}
export default MainHeader;