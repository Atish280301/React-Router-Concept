import React from "react";
import { NavLink } from 'react-router-dom';
import '../Styles/MainHeader.css';
const MainHeader = () => {
    return (
        <>
            <div>
                <NavLink activeClassName="active" className="nav-link" to="/Welcome">WelCome</NavLink>
                <NavLink activeClassName="active" className="nav-link" to="/Product">Product</NavLink>
            </div>
        </>
    );
}
export default MainHeader;