import React from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import Layout  from "../../../components/Layout";
import { useAuth } from "../../../store/auth";
import VerifyEmailBanner from "../../../components/VerifyEmailBanner";
import { UPDATE_USER, UPDATE_ORGANIZATION } from "../../../graphql";
import { Footer as Foter, Main, Field, Label, Form,GhostButton, Button, H2, Input } from "../../../components/styled";
import Footer from "../../../components/Footer";
import Confetti from 'react-dom-confetti';
var validator = require('validator');

export default function AboutYourself() {
  const { user } = useAuth();
  const history = useRouter();
  const [error, setError] = React.useState("");
  const [error2, setError2] = React.useState("");
  const [onProps,setOnProps] = React.useState(false);

  const [form, setForm] = React.useState({
    phoneNumber: "",
    designation: "",
  });
    // for validation
    React.useEffect(() => {
      if(form.phoneNumber && !validator.isMobilePhone(form.phoneNumber)) {
        return setError2("Please enter a correct phone Number"); 
      }
   if(form.designation && !validator.isAlpha(validator.blacklist(form.designation, ' '))){
      return setError2("Enter your correct designation");
    }
    else { 
      return setError2("");
    }
  })
  const [update_org] = useMutation(UPDATE_ORGANIZATION, {
    onCompleted: () => {
      history.push("/onboard/signup/hosting");
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
  const [update] = useMutation(UPDATE_USER, {
    onCompleted: () => {
      update_org({
        variables: {
          id: user.organization.id,
          _set: {
            onboardStatus: "HOSTING",
          },
        },
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  React.useEffect(() => {
    if (user?.id) {
      setForm((form) => ({
        ...form,
        designation: user?.designation || "",
        phoneNumber: user?.phoneNumber || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const submit = () => {
    if (!form.designation) return setError("Designation is required.");
    if (!form.phoneNumber) return setError("Phone Number is required.");
    update({
      variables: {
        id: user.id,
        _set: {
          designation: form.designation,
          phoneNumber: form.phoneNumber,
        },
      },
    });
    setOnProps(true)
  };

  return (
    <>
    <Layout>
      <Main>
        {!user?.keycloak?.email_verified && <VerifyEmailBanner />}
        <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0 2rem" }}>
          <section className="mt-3 mx-auto w-1/4" style={{ "height": "20rem", display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <H2>Tell us about yourself</H2>
            <Form>
              <Field>
                <Label htmlFor="designation">Designation</Label>
                <Input
                  type="text"
                  required
                  id="designation"
                  name="designation"
                  value={form.designation}
                  placeholder="Enter your designation"
                  onChange={(e) => handleChange(e)}
                />
              </Field>
              <Field>
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  minlength="10"
                  value={form.phoneNumber}
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter your phone number"
                />
              </Field>
              {error && (
            <Error>{error}</Error>
          )}
          {error2 && (
            <Error>{error2}</Error>
          )}
            </Form>
          </section>
        </div>
      </Main>
      <Foter style={{justifyContent:"space-between",fontWeight: "bold",marginTop:"-80px"}}>
        <GhostButton onClick={() => history.push("/onboard/signup/company")}  style={{"marginLeft":"10px"}}><Image
            height="12px"
            src="/assets/icons/green-arrow.png"
            alt="icon"
            width="16px"
            className="ml-4"
          />Back</GhostButton>
        <Button onClick={submit} disabled={!form.designation || !form.phoneNumber} style={{marginLeft:"58rem",marginTop:"-1.5px"}}>Next <Image
            height="12px"
            src="/assets/icons/arrow.png"
            alt="icon"
            width="16px"
            className="ml-4"
          /></Button>
        <Confetti active={ onProps } config={ config }/>
      </Foter>
      {/* <div style={{marginBottom:"4rem"}}></div> */}
      </Layout ><Footer />
 </>
  );
};

const Error=styled.span`
justify-self: start;
display: block;
--tw-text-opacity: 1;
color: rgba(239, 68, 68, var(--tw-text-opacity));
margin-top: 0.5rem;
`