import React from "react";
import { Route } from 'react-router-dom';
import WelcomeFile from "./Components/WelcomeFile";
import Products from "./Components/Products";
import MainHeader from "./Component/MainHeader";
const App = () => {
  return (
    <>
      <MainHeader />
      <main>
        <Route path="/Welcome">
          <WelcomeFile />
        </Route>
        <Route path="/Product">
          <Products />
        </Route>
      </main>
    </>
  );
}
export default App;