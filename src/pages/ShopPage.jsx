import React from "react";
import DesktopCloths from "../components/shoppageComponents/DestkopCloths";
import CategoryList from "../components/shoppageComponents/CategoryList";
import FilterSide from "../components/shoppageComponents/FilterSide";
import Sponsors from "../components/Sponsors";

function ShopPage() {
  return (
    <div>
      <DesktopCloths />
      <FilterSide />
      <CategoryList />
      <Sponsors />
    </div>
  );
}

export default ShopPage;
