import React, { PureComponent } from "react";
import ContactFormSection2 from "../shared/ContactFormSection2";
import Image from "next/image";
export default class Bluebox1 extends PureComponent {
  render() {
    return (
      <div
        style={{ background: "#111B2B", textAlign: "center", color: "white" }}
      >
        <div style={{ color: "#111B2B" }}>.</div>
        <div className="bluebox-heading">{this.props.heading}</div>
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
        <div className="container">
          <div className="row justify-content-center mb-4 mt-4">
            <div
              className="col-md-5 col-xs-10"
              style={{
                fontSize: "19px",
                lineHeight: "2rem",
                textAlign: "right",
              }}
            >
              <div className="row justify-content-end mb-4 mt-4">
                <div className="col-md-10 col-xs-10 bluebox-col1heading">
                  {this.props.col1heading}
                </div>
                <div className="col-md-2 col-xs-10">
                  <Image
                    height="60px"
                    src="/assets/icons/phone.svg"
                    alt=".."
                    width="80px"
                    className="bluebox-imageicon"
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-8 col-xs-10 bluebox-col1para">
                  {this.props.col1para}
                </div>{" "}
              </div>
              {!this.props.learn && (
                <div className="row justify-content-end mt-4">
                  <div className="col-md-3 col-xs-10 bluebox-imagecontainer">
                    <div className="card">
                      <div className="card-body imagebox12 bluebox-image"></div>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-10 bluebox-imagecontainer">
                    <div className="card">
                      <div className="card-body imagebox13 bluebox-image"></div>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-10 bluebox-imagecontainer">
                    <div className="card">
                      <div className="card-body imagebox14 bluebox-image"></div>
                    </div>
                  </div>
                </div>
              )}
              {!this.props.learn && (
                <button
                  type="button"
                  className="learMore_button2 btn-style-thirteen green mt-4 mb-4"
                  style={{ marginRight: "120px" }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Learn More
                </button>
              )}
            </div>
            <div className="col-1 blackline2"></div>
            <div
              className="col-md-5 col-xs-10"
              style={{
                fontSize: "19px",
                lineHeight: "2rem",
                textAlign: "right",
              }}
            >
              {" "}
              <div className="row justify-content-start mb-4 mt-4">
                <div className="col-md-2 col-xs-10">
                  <Image
                    height="60px"
                    src="/assets/icons/corrugatedBox.svg"
                    alt="..."
                    width="90px"
                    className="bluebox-imageicon"
                  />
                </div>

                <div
                  className="col-md-10 col-xs-10"
                  style={{ fontWeight: "bolder", textAlign: "left" }}
                >
                  {this.props.col2heading}
                </div>
              </div>
              <div
                className="row justify-content-start"
                style={{ textAlign: "left" }}
              >
                <div
                  className="col-md-8 col-xs-10"
                  style={{ marginBottom: "5rem" }}
                >
                  {this.props.col2para}
                </div>
                {!this.props.learn && (
                  <div className="row justify-content-start mt-4">
                    <div className="col-md-3 col-xs-10 bluebox-imagecontainer">
                      <div className="card">
                        <div className="card-body imagebox15 bluebox-image"></div>
                      </div>
                    </div>
                    <div className="col-md-3 col-xs-10 bluebox-imagecontainer">
                      <div className="card">
                        <div className="card-body imagebox16 bluebox-image"></div>
                      </div>
                    </div>
                    <div className="col-md-3 col-xs-10 bluebox-imagecontainer">
                      <div className="card">
                        <div className="card-body imagebox17 bluebox-image"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>{" "}
              {!this.props.learn && (
                <button
                  type="button"
                  className="btn-style-thirteen green mt-4 learn bluebox-learnMore"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Learn More
                </button>
              )}
            </div>
          </div>
          {this.props.learn && (
            <button
              type="button"
              className="btn-style-thirteen green mt-4 mb-4"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Learn More
            </button>
          )}
          <ContactFormSection2
            dataAccount={this.props.dataAccount}
            dataForm={this.props.dataForm}
          />
        </div>
      </div>
    );
  }
}
