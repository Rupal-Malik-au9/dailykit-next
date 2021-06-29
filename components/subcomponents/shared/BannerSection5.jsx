import React, { PureComponent } from "react";
import Image from "next/image";
export default class BannerSection5 extends PureComponent {
  render() {
    return (
      <>
        <div className="container" style={{ marginTop: "8rem" }}>
          <div className="row justify-content-between nunito">
            {this.props.leftimage && (
              <div className="col-md-6 col-xs-10">
                <Image
                  height="698px"
                  width="546px"
                  src={this.props.leftimage}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            )}
            <div className="col-md-6 col-xs-10 trend-responsive">
              {this.props.icon && (
                <Image
                  src={this.props.icon}
                  height="125.13px"
                  width="120px"
                  alt=".."
                />
              )}
              <h2
                className="nunito blueboxHeading"
                style={{ color: "#111b2b", marginTop: "-112px" }}
              >
                {this.props.heading}
              </h2>
              <div
                style={{
                  fontSize: "16px",
                }}
              >
                {this.props.description && (
                  <div style={{ display: "inline" }}>
                    {this.props.description}
                    <br />
                  </div>
                )}
                {this.props.para &&
                  this.props.para.map((i) => {
                    return (
                      <div style={{ display: "inline" }} key={i}>
                        {i}
                        <br />
                        <br />
                      </div>
                    );
                  })}
              </div>
              {this.props.box1title && (
                <div className="row justify-content-evenly">
                  <div
                    className="col-md-5 col-xs-10 p-4"
                    style={{ boxShadow: "0 0 10px 0px rgba(0, 0, 0, 0.3)" }}
                  >
                    {this.props.box2icon ? (
                      <Image
                        src={this.props.box1icon}
                        height="40px"
                        width="40px"
                        alt="icon"
                      />
                    ) : (
                      <h1 style={{ color: "#4FD153", fontWeight: "bolder" }}>
                        01
                      </h1>
                    )}
                    {this.props.box1title && (
                      <h5 style={{ display: "inline", fontWeight: "bolder" }}>
                        {this.props.box1title}
                      </h5>
                    )}
                    {this.props.box1description && (
                      <div style={{ marginTop: "2rem" }}>
                        {this.props.box1description}
                      </div>
                    )}
                  </div>
                  <div
                    className="col-md-5 col-xs-10 p-4"
                    style={{ boxShadow: "0 0 10px 0px rgba(0, 0, 0, 0.3)" }}
                  >
                    {this.props.box2icon ? (
                      <Image
                        src={this.props.box2icon}
                        height="40px"
                        width="40px"
                        alt="icon"
                      />
                    ) : (
                      <h1 style={{ color: "#4FD153", fontWeight: "bolder" }}>
                        02
                      </h1>
                    )}
                    {this.props.box2title && (
                      <h5 style={{ display: "inline", fontWeight: "bolder" }}>
                        {this.props.box2title}
                      </h5>
                    )}
                    {this.props.box2description && (
                      <div style={{ marginTop: "2rem" }}>
                        {this.props.box2description}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            {this.props.rightimage && (
              <div className="col-md-6 col-xs-10">
                <Image
                  height="698px"
                  width="546px"
                  src={this.props.rightimage}
                  className="d-block w-100"
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
