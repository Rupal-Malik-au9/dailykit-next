import React, { PureComponent } from "react";
export default class SubHeading1 extends PureComponent {
  render() {
    return (
      <>
        <h5 className="SubHeading1 nunito">
          {this.props.text && this.props.text}
        </h5>
      </>
    );
  }
}
