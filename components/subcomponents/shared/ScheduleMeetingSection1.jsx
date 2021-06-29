import React, { PureComponent } from "react";
export default class ScheduleMeetingSection1 extends PureComponent {
  render() {
    return (
      <div className="container schedule-meeting-section1" id={this.props.id}>
        <div className="row justify-content-between schedule-meeting-box1">
          <div className="col-md-5 col-xs-10 ">
            <h2 className="nunito">{this.props.heading}</h2>
            {this.props.content &&
              this.props.content.map((line) => {
                return (
                  <span key={line.question}>
                    <div className="question">{line.question}</div>
                    <p className="answer">{line.answer}</p>
                    <br />
                  </span>
                );
              })}
          </div>
          <div className="col-md-7 col-xs-10 nunito">
            <div className="row justify-content-center text-center">
              <div className="col-md-8 col-xs-10">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/dailykit/15min"
                  style={{ minWidth: "320px", height: "630px" }}
                >
                  {/* <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div> */}
                </div>
                <small>
                  <br /> <br />
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
