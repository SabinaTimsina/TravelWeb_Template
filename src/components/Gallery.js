import React from "react";
import img1 from "../images/r1.jpg";
import img2 from "../images/r2.jpg";
import img3 from "../images/r3.jpg";
import img4 from "../images/r4.jpg";
import img5 from "../images/r5.jpg";
import img6 from "../images/r6.jpg";

function Gallery() {
  return (
    <div className="py-2">
      <div className="text-center my-5">
        <h1 className="display-4 text-capitalize">Gallery</h1>
        <hr className="w-25 mx-auto" />
      </div>
      <div className="container">
        <div className="row gy-5">
          <div className="col-md-4 col-10 col-xxl-4 mx-auto">
            <img src={img1} class="card-img-top" alt="images" />
          </div>
          <div className="col-md-4 col-10 col-xxl-4 mx-auto">
            <img src={img2} class="card-img-top" alt="images" />
          </div>
          <div className="col-md-4 col-10 col-xxl-4 mx-auto">
            <img src={img3} class="card-img-top" alt="images" />
          </div>
          <div className="col-md-4 col-10 col-xxl-4 mx-auto">
            <img src={img4} class="card-img-top" alt="images" />
          </div>
          <div className="col-md-4 col-10 col-xxl-4 mx-auto">
            <img src={img5} class="card-img-top" alt="images" />
          </div>
          <div className="col-md-4 col-10 col-xxl-4 mx-auto">
            <img src={img6} class="card-img-top" alt="images" />
          </div>
        </div>
        <div className="col-xxl-12 text-center my-5">
        <button
          type="button"
          className="btn btn-outline"
          data-toggle="tooltip"
          data-placement="right"
          title="Who Am I"
        >
          Check More
        </button>
      </div>
      </div>
    </div>
  );
}

export default Gallery;
