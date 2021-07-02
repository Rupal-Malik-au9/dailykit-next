import React from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import Layout  from "../../components/Layout";
import { useAuth } from "../../store/auth";
import VerifyEmailBanner from "../../components/VerifyEmailBanner";
import { UPDATE_USER, UPDATE_ORGANIZATION } from "../../graphql";
import { Footer as Foter, Main, Field, Label, Form,GhostButton, Button, H2, Input } from "../../components/styled";
import Footer from "../../components/Footer";
export default function AboutYourself() {
  const { user } = useAuth();
  const history = useRouter();
  const [form, setForm] = React.useState({
    phoneNumber: "",
    designation: "",
  });
 
  const [update_org] = useMutation(UPDATE_ORGANIZATION, {
    onCompleted: () => {
      history.push("/signup/hosting");
    },
    onError: (error) => {
      console.log(error);
    },
  });
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
                  autoComplete="off"
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
                  value={form.phoneNumber}
                  autoComplete="off"
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter your phone number"
                />
              </Field>
            </Form>
          </section>
        </div>
      </Main>
      <Foter>
        <GhostButton onClick={() => history.push("/signup/company")}>Back</GhostButton>
        <Button onClick={submit} disabled={!form.designation || !form.phoneNumber}>Next</Button>
      </Foter>
      {/* <div style={{marginBottom:"4rem"}}></div> */}
      </Layout ><Footer />
 </>
  );
};
