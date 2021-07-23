import React, { PureComponent } from "react";

export default class PriceHeading extends PureComponent {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-xs-12 text-center">
            <div className="sec-heading">
              <h2 className="sec-title-lg">{this.props.heading}</h2>
              <p className="sec-text-pad lead">
                <b>
                  The most powerful Restaurant Automation Software on the
                  planet. If you just want as many sales avenues as possible or
                  if you want to add some kitchen operation capabilities or if
                  you want to completely automate, we have you covered.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
