import React, { PureComponent } from "react";
import Image from "next/image";
export default class BannerSection9 extends PureComponent {
  render() {
    return (
      <div style={{ backgroundColor: "#F7F9FC", textAlign: "center" }}>
        <div style={{ color: "#F7F9FC" }}>.</div>
        <h2
          style={{
            fontWeight: "bolder",
            fontSize: "50px",
            margin: "4rem 0rem 0.5rem 0rem",
          }}
          className="nunito"
        >
          {this.props.heading ? this.props.heading : "Order Notifications"}
        </h2>
        <h6>
          {this.props.subheading
            ? this.props.subheading
            : `It is vital that no order slips through the cracks.
         Get Notifications where you want.`}
        </h6>
        <div className="container bannerSection9-container">
          <div className="row justify-content-evenly">
            <div className="col-md-3 col-xs-10 p-4  justify-content-center">
              <div style={{ display: "block" }}>
                <Image
                  width={
                    this.props.width1Image ? this.props.width1Image : "200px"
                  }
                  height={
                    this.props.height1Image
                      ? this.props.height1Image
                      : "206.25px"
                  }
                  alt="icon"
                  src={this.props.image1}
                  style={{
                    margin: "0rem 40% 2rem 30%",
                  }}
                />
              </div>
              <h5
                style={{
                  display: "inline",
                  fontWeight: "bolder",
                  fontSize: "21px",
                  textAlign: "center",
                }}
                className="nunito"
              >
                {this.props.imagetitle1
                  ? this.props.imagetitle1
                  : "Create Custom Plans & Options"}
              </h5>
              <br />
              <p
                style={{
                  fontSize: "14px",
                  marginTop: "1rem",
                  textAlign: "center",
                }}
              >
                {this.props.imagepara1
                  ? this.props.imagepara1
                  : `Multiple Plans like Vegan or Seafood | Couple or family | 2 or 3
                  items. It's upto you.`}
              </p>
            </div>
            <div className="col-md-3 col-xs-10 p-4  justify-content-center">
              <div style={{ display: "block" }}>
                <Image
                  width={this.props.width ? this.props.width : "220px"}
                  height={this.props.height ? this.props.height : "206.25px"}
                  alt="icon"
                  src={this.props.image2}
                  style={{
                    width: "220px",
                    display: "block",
                    margin: "0rem 40% 2rem 30%",
                  }}
                />
              </div>
              <h5
                style={{
                  display: "inline",
                  fontWeight: "bolder",
                  fontSize: "21px",
                }}
                className="nunito"
              >
                {this.props.imagetitle2 ? this.props.imagetitle2 : `Print KOTs`}
              </h5>
              <br />
              <p
                style={{
                  fontSize: "14px",
                  marginTop: "1rem",
                  textAlign: "center",
                }}
              >
                {this.props.imagepara2
                  ? this.props.imagepara2
                  : `Automatically Print KOTs with Order Details for the Manager &
                  Kitchen Stations.`}
              </p>
            </div>
            <div className="col-md-3 col-xs-10 p-4  justify-content-center">
              <div style={{ display: "block" }}>
                <Image
                  width={this.props.width ? this.props.width : "220px"}
                  height={this.props.height ? this.props.height : "206.25px"}
                  alt="icon"
                  src={this.props.image3}
                  style={{
                    width: "220px",
                    display: "block",
                    margin: "0rem 40% 2rem 30%",
                  }}
                />
              </div>
              <h5
                style={{
                  display: "inline",
                  fontWeight: "bolder",
                  fontSize: "21px",
                }}
                className="nunito"
              >
                {this.props.imagetitle3
                  ? this.props.imagetitle3
                  : `Email & SMS Notifications`}
              </h5>
              <br />
              <p
                style={{
                  fontSize: "14px",
                  marginTop: "1rem",
                  textAlign: "center",
                }}
              >
                {this.props.imagepara3
                  ? this.props.imagepara3
                  : `Configure Email & SMS to be sent to multiple staff members
                  anytime a new order is received.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
