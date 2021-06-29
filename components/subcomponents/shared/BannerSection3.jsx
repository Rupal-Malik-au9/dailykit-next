import React, { PureComponent } from "react";
import TrialForm from "./TrialForm";
import Image from "next/image";
export default class BannerSection3 extends PureComponent {
  render() {
    return (
      <>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-xs-10 trend-responsive">
              {this.props.subheading && (
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  {this.props.subheading}
                </p>
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
              {this.props.text && (
                <p
                  style={{
                    fontSize: "17px",
                    marginBottom: "4rem",
                  }}
                >
                  {this.props.text}
                </p>
              )}
              <div className="justify-content-center">
                {this.props.button2 ? (
                  <div className="justify-content-center mb-4">
                    <a href={this.props.button1link}>
                      <button
                        type="button"
                        className="btn-style-thirteen black"
                      >
                        {this.props.button2[0]}
                      </button>
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a href={this.props.button2link}>
                      <button
                        type="button"
                        className="btn-style-thirteen white"
                      >
                        {this.props.button2[1]}
                      </button>
                    </a>
                  </div>
                ) : (
                  <div className="form-banner">
                    <TrialForm
                      dataAccount={"3161173:g2o5g2c3i8"}
                      dataForm={"4175542:d4z0s3"}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-xs-10">
              {this.props.image && (
                <Image
                  width={this.props.width ? this.props.width : "546px"}
                  height={this.props.height ? this.props.height : "546px"}
                  src={this.props.image}
                  className="d-block w-100 image-responsive"
                  alt="..."
                />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
