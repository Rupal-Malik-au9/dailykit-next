import React, { PureComponent } from "react";
import Image from "next/image";
export default class SpecialBanner5 extends PureComponent {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "10.3rem",
          marginBottom: "1.2rem",
        }}
      >
        {this.props.heading && (
          <h1 className="nunito blueboxHeading" style={{ color: "#111b2b" }}>
            {this.props.heading}
          </h1>
        )}
        {this.props.subpara && (
          <p className="why_choose">{this.props.subpara}</p>
        )}
        {/* categories */}
        <div className="container" style={{ textAlign: "left" }}>
          <div className="row justify-content-center">
            {this.props.points[0].map((point) => {
              return (
                <div
                  className="col-md-3 col-xs-10 p-4 column"
                  key={point.heading}
                >
                  <Image
                    width="30px"
                    height="30px"
                    alt="icon"
                    src={point.icon}
                  />
                  <h5>{point.heading}</h5>
                  <br />
                  <small>{point.para}</small>
                </div>
              );
            })}
          </div>
          <div className="row justify-content-center">
            {this.props.points[1].map((point) => {
              return (
                <div
                  className="col-md-3 col-xs-10 p-4 column"
                  key={point.heading}
                >
                  <Image
                    width="30px"
                    height="30px"
                    alt="icon"
                    src={point.icon}
                  />
                  <h5>{point.heading}</h5>
                  <br />
                  <small>{point.para}</small>
                </div>
              );
            })}
          </div>
        </div>
        <a href={this.props.buttonlink}>
          <button type="button" className="btn-style-thirteen green">
            {this.props.buttontext}
          </button>
        </a>

        {/* second_categories */}

        <div
          style={{
            background: "#111b2b",
            color: "white",
            marginTop: "6rem",
          }}
        >
          <div className="container whychoose-container2">
            <div className="row justify-content-evenly">
              {this.props.points[2].map((point) => {
                return (
                  <div
                    className="col-md-3 col-xs-10 p-4 column2"
                    key={point.heading}
                  >
                    <Image
                      width="30px"
                      height="30px"
                      alt="icon"
                      src={point.icon}
                    />
                    <h5 style={{ display: "inline" }}>{point.heading}</h5>
                    <br />
                    <small>{point.para}</small>
                  </div>
                );
              })}
            </div>
            <div className="row justify-content-evenly">
              {this.props.points[3].map((point) => {
                return (
                  <div
                    className="col-md-3 col-xs-10 p-4 column2"
                    key={point.heading}
                  >
                    <Image
                      width="30px"
                      height="30px"
                      alt="icon"
                      src={point.icon}
                    />
                    <h5 style={{ display: "inline" }}>{point.heading}</h5>
                    <br />
                    <small>{point.para}</small>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
