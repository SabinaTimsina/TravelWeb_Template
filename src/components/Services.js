import React from "react";
import a1 from "../images/s6.jpg";
import s2 from "../images/s2.jpg";
import s3 from "../images/s3.jpg";
import s4 from "../images/s4.jpg";
import s5 from "../images/s5.jpg";
import s6 from "../images/s6.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Services() {
  return (
    <div className="service_clr py-2">
      <div className="text-center my-5">
        <h1 className="display-4 text-capitalize">our services</h1>
        <hr className="w-25 mx-auto" />
      </div>
      <div className="container-fluid">
        <div className="col-xxl-12 text-center my-5">
          <Carousel
            swipeable={false}
            draggable={false}
            //showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            //autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            //deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div class="card mx-3">
              <img src={a1} class="card-img-top" alt="images" />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div class="card mx-3">
              <img src={s2} class="card-img-top" alt="images" />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div class="card mx-3">
              <img src={s3} class="card-img-top" alt="images" />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div class="card mx-3">
              <img src={s4} class="card-img-top" alt="images" />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div class="card mx-3">
              <img src={s5} class="card-img-top" alt="images" />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div class="card mx-3">
              <img src={s6} class="card-img-top" alt="images" />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </Carousel>
          ;
        </div>
      </div>
    </div>
  );
}

export default Services;
