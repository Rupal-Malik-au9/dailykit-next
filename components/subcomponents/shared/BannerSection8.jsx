import React, { PureComponent } from "react";
import Image from "next/image";
export default class BannerSection8 extends PureComponent {
  render() {
    return (
      <>
        <div className="container" style={{ marginTop: "8rem" }}>
          <div className="row justify-content-between">
            {this.props.image && (
              <div className="col-md-6 col-xs-10">
                <Image
                  width={this.props.width ? this.props.width : "546px"}
                  height={this.props.height ? this.props.height : "546px"}
                  src={this.props.image}
                  className="d-block right-image-responsive"
                  alt="..."
                />
              </div>
            )}
            <div className="col-md-6 col-xs-10">
              <small
                style={{
                  color: "#8ac03b",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "6rem",
                }}
                className="nunito"
              >
                {this.props.subheading}
              </small>
              <h2
                style={{
                  fontWeight: "bolder",
                  margin: "1rem 0rem 2rem 0rem",
                }}
                className="nunito heading-responsive"
              >
                {this.props.heading}
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.8rem",
                }}
              >
                {this.props.para.map((para1) => {
                  return (
                    <div style={{ display: "inline" }}>
                      {para1}
                      <br />
                      <br />
                    </div>
                  );
                })}
              </p>
              {this.props.learn && (
                <a href={this.props.buttonlink}>
                  <button
                    type="button"
                    className="btn-style-thirteen green learMore_button2 m-4 pt-2 pb-2"
                    style={{ marginRight: "120px" }}
                  >
                    Learn More
                  </button>
                </a>
              )}
            </div>
            {this.props.rightImage && (
              <div className="col-md-6 col-xs-10">
                <Image
                  width={this.props.width ? this.props.width : "546px"}
                  height={this.props.height ? this.props.height : "546px"}
                  src={this.props.rightImage}
                  className="d-block right-image-responsive"
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
