import React, { PureComponent } from "react";
import Image from "next/image";
export default class Weserve extends PureComponent {
  render() {
    return (
      <>
        {/* heading */}
        <h6
          style={{
            color: "#8ac03b",
            fontWeight: "bolder",
            textAlign: "center",
            marginTop: "12rem",
          }}
        >
          {this.props.subheading}
        </h6>
        <h1
          style={{
            fontWeight: "bolder",
            fontSize: "3.5rem",
            fontFamily: "'Nunito', sans-serif",
            letterSpacing: "1.5px",
            textAlign: "center",
            marginTop: "2rem",
            marginBottom: "4rem",
          }}
        >
          {this.props.heading}
        </h1>
        {/* image-box */}
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-md-3 col-xs-10"
              style={{ paddingBottom: "5rem" }}
            >
              <div className="card">
                <div className="card-body small-inner-box">
                  <Image src={this.props.image1} layout="fill" />
                  <a className="btn btn-dark below-image-button p-4">
                    Restaurants
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 col-xs-10"
              style={{ paddingBottom: "5rem" }}
            >
              {" "}
              <div className="card">
                <div className="card-body small-inner-box">
                  <Image src={this.props.image2} layout="fill" />
                  <a className="btn btn-dark below-image-button p-4">
                    SuperMarkets
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 col-xs-10"
              style={{ paddingBottom: "5rem" }}
            >
              {" "}
              <div className="card">
                <div className="card-body small-inner-box">
                  <Image src={this.props.image3} layout="fill" />
                  <a className="btn btn-dark below-image-button p-4">
                    Cloud Kitchens
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-xs-10">
              {" "}
              <div className="card">
                <div className="card-body small-inner-box">
                  <Image src={this.props.image4} layout="fill" />
                  <a className="btn btn-dark below-image-button p-4">
                    Enterprise
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
