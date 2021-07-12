import React from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import Layout  from "../../../components/Layout";
import { Radio } from "../../../components";
import { useAuth } from "../../../store/auth";
import VerifyEmailBanner from "../../../components/VerifyEmailBanner";
import { UPDATE_ORGANIZATION } from "../../../graphql";
import { Footer as Foter, H2, H4, Main,GhostButton, Button } from "../../../components/styled";
import Confetti from 'react-dom-confetti';
import Footer from "../../../components/Footer";
import PricingSection1 from "../../../components/subcomponents/homepage/PricingSection1";
import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
export default function Hosting() {
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }
    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);
  const router = useRouter();
  const { user } = useAuth();
  const [onProps,setOnProps] = React.useState(false);
  const [option, setOption] = React.useState("cloud");
  const [update] = useMutation(UPDATE_ORGANIZATION, {
    onCompleted: () => {
      router.push("/onboard/signup/support");
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
          onboardStatus: "SUPPORT",
        },
      },
    });
    setOnProps(true)
  };
  const prevPage = () => router.push("/onboard/signup/about-yourself");
 
  return (
    <>
    <Layout>
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
          {option === "cloud" ? (
            <> 
              <H4>Choose your Plan</H4>
              <Radio>
                <Radio.Option
                  id="plan"
                  name="plan"
                  value="plan"
                  onClick={() => { }}
                >
                  <strike>$100</strike>
                  &nbsp;Free
                </Radio.Option>
              </Radio>
            </>):(
              <PricingSection1 heading={"Choose your plan"}
              marginHeight={"-80px"}
              offers={[
                {
                  name: "Standard.",
                  price: "$ 29",
                  price_id:"price_1JCJetGKMRh0bTaia6mIjYwC"
                },
                {
                  name: "Premium",
                  price: "$ 79",
                  price_id:"price_1JCJfGGKMRh0bTaiuqXZltFb"
                },
                {
                  name: "Professional",
                  price: "$ 499",
                  price_id:"price_1JCJffGKMRh0bTai3tYKfX9n"
                },
              ]}
            />
            )
          }
        </section>
      </Main>
      <Foter>
        <GhostButton onClick={() => prevPage()}>Back</GhostButton>
        <Confetti active={ onProps } config={ config }/><Button
          onClick={() => nextPage()}
          style={{
            background: "#8ac03b",
          }}
        >
          Next
        </Button>
      </Foter>
      {/* <div style={{marginBottom:"4rem"}}></div> */}
      </Layout> <Footer/>
   
    </>
  );
}
