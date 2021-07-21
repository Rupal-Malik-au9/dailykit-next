import React from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import { Radio } from "../../../components";
import { useAuth } from "../../../store/auth";
import VerifyEmailBanner from "../../../components/VerifyEmailBanner";
import { UPDATE_ORGANIZATION } from "../../../graphql";
import { Footer as Foter, H2, H4, Main, GhostButton, Button } from "../../../components/styled";
import Confetti from 'react-dom-confetti';
import Footer from "../../../components/Footer";
import PricingSection2 from "../../../components/subcomponents/homepage/PricingSection2";

export default function Hosting() {
  const router = useRouter();
  const { user } = useAuth();
  const [onProps, setOnProps] = React.useState(false);
  const [setPrice, setOnPrice] = React.useState('');
  // for change of boxShadow for selected plan
  const [onSelect1, setOnSelect1] = React.useState(false);
  const [onSelect2, setOnSelect2] = React.useState(false);
  const [onSelect3, setOnSelect3] = React.useState(false);
// for selecting type of hosting
  const [option, setOption] = React.useState("cloud");
  const [update] = useMutation(UPDATE_ORGANIZATION, {
    onCompleted: () => {
      router.push("/onboard/signup/card-details");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const config = {
    angle: 90,
    spread: "123",
    startVelocity: "19",
    elementCount: "25",
    dragFriction: 0.12,
    duration: "2160",
    stagger: 3,
    width: "10px",
    height: "7px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };

  const nextPage = () => {
    update({
      variables: {
        id: user.organization.id,
        _set: {
          onboardStatus: "CARD_DETAILS",
        },
      },
    });
    setOnProps(true)
    console.log(user)
  };
  const prevPage = () => router.push("/onboard/signup/about-yourself");

  return (
    <>
      <Layout>
      <form action="/api/add-price-id" method="POST">
        <Main>
          {!user?.keycloak?.email_verified && <VerifyEmailBanner />}
          <section className="mt-3 mx-auto w-2/4">
            <H2>Hosting</H2>
            <Radio>
              <Radio.Option
                value={option}
                id="cloud"
                name="hosting"
                onClick={() => setOption("cloud")}
              >
                Cloud Hosting
              </Radio.Option>
              <Radio.Option
                id="self"
                name="hosting"
                value={option}
                onClick={() => setOption("self")}
              >
                Self Hosting
              </Radio.Option>
            </Radio>
 
            <div className="nunito pricingsection2">
              <h3 className="price-heading">Choose your plan</h3>
              {option === "cloud" ? (

                <div className="container">
                  <div className="row justify-content-center">
                
                  <input type="hidden" name="email" value={user.email} />
                    <PricingSection2
                      offer={{
                        name: "Standard.",
                        price: "$ 29",
                        price_id: "price_1JCJetGKMRh0bTaia6mIjYwC",
                        email: user.email,
                        onSelect:onSelect1,
                        setOnPrice:setOnPrice,
                        setOnSelect:setOnSelect1,
                        resetOnSelect2:setOnSelect2,
                        resetOnSelect3:setOnSelect3,
                        boxShadow: '1px 1px 2px #8ac03b,-1px -1px 2px #8ac03b,inset -5px 5px 10px #8ac03b,inset 5px -5px 10px #8ac03b,inset -5px -5px 10px #8ac03b,inset 5px 5px 13px #8ac03b'
                      }} />

                    <PricingSection2
                      offer={{
                        name: "Premium",
                        price: "$ 79",
                        price_id: "price_1JCJfGGKMRh0bTaiuqXZltFb",
                        email: user.email,
                        onSelect:onSelect2,
                        setOnPrice:setOnPrice,
                        setOnSelect:setOnSelect2,
                        resetOnSelect2:setOnSelect1,
                        resetOnSelect3:setOnSelect3,
                        boxShadow: '1px 1px 2px #8ac03b,-1px -1px 2px #8ac03b,inset -5px 5px 10px #8ac03b,inset 5px -5px 10px #8ac03b,inset -5px -5px 10px #8ac03b,inset 5px 5px 13px #8ac03b'
                      }
                      } />

                    <PricingSection2
                      offer={{
                        name: "Professional",
                        price: "$ 499",
                        price_id: "price_1JCJffGKMRh0bTai3tYKfX9n",
                        email: user.email,
                        onSelect:onSelect3,
                        setOnPrice:setOnPrice,
                        setOnSelect:setOnSelect3,
                        resetOnSelect2:setOnSelect1,
                        resetOnSelect3:setOnSelect2,
                        boxShadow: '1px 1px 2px #8ac03b,-1px -1px 2px #8ac03b,inset -5px 5px 10px #8ac03b,inset 5px -5px 10px #8ac03b,inset -5px -5px 10px #8ac03b,inset 5px 5px 13px #8ac03b'
                      }} />
                        <input type="hidden" name="priceId" value={setPrice} />
                      </div></div>
              ) : (
                <>
                  <div style={{ textAlign: "center" }}>
                    coming soon....
                  </div>
                </>
              )
              }</div>
          </section>
        </Main>
        <Foter>
          <GhostButton onClick={() => prevPage()}>Back</GhostButton>
          <Confetti active={onProps} config={config} />
          <Button
            onClick={() => nextPage()}
            type="submit" role="link"
            style={{
              background: "#8ac03b",
            }}
          >
            Next
          </Button>
        </Foter>
        </form>
      </Layout> <Footer />

    </>
  );
}
