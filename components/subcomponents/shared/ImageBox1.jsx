import React, { PureComponent } from "react";
import Heading1 from "./Heading";
import SubHeading1 from "./SubHeading";
import Image from "next/image";
export default class ImageBox1 extends PureComponent {
  render() {
    return (
      <div className="container image-section-1">
        {this.props.SubHeading2text && (
          <SubHeading1 text={this.props.SubHeading2text} />
        )}
        {this.props.Heading1text && <Heading1 text={this.props.Heading1text} />}
        {this.props.SubHeading1text && (
          <SubHeading1 text={this.props.SubHeading1text} />
        )}
        <div className="row justify-content-center">
          <div
            className="col-md-6 col-xs-10"
            style={{ paddingBottom: "12rem" }}
          >
            <div className="card">
              <div className="card-body inner-box">
                <Image
                  alt={this.props.imagetext1}
                  layout="fill"
                  src={this.props.image1url}
                />

                {this.props.imagetext1 && (
                  <a
                    href="/we_serve#restaurants"
                    className="btn btn-dark image1-button"
                    style={{ position: "absolute" }}
                  >
                    {this.props.imagetext1}
                  </a>
                )}

                {this.props.imagepara && (
                  <a
                    href="/"
                    className="btn btn-dark image1-button"
                    style={{ position: "absolute" }}
                  >
                    <h4 className="card-title nunito">
                      {" "}
                      {this.props.imagepara[0].heading}
                    </h4>
                    <p
                      className="card-text nunito"
                      style={{ fontSize: "16px" }}
                    >
                      {this.props.imagepara[0].para}
                    </p>
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xs-10">
            <div className="card">
              <div className="card-body inner-box">
                <Image
                  alt={this.props.imagetext2}
                  src={this.props.image2url}
                  layout="fill"
                />

                {this.props.imagetext2 && (
                  <a
                    href="/we_serve#supermarkets"
                    className="btn btn-dark image2-button"
                    style={{ position: "absolute" }}
                  >
                    {this.props.imagetext2}
                  </a>
                )}

                {this.props.imagepara && (
                  <a
                    href="#"
                    className="btn btn-dark image2-button"
                    style={{ position: "absolute" }}
                  >
                    <h4 className="card-title nunito">
                      {" "}
                      {this.props.imagepara[1].heading}
                    </h4>
                    <p
                      className="card-text nunito"
                      style={{ fontSize: "16px" }}
                    >
                      {this.props.imagepara[1].para}
                    </p>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
