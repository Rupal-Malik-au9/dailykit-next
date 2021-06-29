import React, { PureComponent } from "react";
export default class Heading1 extends PureComponent {
  render() {
    return (
      <>
        <h1 className="Heading1 nunito">
          {this.props.text && this.props.text}
        </h1>
      </>
    );
  }
}
