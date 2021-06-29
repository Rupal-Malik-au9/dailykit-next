import React, { PureComponent } from "react";
import Image from "next/image";
export default class PriceBanner1 extends PureComponent {
  render() {
    return (
      <div className="container" style={{ marginTop: "-4rem" }}>
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 text-center text-lg-left order-last order-lg-first">
            <div className="header-text-lg">
              <h1 className="sec-title-xl">Pricing plans</h1>
              <p className="lead">
                Chose the best plan that fits your requirments
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="header-img sec-img">
              <Image
                src="/assets/images/pricingheader.png"
                className="img-fluid"
                alt="header-img"
                height="673.5px"
                width="636.01px"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
