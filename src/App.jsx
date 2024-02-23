import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import WelcomeFile from "./Components/WelcomeFile";
import Products from "./Components/Products";
import MainHeader from "./Component/MainHeader";
import ProductDetail from "./Components/ProductDetail";
const App = () => {
  return (
    <>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/Welcome" />
          </Route>
          <Route path="/Welcome">
            <WelcomeFile />
          </Route>
          <Route path="/Product" exact>
            <Products />
          </Route>
          <Route path="/Product/:productId" exact>
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </>
  );
}
export default App;