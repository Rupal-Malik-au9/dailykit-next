import React, { PureComponent } from "react";
import Image from "next/image";
export default class BlueBoxSection1 extends PureComponent {
  render() {
    return (
      <div className="nunito bluebox-section1">
        {this.props.subheading && <h6>{this.props.subheading}</h6>}
        {this.props.mainheading && <h1>{this.props.mainheading}</h1>}
        <div className="container">
          <div className="row justify-content-evenly">
            {this.props.boxes &&
              this.props.boxes.map((box) => {
                return (
                  <div
                    className="col-md-4 col-xs-10 box-container"
                    key={box.heading}
                  >
                    <div className="row justify-content-center ">
                      <div className="col-md-4 col-xs-10 ">
                        <Image
                          width="80px"
                          height="80px"
                          src={box.image}
                          alt="icon"
                        />
                      </div>
                      <div className="col-8 box">
                        <h5
                          style={{
                            marginTop: "2rem",
                            fontSize: "22px",
                            padding: "0px 0px 10px",
                          }}
                        >
                          {box.heading}
                        </h5>
                        <p style={{ fontSize: "16px", margin: "8px 0px 10px" }}>
                          {box.para}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
