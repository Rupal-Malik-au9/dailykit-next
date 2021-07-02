import React from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import {
  Tip,
  Info,
  Card,
  Main,
  Footer as Foter,
  GhostButton,
  Button,
  H2,
  CheckBoxWrapper,
} from "../../components/styled";

import Layout  from "../../components/Layout";
import { useAuth } from "../../store/auth";
import { BulbEmoji } from "../../assets/icons";
import VerifyEmailBanner from "../../components/VerifyEmailBanner";
import { UPDATE_ORGANIZATION } from "../../graphql";
import Footer from "../../components/Footer";

export default function Support() {
  const { user } = useAuth();
  const router = useRouter();
  const [support, setSupport] = React.useState(false);
  const [update] = useMutation(UPDATE_ORGANIZATION, {
    onCompleted: () => {
      router.push("/signup/import");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const nextPage = () => {
    update({
      variables: {
        id: user.organization.id,
        _set: {
          onboardStatus: "IMPORT",
        },
      },
    });
  };
  const prevPage = () => router.push("/signup/hosting");

  return (
    <>
    <Layout>
      <Main>
        {!user?.keycloak?.email_verified && <VerifyEmailBanner />}

        <section className="mt-3 mx-auto w-2/4">
          <H2>Installation and Onboarding Support</H2>
          <CheckBoxWrapper>
            <input
              type="checkbox"
              id="support"
              checked={support}
              onChange={() => setSupport(!support)}
            />
            <label htmlFor="support">
              I want installation and onboard support
            </label>
          </CheckBoxWrapper>
          <Info>
            <div>
              <Tip>
                <span>
                  <BulbEmoji />
                </span>
                <p className="w-3/4">
                  Dailykit is here to help! With simplified intallation and
                  onboarding support, we will
                </p>
              </Tip>
              <ul>
                <li>Setup your software</li>
                <li>Import your data</li>
                <li>Train your staff</li>
                <li>Provide 3 months of 24x7 world class support</li>
              </ul>
            </div>
            <Card>
              <h4>We have a plan for you</h4>
              <span id="strike">$3000</span>
              <span id="discount">100% off (limited)</span>
              <span id="price">Free</span>
            </Card>
          </Info>
        </section>

      </Main>
      <Foter>
        <GhostButton onClick={() => prevPage()}>Back</GhostButton>
        <Button
          onClick={() => nextPage()}
        >
          Next
        </Button>
      </Foter>
      {/* <div style={{marginBottom:"4rem"}}></div> */}
      </Layout>
      <Footer/>
   </>
  );
}
