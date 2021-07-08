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

export default function Hosting() {
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
  console.log(Radio)
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
              offers={[
                {
                  name: "Standard.",
                  price: "$ 29",
                  price_id:"price_1JA9hGGKMRh0bTaiorXrpqXr"
                },
                {
                  name: "Premium",
                  price: "$ 79",
                  price_id:"price_1JAqRJGKMRh0bTaiY4z1dJfb"
                },
                {
                  name: "Professional",
                  price: "$ 499",
                  price_id:"price_1JAqTfGKMRh0bTai5tiXdI5z"
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
