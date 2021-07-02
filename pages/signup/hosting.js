import React from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import Layout  from "../../components/Layout";
import { Radio } from "../../components";
import { useAuth } from "../../store/auth";
import VerifyEmailBanner from "../../components/VerifyEmailBanner";
import { UPDATE_ORGANIZATION } from "../../graphql";
import { Footer as Foter, H2, H4, Main,GhostButton, Button } from "../../components/styled";
import Footer from "../../components/Footer";
export default function Hosting() {
  const router = useRouter();
  const { user } = useAuth();
  const [update] = useMutation(UPDATE_ORGANIZATION, {
    onCompleted: () => {
      router.push("/signup/support");
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
          onboardStatus: "SUPPORT",
        },
      },
    });
  };
  const prevPage = () => router.push("/signup/about-yourself");
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
              value="cloud"
              id="cloud"
              name="hosting"
              onClick={() => { }}
            >
              Cloud Hosting
            </Radio.Option>
            <Radio.Option
              id="self"
              isDisabled
              name="hosting"
              value=""
              onClick={() => { }}
            >
              Self Hosting
            </Radio.Option>
          </Radio>
          {user.organization?.hosting?.type === "cloud" && (
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
            </>
          )}
        </section>
      </Main>
      <Foter>
        <GhostButton onClick={() => prevPage()}>Back</GhostButton>
        <Button
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
