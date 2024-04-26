import React from "react";

const GreenCarousel = () => {
  // Burada gerçek görsel URL'nizi belirtin.
  const slideImageURL =
    "https://s3-alpha-sig.figma.com/img/c7a1/9f43/aa4437b65bb40c3e3edb92e61a4d6184?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gYebXoXDGOUtZGH613nz8-aNuApab~mMbA4o99QhenY7xUt~Y8lWFrj3HuXL6jJCtrB1DaI3pN-EPlYh1SDuVdY~I69S0VykQzKUwy6TWPBZ6CUePRVrxitWpcoeidJ4QH2V1vddMtl3swzht-yAvz2IJtpH5K-5~LfrY3DYJyNG7ei2RuC~jFZMK3uXpr6JfsRmRuDwUUO6-e0DzN7AqWawUxzxL2fN2uJspj7SnuLenHe4c4haN6s84PMp3CIRoHiS~gyaoPmh9NYZAvWBhs3L15nR7Y6C7d2nZ-Xr2MGzkcReEJhmEfLH2S7pvN0HouBVfw4ULWkcM6n9r1jzWA__";

  return (
    <div className="relative bg-teal-900 h-96">
      <div className="flex justify-between items-center h-full">
        {/* Carousel içeriği */}
        <div className="text-white p-8">
          <h5 className="text-sm uppercase">Summer 2020</h5>
          <h1 className="text-3xl font-bold my-3">Vita Classic Product</h1>
          <h4 className="text-base">We know how large objects will act...</h4>
          <div className="flex items-center mt-5">
            <span className="text-2xl font-semibold">$16.48</span>
            <button className="bg-green-500 text-white px-5 py-2 ml-5 rounded shadow-lg hover:bg-green-600 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
        {/* Slayt görseli */}
        <img
          src={
            "https://s3-alpha-sig.figma.com/img/c7a1/9f43/aa4437b65bb40c3e3edb92e61a4d6184?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gYebXoXDGOUtZGH613nz8-aNuApab~mMbA4o99QhenY7xUt~Y8lWFrj3HuXL6jJCtrB1DaI3pN-EPlYh1SDuVdY~I69S0VykQzKUwy6TWPBZ6CUePRVrxitWpcoeidJ4QH2V1vddMtl3swzht-yAvz2IJtpH5K-5~LfrY3DYJyNG7ei2RuC~jFZMK3uXpr6JfsRmRuDwUUO6-e0DzN7AqWawUxzxL2fN2uJspj7SnuLenHe4c4haN6s84PMp3CIRoHiS~gyaoPmh9NYZAvWBhs3L15nR7Y6C7d2nZ-Xr2MGzkcReEJhmEfLH2S7pvN0HouBVfw4ULWkcM6n9r1jzWA__"
          }
          alt="Slide"
          className="h-full object-cover"
        />
        {/* Sağ ok */}
        <div className="absolute right-0 p-4">
          <button className="bg-white bg-opacity-50 rounded-full p-2">
            &#x3e;
          </button>
        </div>
      </div>
      {/* Sol ok */}
      <div className="absolute left-0 p-4">
        <button className="bg-white bg-opacity-50 rounded-full p-2">
          &#x3c;
        </button>
      </div>
      {/* Slayt göstergeleri */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-4 flex">
        <span className="inline-block w-8 h-1 bg-white mr-2"></span>
      </div>
    </div>
  );
};

export default GreenCarousel;
