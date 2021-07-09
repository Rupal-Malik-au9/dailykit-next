import React, { PureComponent } from "react";
import TrialForm from "../shared/TrialForm";
export default class PricingSection1 extends PureComponent {
  render() {
    return (
      <div className="nunito pricingsection1">
               {this.props.marginHeight&&<div style={{marginTop:this.props.marginHeight}}/>}
       {this.props.heading && <h6 className="price-heading">{this.props.heading}</h6>}
       {this.props.subheading &&<h6 className="price-subheading">{this.props.subheading}</h6>}

        <div className="container">
          <div className="row justify-content-center">
            {this.props.offers.map((offer) => {
              return (
                <div className="col-md-4 col-xs-10" key={offer.name}>
                  <div className="card pricing-box" onClick={()=>console.log(offer.price_id)}>
                    <div className="card-body">
                      <h4 className="card-subtitle">{offer.name}</h4>
                      <h1 className="card-title d-inline">{offer.price}</h1>
                      <h5 className="d-inline">/month</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {this.props.buttontext && <a
            type="button"
            href="/pricing"
            className="mt-4 btn-style-thirteen green"
          >
           {this.props.buttontext}
          </a>}
          {this.props.dataAccount &&<TrialForm
            dataAccount={this.props.dataAccount}
            dataForm={this.props.dataForm}
          />}
        </div>
      </div>
    );
  }
}
