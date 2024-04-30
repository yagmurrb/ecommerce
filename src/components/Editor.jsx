import React from "react";

const Editor = () => {
  return (
    <div className="container mx-auto">
      <div className="main-content text-center">
        <h3 className="text-h3 text-text-color font-bold">EDITOR S PICK</h3>
        <p className="text-paragraph text-second-text-color">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex">
        <div className="w-1/2 px-4">
          <div className="relative overflow-hidden mb-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/9da5/ab42/c0357746eb27e42fff6279478e2c8a48?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VCgDWOViZd7reGdSm9ZElkEPdaVN3AYrlfiXOuerB4acnlwZWon1HpnhsXpS-R2prpxObmVAfubEED2nwd4rqcY3XBb0h6JpTql6639K5BDHztTRj6ok-~RU~c~FYLIQqltk39Sr9u45yDwZepa5NTJgxT1LAYwc8IwSUTTHqVQTz-ZfB-llXPEUF5FcBMdx~jSoIaazYhJP72WhLKWAxHr4mWF7h90mxmSOiO-9ahLYt6ZWPleOJEZpyMnHSIJEuTjdRb98NGuKgvDyz0aTAw7FESMg~Y3vutk7p8cJYP7yxgBmsm7rWCCslHUkwG~~fY47N-7ucoX2wH8jaLQZEg__"
              alt="Left"
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 light-bg-color  bg-opacity-50 text-text-color">
              <h5 className="text-h5 font-montserrat font-bold mb-4">MEN</h5>
            </div>
          </div>
        </div>
        <div className="w-1/4 px-4 h-full  ">
          <div className="relative overflow-hidden mb-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/b384/eba6/08bd8616723a95d25fce7dcb8f25ba9d?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dj6EfPRtCXRobG8SMCUo2viNetBR5KAUL1SkW4EIAmu1Brwuiu9WvWO8jJEyN6RoKMtlM2wc7iKpUZUCYr-g9xKP~70~75gZ9g8M79tOIrnvaW0yv14HUo1UceZvQ-Ff22OYRH4~OvotGRpJ8efkn5GrShGkKgOY9jMq7bqT~UfG3kCo0jS01EBPmlYkC7Rbtjuxdgp8K4ezMDTq4KJuRvrQlhrD5duenK2ZUoJqHtlwIBLdRURzGB8-TBDBwPE~L5chstlii2Ws9D8v7ZIJRL3yLmW2zWEL890MEgGh2y3RCqjjd0eV-~hvh3yMn4-AV90wK0EdrithYVy1OuRHow__"
              alt="Middle"
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
              <h3 className="text-xl font-bold mb-2">Middle Image Title</h3>
              <p className="text-sm">Middle Image Description</p>
            </div>
          </div>
        </div>
        <div className="w-1/4 px-4">
          <div className="relative overflow-hidden mb-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/5077/f785/cbfd4a6cf9efad13d9b5d66b1b7cbf4f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mIrh9pdiYlhIV9mFQYcn0imBKyYNVYwuD43Uab5Y32uDbiXaFAg0AVaIXuxwGMP2Ux9GvrrQ-Wjcl1OIz7u3dIEMHRz21HJ2vuF-axxAYQBE40zA~SYmpZSXQ443Wyr4HsjKuk9ScwLE1R9FN4IvdQKPqs8o6zoo5OXCbORcZ-2wn0PvYhV6PXU-sBBKxR5IPfsbpFFE~45WyHjLUv4s-ohDFmOtAgLYFxtQfA7e3y4gbkL-ihZYDVLIHuWLKrySgti~Ia5Kgyg7TT0ojLV2R1hz4W3xo~kCEeRww8u5trgaW9NKd3gW3VXIbz15WCXPmx6T0IodKR6gPCclAEfahg__"
              alt="Right"
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
              <h3 className="text-xl font-bold mb-2">Right Image 1 Title</h3>
              <p className="text-sm">Right Image 1 Description</p>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <img
              src="https://s3-alpha-sig.figma.com/img/edfc/ad0d/ba1967435dad649ed91c2e00be5f640f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AWSYK95o5cJXLsISyN0mj8x4SVbqKMy1rPwgeiw1dQKGFT55oaUjrbmdJrx6p3rRasw2nxYJ8TkGqZ4L8g-FHADLLcy-2p745~jyKqnYYpFaKzjPsU-qf8OYAdemMoxHDCbjs3JJw8yOg~27BASoBKm9fi5waVfAdD1EgZ9jm2YGgfahCvCRkPMnJmvhm9CuRQ~bz29VZUdiVK1~IFnEd~LpE6TrzWZ-Ti2-EsRDuBEn1qtXerYVffhA7G3cDV50pHRClf7S0tpuonKUe1IbzcEDaJof8yKzo-tTyFbpq06t082cf40PumX-2PlWLP7Xs1dJUtO9LK3eSwrg5wbYaQ__"
              alt="Right"
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
              <h3 className="text-xl font-bold mb-2">Right Image 2 Title</h3>
              <p className="text-sm">Right Image 2 Description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
