import React from "react";
import { Route } from 'react-router-dom';
import WelcomeFile from "./Components/WelcomeFile";
import Products from "./Components/Products";
const App = () => {
  return (
    <>
      <Route path="/Welcome">
        <WelcomeFile />
      </Route>
      <Route path="/Product">
        <Products />
      </Route>
    </>
  );
}
export default App;