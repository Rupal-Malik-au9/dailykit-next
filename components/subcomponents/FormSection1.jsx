import React, { PureComponent } from "react";
export default class FormSection1 extends PureComponent {
  render() {
    return (
      <>
        <button
          type="button"
          className="btn btn-primary sidebar-contactus sticky-top"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Contact Us
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Fill the form
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
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
          </div>
        </div>
      </>
    );
  }
}
