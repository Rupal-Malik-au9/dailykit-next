import React, { PureComponent } from "react";
import Heading1 from "../shared/Heading";
import SubHeading1 from "../shared/SubHeading";
import Image from "next/image";
export default class SpecialBanner3 extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "6rem" }}>
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

          <div className="row">
            <div className="col-md-6 col-xs-10 ">
              <Image
                width={this.props.width ? this.props.width : "446px"}
                height={this.props.height ? this.props.height : "557px"}
                src={this.props.imageurl1}
                alt="..."
                className="image-responsive-2"
              />
            </div>
            <div className="col-md-6 col-xs-10">
              <Image
                width={this.props.width ? this.props.width : "446px"}
                height={this.props.height ? this.props.height : "557px"}
                src={this.props.imageurl2}
                alt="..."
                className="image-responsive-2"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
