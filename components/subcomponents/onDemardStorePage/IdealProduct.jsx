import React, { PureComponent } from "react";
export default class IdealProduct extends PureComponent {
  render() {
    return (
      <div>
        <h5
          style={{
            textAlign: "center",
            color: "#8ac03b",
            fontWeight: "600",
            marginTop: "10.5rem",
          }}
        >
          {this.props.subheading}
        </h5>
        <div
          style={{
            textAlign: "center",
            marginTop: "2.3rem",
            marginBottom: "1.2rem",
          }}
        >
          <h1
            style={{
              fontWeight: "bolder",
              fontSize: "3rem",
              fontFamily: "'Nunito', sans-serif",
              letterSpacing: "1.5px",
            }}
          >
            {this.props.heading}
          </h1>
        </div>

        {/* carousel */}

        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              className="invisible"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              className="invisible"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>

            <button
              className="invisible"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <video autoPlay loop muted playsInline>
                <source
                  src="/assets/videos/customizableProduct.mp4"
                  type="video/mp4"
                />
              </video>

              <div
                className="carousel-caption d-none w-60 d-md-block"
                style={{ textAlign: "left", marginLeft: "28rem" }}
              >
                <h5
                  style={{
                    textAlign: "left",
                    color: "#8ac03b",
                    fontWeight: "600",
                    marginTop: "10.5rem",
                  }}
                >
                  {this.props.card1subheading}
                </h5>
                <div
                  style={{
                    textAlign: "left",
                    marginTop: "2.3rem",
                    marginBottom: "1.2rem",
                  }}
                >
                  <h1
                    style={{
                      fontWeight: "bolder",
                      fontSize: "3.5rem",
                      fontFamily: "'Nunito', sans-serif",
                      letterSpacing: "1.5px",
                    }}
                  >
                    {this.props.card1heading}
                  </h1>
                </div>
                <h3>{this.props.card1description}</h3>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <video autoPlay loop muted playsInline>
                <source
                  src="/assets/videos/customizableProduct.mp4"
                  type="video/mp4"
                />
              </video>
              <div
                className="carousel-caption d-none w-50 d-md-block"
                style={{ textAlign: "left", marginLeft: "25rem" }}
              >
                <h5
                  style={{
                    textAlign: "left",
                    color: "#8ac03b",
                    fontWeight: "600",
                    marginTop: "10.5rem",
                  }}
                >
                  {this.props.card2subheading}
                </h5>
                <div
                  style={{
                    textAlign: "left",
                    marginTop: "2.3rem",
                    marginBottom: "1.2rem",
                  }}
                >
                  <h1
                    style={{
                      fontWeight: "bolder",
                      fontSize: "3.5rem",
                      fontFamily: "'Nunito', sans-serif",
                      letterSpacing: "1.5px",
                    }}
                  >
                    {this.props.card2heading}
                  </h1>
                </div>
                <h3>{this.props.card2description}</h3>
              </div>
            </div>
            <div className="carousel-item">
              <video autoPlay loop muted playsInline>
                <source
                  src="/assets/videos/customizableProduct.mp4"
                  type="video/mp4"
                />
              </video>
              <div
                className="carousel-caption d-none w-50 d-md-block"
                style={{ textAlign: "left", marginLeft: "28rem" }}
              >
                <h5
                  style={{
                    textAlign: "left",
                    color: "#8ac03b",
                    fontWeight: "600",
                    marginTop: "10.5rem",
                  }}
                >
                  {this.props.card3subheading}
                </h5>
                <div
                  style={{
                    textAlign: "left",
                    marginTop: "2.3rem",
                    marginBottom: "1.2rem",
                  }}
                >
                  <h1
                    style={{
                      fontWeight: "bolder",
                      fontSize: "3.5rem",
                      fontFamily: "'Nunito', sans-serif",
                      letterSpacing: "1.5px",
                    }}
                  >
                    {this.props.card3heading}
                  </h1>
                </div>
                <h3> {this.props.card3description}</h3>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <a href="#scheduledemo">
          <button
            type="button"
            className="btn-style-thirteen green responsive-button"
          >
            Get Started Now
          </button>
        </a>
      </div>
    );
  }
}
