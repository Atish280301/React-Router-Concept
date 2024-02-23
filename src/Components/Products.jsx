import React from "react";
import { Link } from "react-router-dom";
const Products = () => {
    return (
        <>
            <h1>Welcome To Product Page</h1>
            <div><Link to="/Product/p1">Book</Link></div>
            <div><Link to="/Product/p2">Pen</Link></div>
            <div><Link to="/Product/p3">Calculator</Link></div>
        </>
    );
}
export default Products;