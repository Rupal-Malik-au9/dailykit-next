import React, { PureComponent } from "react";
import Image from "next/image";
export default class BannerSection4 extends PureComponent {
  render() {
    return (
      <>
        <div className="container" style={{ marginTop: "8rem" }}>
          <div className="row justify-content-between">
            {this.props.leftimage && (
              <div className="col-md-6 col-xs-10">
                <Image
                  width={this.props.width ? this.props.width : "552.85px"}
                  height={this.props.height ? this.props.height : "592px"}
                  src={this.props.leftimage}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            )}
            <div className="col-md-6 col-xs-10 trend-responsive">
              {this.props.bluesubheading && (
                <div className="bluesubheading">
                  {this.props.bluesubheading}
                </div>
              )}
              {this.props.heading && (
                <h2
                  style={{
                    fontWeight: "bolder",
                    fontSize: "50px",
                    margin: "2rem 0rem 2rem 0rem",
                  }}
                  className="nunito"
                >
                  {this.props.heading}
                </h2>
              )}
              <div className="descriptiontype3">
                {this.props.description && (
                  <div className="row">
                    <div
                      className="col-md-2 col-xs-10 vl"
                      style={{ marginRight: "-80px", marginTop: "8px" }}
                    ></div>
                    <div className="col-md-10 col-xs-10">
                      {this.props.description}
                    </div>
                  </div>
                )}
                {this.props.points && (
                  <div
                    className="row"
                    style={{ marginTop: "2rem", marginLeft: "2rem" }}
                  >
                    {this.props.points.map((point) => {
                      return (
                        <ul
                          className="col-md-6 col-xs-10 onDemandCategories"
                          key={point}
                        >
                          {point.map((li) => {
                            return <li key={li}>{li}</li>;
                          })}
                        </ul>
                      );
                    })}
                    {this.props.buttonlink && (
                      <a href={this.props.buttonlink}>
                        {this.props.greenbuttontext && (
                          <button
                            type="button"
                            className="btn-style-thirteen green"
                          >
                            {this.props.greenbuttontext}
                          </button>
                        )}
                        {this.props.blackbuttontext && (
                          <button
                            type="button"
                            className="btn-style-thirteen black"
                          >
                            {this.props.blackbuttontext}
                          </button>
                        )}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
            {this.props.rightimage && (
              <div className="col-md-6 col-xs-10">
                <Image
                  width={this.props.width ? this.props.width : "552.85px"}
                  height={this.props.height ? this.props.height : "592px"}
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
