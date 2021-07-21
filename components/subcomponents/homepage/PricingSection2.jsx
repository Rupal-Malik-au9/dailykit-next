import React from "react";
export default function PricingSection2({ offer }) {
  return (<div className="col-md-4 col-xs-10" key={offer.price_id}>
    <div className="card pricing-box" style={{ boxShadow: offer.onSelect && offer.boxShadow }}>
      <div className="card-body"  onClick={()=>{offer.setOnSelect(true);offer.resetOnSelect2(false);offer.resetOnSelect3(false); offer.setOnPrice(offer.price_id)}}>
        <h4 className="card-subtitle">{offer.name}</h4>
        <h1 className="card-title d-inline">{offer.price}</h1>
        <h5 className="d-inline">/month</h5><br/>
          <input type="button" className='mt-4 onBoardButton' value='Select Plan'/>
      </div>
    </div>
  </div>
  );
}