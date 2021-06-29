import React, { PureComponent } from "react";
import Heading1 from "../shared/Heading";
import SubHeading1 from "../shared/SubHeading";

export default class SpecialBanner2 extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "8rem" }}>
        <div className="container bluebox2-container">
          {this.props.SubHeading2text && (
            <SubHeading1 text={this.props.SubHeading2text} />
          )}
          {this.props.Heading1text && (
            <Heading1 text={this.props.Heading1text} />
          )}
          {this.props.SubHeading1text && (
            <SubHeading1 text={this.props.SubHeading1text} />
          )}
          <div className="row justify-content-evenly mb-4">
            {this.props.lists &&
              this.props.lists.map((list) => {
                return (
                  <div
                    className="col-md-3 col-xs-10 mt-2 p-4"
                    style={{
                      background:
                        "linear-gradient(135deg, #121c2d 0%, #101a29 100%)",
                      borderRadius: "12px",
                    }}
                  >
                    <small
                      style={{
                        color: "white",
                        display: "block",
                        marginBottom: "2rem",
                      }}
                    >
                      {list.heading1}
                    </small>{" "}
                    <h5
                      style={{
                        display: "inline",
                        fontWeight: "bolder",
                        textAlign: "center",
                        color: "#90c345",
                      }}
                      className="nunito"
                    >
                      {list.heading2}
                    </h5>
                    <br />
                    <p
                      style={{
                        fontSize: "14px",
                        marginTop: "2rem",
                        textAlign: "center",
                        color: "white",
                        lineHeight: "1.6rem",
                      }}
                    >
                      {list.para}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
