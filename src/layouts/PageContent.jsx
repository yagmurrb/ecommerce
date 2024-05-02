import React from "react";

import HomePage from "../pages/HomePage";
import { Route, Switch } from "react-router-dom";
import ProductDetailPage from "../pages/ProductDetailPage";
import ShopPage from "../pages/ShopPage";

function PageContent() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/productdetailpage">
          <ProductDetailPage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
      </Switch>
    </div>
  );
}

export default PageContent;
