import React from "react";
import a1 from "../images/s1.jpg";
import "../CSS/TopMid.css";

function AboutUs() {
  return (
    <>
      <div className="text-center my-5">
        <h1 className="display-4 text-capitalize">about us</h1>
        <hr className="w-25 mx-auto" />
      </div>
      <div className="container" style={{ paddingBottom: "5rem" }}>
        <div className="row my-5">
          <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
            <img src={a1} alt="hen image" className="img-fluid about_img" />
          </div>
          <div className="col-lg-6 col-md-6 col-12 col-xxl-6 d-flex justify-content-center align-items-start flex-column">
            <h1>Loreal Ipsum</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
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
    </>
  );
}

export default AboutUs;
