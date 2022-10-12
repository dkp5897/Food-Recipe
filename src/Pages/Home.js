import React from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";

function Home() {
  return (
    <div className="main">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className=""></li>
          <li data-target="#myCarousel" data-slide-to="1" className=""></li>
          <li
            data-target="#myCarousel"
            data-slide-to="2"
            className="active"
          ></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item">
            <img
              className="first-slide img-fluid"
              src="./Images/f1.jpg"
              alt="First slide"
            />
            <div className="container">
              <div className="carousel-caption ">
                <h1 className="logo-heading">
                  <strong style={{ color: "red", fontSize: "70px" }}>F</strong>
                  ood
                  <strong style={{ color: "red", fontSize: "70px" }}>R</strong>
                  ecipe
                </h1>
                <p>
                  We are here to provide you the best food and fruits recipe
                </p>
                <p>
                  <Link
                    className="btn btn-lg btn-primary"
                    to="/main"
                    role="button"
                  >
                    Explore Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="second-slide img-fluid"
              src="./Images/front2.jpg"
              alt="Second slide"
            />
            <div className="container">
              <div className="carousel-caption">
                <h1 className="logo-heading">
                  <strong style={{ color: "red", fontSize: "70px" }}>F</strong>
                  ood
                  <strong style={{ color: "red", fontSize: "70px" }}>R</strong>
                  ecipe
                </h1>
                <p>
                  We are here to provide you the best food and fruits recipe
                </p>
                <p>
                  <Link
                    className="btn btn-lg btn-primary"
                    to="/main"
                    role="button"
                  >
                    Explore Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <img
              className="third-slide img-fluid"
              src="./Images/f3.jpg"
              alt="Third slide"
            />
            <div className="container">
              <div className="carousel-caption">
                <h1 className="logo-heading">
                  <strong style={{ color: "red", fontSize: "70px" }}>F</strong>
                  ood
                  <strong style={{ color: "red", fontSize: "70px" }}>R</strong>
                  ecipe
                </h1>
                <p>
                  We are here to provide you the best food and fruits recipe
                </p>
                <p>
                  <Link
                    className="btn btn-lg btn-primary"
                    to="/main"
                    role="button"
                  >
                    Explore Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
        <Cards/>
    </div>
  );
}

export default Home;
