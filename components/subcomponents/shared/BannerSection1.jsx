import React, { PureComponent } from "react";
import ContactFormSection2 from "./ContactFormSection2";
import Image from "next/image";
export default class BannerSection1 extends PureComponent {
  render() {
    return (
      <div className="container nunito" style={{ marginTop: "12rem" }}>
        <div className="row justify-content-center text-center">
          <div className="col-md-5 col-xs-10">
            <div className="row justify-content-around">
              <div
                className="col-md-5 col-xs-10 "
                style={{ background: "#F4F9FF", borderRadius: "5%" }}
              >
                <div
                  style={{
                    color: "#1374f6",
                    fontWeight: "bolder",
                    fontSize: "12px",
                    marginBottom: "1rem",
                    marginTop: "2rem",
                  }}
                >
                  {this.props.boximage1subheading}
                </div>
                <h4>{this.props.boximage1heading}</h4>
                <br />

                <Image
                  height="141px"
                  width="160px"
                  src={this.props.boximage1url}
                  style={{ marginBottom: "2rem" }}
                  alt="trending"
                />
              </div>

              <div
                className="col-md-5 col-xs-10"
                style={{ background: "#FFF4FA", borderRadius: "5%" }}
              >
                <br />
                <Image
                  height="160px"
                  width="160px"
                  src={this.props.boximage2url}
                  style={{ marginBottom: "2rem" }}
                  alt="trending2"
                />
                <div>{this.props.boximage2subheading}</div>
                <h4>{this.props.boximage2heading}</h4>
              </div>
            </div>
            <div className="row justify-content-start">
              <div className="col-12 col-xs-10 box-image3">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="video-responsive"
                >
                  <source
                    src="/assets/videos/customizableProduct.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xs-10 trend-responsive banner-section1-description">
            <div className="subheading2">
              {this.props.subheading && this.props.subheading}
            </div>
            <h2>{this.props.heading && this.props.heading}</h2>
            <br />
            <a>
              <button
                type="button"
                className="btn-style-thirteen green"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                {this.props.buttontext && this.props.buttontext}
              </button>
            </a>
            <ContactFormSection2
              dataAccount={this.props.dataAccount}
              dataForm={this.props.dataForm}
            />
          </div>
        </div>
      </div>
    );
  }
}
