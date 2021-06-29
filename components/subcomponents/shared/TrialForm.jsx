import React, { PureComponent } from "react";
export default class TrialForm extends PureComponent {
  render() {
    return (
      <div className="container mt-4">
        <div
          className="ml-form-embed"
          data-account={this.props.dataAccount}
          data-form={this.props.dataForm}
        >
          {" "}
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}
