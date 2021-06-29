import React, { PureComponent } from "react";
export default class Bluebox extends PureComponent {
  render() {
    return (
      <div
        style={{ background: "#111B2B", textAlign: "center", color: "white" }}
      >
        <div style={{ color: "#111B2B" }}>.</div>
        <div
          style={{
            fontWeight: "bolder",
            fontSize: "50px",
            margin: "3rem 0rem 2rem 0rem",
          }}
        >
          {this.props.heading}
        </div>
        <a href={this.props.buttonlink}>
          <button
            type="button"
            className="btn-style-thirteen green p-3 pl-4 pr-4 mb-4"
          >
            {this.props.buttontext}
          </button>
        </a>
        <div className="container">
          <div className="row justify-content-center mb-4 mt-4">
            <div className="col-md-5 col-xs-10 bluebox-right">
              {this.props.leftpara}
            </div>
            <div className="col-md-1 blackline"></div>
            <div className="col-md-5 col-xs-10 bluebox-left">
              {this.props.rightpara}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
