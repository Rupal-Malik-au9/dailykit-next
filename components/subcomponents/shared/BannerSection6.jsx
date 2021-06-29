import React, { PureComponent } from "react";
import ContactFormSection2 from "./ContactFormSection2";
import Image from "next/image";
export default class BannerSection6 extends PureComponent {
  render() {
    return (
      <>
        <div className="container" style={{ marginTop: "8rem" }}>
          <div className="row justify-content-between">
            {this.props.leftImage && (
              <div className="col-md-5 col-xs-10">
                <Image
                  height="556px"
                  width="475px"
                  src={this.props.leftImage}
                  className="d-block image-responsive-size"
                  alt="..."
                />
              </div>
            )}
            {this.props.leftVideo && (
              <div className="col-md-5 col-xs-10">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="video-responsive"
                >
                  <source src={this.props.leftVideo} type="video/mp4" />
                </video>
                {/* <Video
                  height="556px"
                  width="475px"
                 
                  className="d-block image-responsive-size"
                  alt="..."
                /> */}
              </div>
            )}
            <div className="col-md-5 col-xs-10 trend-responsive">
              <h2
                style={{
                  fontWeight: "bolder",
                  fontSize: "50px",
                  margin: "1rem 0rem 2rem 0rem",
                }}
                className="nunito"
              >
                {this.props.heading}
              </h2>
              <p
                style={{
                  fontSize: "16px",
                }}
              >
                {this.props.para.map((para) => {
                  return (
                    <p style={{ display: "inline" }}>
                      {para}
                      <br />
                      <br />
                    </p>
                  );
                })}
                {this.props.buttonlink ? (
                  <a href={this.props.buttonlink}>
                    <button type="button" className="btn-style-thirteen green">
                      {this.props.buttontext}
                    </button>
                  </a>
                ) : (
                  <>
                    <button
                      type="button"
                      className="btn-style-thirteen green"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      {this.props.greenbuttontext}
                    </button>
                  </>
                )}
              </p>
              <ContactFormSection2
                dataAccount={this.props.dataAccount}
                dataForm={this.props.dataForm}
              />
            </div>
            {this.props.rightImage && (
              <div className="col-md-5 col-xs-10">
                <Image
                  height="546px"
                  width="546px"
                  src={this.props.rightImage}
                  className="d-block image-responsive-size"
                  width="480px"
                  alt="..."
                />
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}
