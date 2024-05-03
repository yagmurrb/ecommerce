import React from "react";
import CategoryCard from "../reusableComponents/CategoryCard";
import { CategoryCardData } from "../../data/data";

function Editor() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center text-center mt-20 mb-12">
        <h3 className="font-bold text-text-color text-h3">EDITOR'S PICK</h3>
        <p className="text-second-text-color text-paragraph">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="flex resimalani max-w-[1050px] mx-auto">
        <div className=" flex  w-1/2 bir numara">
          <CategoryCard
            src={CategoryCardData[0].url}
            title={CategoryCardData[0].category}
          />
        </div>
        <div className="flex  w-1/4  iki numara">
          <div className="flex ">
            <CategoryCard
              src={CategoryCardData[1].url}
              title={CategoryCardData[1].category}
            />
          </div>
        </div>
        <div className=" flex-col w-1/4   uc numara">
          <div>
            <CategoryCard
              src={CategoryCardData[2].url}
              title={CategoryCardData[2].category}
            />
          </div>
          <div>
            <CategoryCard
              src={CategoryCardData[3].url}
              title={CategoryCardData[3].category}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;
