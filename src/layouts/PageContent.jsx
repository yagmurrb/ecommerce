import React from "react";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import { Route, Switch } from "react-router-dom";
import TeamPage from "../pages/TeamPage";
import ContactPage from "../pages/ContactPage";

function PageContent() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/shop">
          <ShopPage />
        </Route>
        <Route exact path="/productdetailpage">
          <ProductDetailPage />
        </Route>
        <Route exact path="/teampage">
          <TeamPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Switch>
    </div>
  );
}

export default PageContent;
