import React from "react";

import BuyMe from "../components/homepageComponents/BuyNow";
import CarouselTop from "../components/homepageComponents/CarouselTop";
import FeaturedPosts from "../components/homepageComponents/FeaturedPosts";
import BestSeller from "../components/homepageComponents/BestSeller";
import CarouselBottom from "../components/homepageComponents/CarouselBottom";
import Editor from "../components/homepageComponents/Editor";

function HomePage() {
  return (
    <div className="mx-auto">
      <CarouselTop />
      <Editor />
      <BestSeller />
      <CarouselBottom />
      <BuyMe />
      <FeaturedPosts />
    </div>
  );
}

export default HomePage;
