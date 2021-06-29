import React, { PureComponent } from "react";
import Image from "next/image";
import TrialForm from "./TrialForm";

export default class EndToEndFoodBusiness extends PureComponent {
  render() {
    return (
      <div
        style={{
          background: "#111B2B",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            fontWeight: "600",
            textAlign: "center",
            marginTop: "12rem",
          }}
        >
          <br />
          {this.props.subheading}
        </div>
        <h2
          className="nunito text-center blueboxHeading"
          style={{ padding: "10px 0 20px" }}
        >
          {this.props.heading}
        </h2>
        <div className="justify-content-center">
          <div className="form-banner">
            <TrialForm
              dataAccount={this.props.dataAccount}
              dataForm={this.props.dataForm}
            />
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center mt-4 mb-4">
            {this.props.points[0].map((point) => {
              return (
                <div className="col-md-3 col-xs-10 p-4">
                  <Image
                    width="50px"
                    height="35px"
                    alt="icon"
                    src="/assets/images/tick.PNG"
                  />
                  <h6 style={{ display: "inline" }}>{point}</h6>
                  <br />
                </div>
              );
            })}
          </div>
          <div className="row justify-content-center">
            {this.props.points[1].map((point) => {
              return (
                <div className="col-md-3 col-xs-10 p-4">
                  <Image
                    width="50px"
                    height="35px"
                    alt="icon"
                    src="/assets/images/tick.PNG"
                  />
                  <h6 style={{ display: "inline" }}>{point}</h6>
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
