import React from "react";

import HomePage from "../pages/HomePage";
import { Route, Switch } from "react-router-dom";
import ProductDetailPage from "../pages/ProductDetailPage";

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
      </Switch>
    </div>
  );
}

export default PageContent;
