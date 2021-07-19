import React from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_ORGANIZATION_ADMINS_BY_STRIPE_PRICE_ID } from "../../../graphql/mutations/addPriceId";
import TrialForm from "../shared/TrialForm";
import { Button } from "../../styled"
export default function PricingSection1(props) {
  const [update] = useMutation(UPDATE_ORGANIZATION_ADMINS_BY_STRIPE_PRICE_ID, {
    onCompleted: () => {
      console.log("priceid")
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const selectPriceId = (email,priceId) => {
    update({
      variables: { where: {
        email:{"_eq": email}},
        _set: {
          stripePriceId: priceId,
        },
      },
    });
    console.log('update done-priceid')
  };
    return (
      <div className="nunito pricingsection1">
        {props.marginHeight &&<div style={{marginTop:props.marginHeight}}/>}
       {props.heading && <h6 className="price-heading">{props.heading}</h6>}
       {props.subheading &&<h6 className="price-subheading">{props.subheading}</h6>}
        <div className="container">
          <div className="row justify-content-center">
            {props.offers.map((offer) => {
              return (
                <div className="col-md-4 col-xs-10" key={offer.name}>
                   
                  <div className="card pricing-box">
                    <div className="card-body">
                      <h4 className="card-subtitle">{offer.name}</h4>
                      <h1 className="card-title d-inline">{offer.price}</h1>
                      <h5 className="d-inline">/month</h5>
                      <form action="/api/add-price-id" method="POST">
                      {offer.price_id && <input type="hidden" name="priceId" value={offer.price_id} />}
                      <input type="hidden" name="email" value={offer.email} />
                      <Button type="submit" role="link"  onClick={() => selectPriceId(offer.email,offer.priceId)}>Select Plan</Button>
                      </form>
                    </div> 
                  </div> 
                </div> 
              );
            })}
          </div>
          {props.buttontext && <a
            type="button"
            href="/pricing"
            className="mt-4 btn-style-thirteen green"
          >
           {props.buttontext}
          </a>}
          {props.dataAccount &&<TrialForm
            dataAccount={props.dataAccount}
            dataForm={props.dataForm}
          />}
        </div>
      </div>
    );
}