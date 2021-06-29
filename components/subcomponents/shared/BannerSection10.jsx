import React, { PureComponent } from "react";
import ContactFormSection2 from "./ContactFormSection2";
import Image from "next/image";
export default class BannerSection10 extends PureComponent {
  render() {
    return (
      <>
        <div
          className="container"
          style={{ marginTop: "8rem" }}
          id={this.props.id}
        >
          <div className="row justify-content-between">
            {this.props.leftImage && (
              <div className="col-md-6 col-xs-10">
                <Image
                  height="606px"
                  width="546px"
                  src={this.props.leftImage}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            )}
            <div className="col-md-6 col-xs-10 trend-responsive">
              {" "}
              <h6
                style={{
                  fontWeight: "bolder",
                }}
              >
                {this.props.subheading}
              </h6>
              <h2 className="nunito market-heading">{this.props.heading}</h2>
              <p
                style={{
                  fontSize: "18px",
                }}
              >
                <div className="row">
                  <div
                    className="col-2 vl"
                    style={{ marginRight: "-70px", paddingRight: "-12px" }}
                  ></div>
                  <div className="col-md-10">{this.props.para}</div>
                </div>
                <div
                  className="row"
                  style={{ marginTop: "2rem", marginLeft: "2rem" }}
                >
                  <ul className="col-md-6 col-xs-10 onDemandCategories trend-responsive">
                    {this.props.list1.map((list) => {
                      return (
                        <li key={list} style={{ fontSize: "14px" }}>
                          {list}
                        </li>
                      );
                    })}
                  </ul>
                  <ul className="col-md-6 col-xs-10 onDemandCategories">
                    {this.props.list2.map((list) => {
                      return (
                        <li key={list} style={{ fontSize: "14px" }}>
                          {list}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </p>
              <a href={this.props.button1link}>
                <button type="button" className="weserve_button1">
                  Schedule A Call
                </button>
              </a>
              &nbsp;&nbsp;
              <button
                type="button"
                className="weserve_button2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Learn More
              </button>
            </div>
            <ContactFormSection2
              dataAccount={this.props.dataAccount}
              dataForm={this.props.dataForm}
            />
            {this.props.rightImage && (
              <div className="col-md-6 col-xs-10 right-image-margintop">
                <Image
                  height="606px"
                  width="546px"
                  src={this.props.rightImage}
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
