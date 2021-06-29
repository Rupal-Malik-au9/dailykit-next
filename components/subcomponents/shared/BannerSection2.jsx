import React, { PureComponent } from "react";
import Image from "next/image";
export default class BannerSection2 extends PureComponent {
  render() {
    return (
      <div className="container nunito">
        <div className="row justify-content-center text-center">
          {this.props.leftimageurl && (
            <div className="col-md-6 col-xs-10 leftimage1">
              <Image
                width="494px"
                height="546px"
                src={this.props.leftimageurl}
                alt="women-cooking"
              />
            </div>
          )}
          <div className="col-md-5 col-xs-10 trend-responsive banner-section1-description">
            {this.props.bluesubheading && (
              <div className="bluesubheading">{this.props.bluesubheading}</div>
            )}
            {this.props.subheading && (
              <div className="subheading2">{this.props.subheading}</div>
            )}
            {this.props.heading && <h2>{this.props.heading}</h2>}
            {this.props.description && (
              <div className="descriptiontype1">{this.props.description}</div>
            )}{" "}
            {this.props.descriptiontype2 && (
              <div className="descriptiontype2 nunito">
                {this.props.descriptiontype2}
              </div>
            )}{" "}
            {this.props.descriptionpoints && (
              <ul className="onDemandCategories">
                {this.props.descriptionpoints.map((point) => {
                  return <li key={point}>{point}</li>;
                })}
              </ul>
            )}
            {this.props.buttonlink && (
              <a href={this.props.buttonlink}>
                {this.props.greenbuttontext && (
                  <button type="button" className="btn-style-thirteen green">
                    {this.props.greenbuttontext}
                  </button>
                )}
                {this.props.blackbuttontext && (
                  <button type="button" className="btn-style-thirteen black">
                    {this.props.blackbuttontext}
                  </button>
                )}
              </a>
            )}
          </div>
          {this.props.rightimageurl && (
            <div className="col-md-6 col-xs-10 leftimage1">
              <Image
                width={this.props.width ? this.props.width : "694px"}
                height={this.props.height ? this.props.height : "546px"}
                src={this.props.rightimageurl}
                alt="right-picture"
              />
            </div>
          )}
          {this.props.rightimagecarousel && (
            <div className="col-md-5 col-xs-10">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <Image
                      height="640px"
                      width="640px"
                      src={this.props.rightimagecarousel[0]}
                      className="d-block w-80"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <Image
                      height="640px"
                      width="640px"
                      src={this.props.rightimagecarousel[1]}
                      className="d-block w-80"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <Image
                      height="640px"
                      width="640px"
                      src={this.props.rightimagecarousel[2]}
                      className="d-block w-80"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
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
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
