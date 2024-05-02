import React from "react";
import DesktopCloths from "../components/shoppageComponents/DestkopCloths";
import CategoryList from "../components/shoppageComponents/CategoryList";
import FilterSide from "../components/shoppageComponents/FilterSide";

function ShopPage() {
  return (
    <div>
      <DesktopCloths />
      <FilterSide />
      <CategoryList />
    </div>
  );
}

export default ShopPage;
