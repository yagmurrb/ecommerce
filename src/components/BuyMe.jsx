import React from "react";

function BuyMe() {
  return (
    <div className="container-fluid">
      <div className="flex flex-wrap items-center">
        {/* Sol kısım - Görsel */}
        <div className="w-full md:w-1/2 px-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/5f8c/e73d/1a41b674cbd12f927c7ea9a6ca0ce76c?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LC4F7xBCbAFGOCDQy8vyibpmv0OvjU0VHFVinbHZvlB21en7lcMpiXVkqHEK~0oTe43oNUI4SlQoXm0r7tC1EX6qzv2fED1GPGCjzVtXDyBqh6hD8OlJuINJisEyWxFxdzJnBytCAb4pvGTL53l2luk5JiRuf6F-P6bq5VWdpZk5-r8dbUkhXOiMwqgL~ivdCKyCP~TPDkYNY5pn2X4TpTiK43NOBB-B0Wpy2o~dO7B9iGa-WFFSUJpfVst7lIENK3ui5o-ZfY5jg-XAh~iVXHJmTvJnnKbrXMVrEDbvDGoD5JqQhyy6AXLU-17OlVQxH7jZrjIQOhExbpOzQDeHlg__"
            alt="Görsel"
            className="w-full h-auto"
          />
        </div>
        {/* Sağ kısım - Metin */}
        <div className="w-full md:w-1/2 px-4">
          <div className="text-center md:text-left">
            <h5 className="text-xl font-montserrat">Summer 2020</h5>
            <h1 className="text-4xl font-montserrat mb-4">
              Part of the Neural Universe
            </h1>
            <h4 className="text-2xl mb-6 text-second-text-color font-montserrat  ">
              We know how large objects will act, but things on a small scale.
            </h4>
            <div>
              <a
                href="#"
                className="inline-block bg-success-color hover:bg-success-color text-white font-montserrat py-22 px-14 rounded mr-2 w-40 h-12"
              >
                BUY NOW
              </a>
              <a
                href="#"
                className="inline-block bg-white-500 hover:bg-white text-success-color font-montserrat py-22 px-14 rounded mr-2 w-40 h-12"
              >
                READ ME
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyMe;
