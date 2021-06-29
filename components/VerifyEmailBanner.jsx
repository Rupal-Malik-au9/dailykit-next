import React from "react";
import axios from "axios";
import styled from "styled-components";

import { useAuth } from "../store/auth";
import { VerifyEmailIcon } from "../assets/icons";

const VerfiyEmailBanner = () => {
  const { user } = useAuth();

  const resend = async () => {
    try {
      const data = { id: user?.keycloakId };
      const url = `${process.env.REACT_APP_PLATFORM_URL}/api/dailykit/verify/email`;
      await axios.post(url, data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Styles.Banner>
      <Styles.Aside>
        <VerifyEmailIcon />
      </Styles.Aside>
      <Styles.Main>
        <section>
          <h3>Verification mail sent!</h3>
          <p>
            We need to verify your email address. Please check your inbox for a
            message from us. You’ll find the confirmation link inside.
          </p>
        </section>
        <section>
          <button onClick={resend}>Resend</button>
        </section>
      </Styles.Main>
    </Styles.Banner>
  );
};

export default VerfiyEmailBanner;

const Styles = {
  Banner: styled.div`
    display: grid;
    background: #555b6e;
    font-family: "Nunito", sans-serif;
    height: 6rem;
    color: rgba(255, 255, 255, 1);
    grid-template-columns: 96px 1fr;
  `,
  Aside: styled.aside`
    display: flex;
    font-family: "Nunito", sans-serif;
    align-items: center;
    justify-content: center;
  `,
  Main: styled.main`
    display: grid;
    font-family: "Nunito", sans-serif;
    padding-right: 16px;
    margin-top: -1rem;
    grid-template-columns: 1fr auto;
    align-items: center;

    h3 {
      margin-top: 1rem;
      font-size: 1.5rem;
      font-family: "Nunito", sans-serif;
      line-height: 2rem;
    }
    p {
      font-size: 0.875rem;
      font-family: "Nunito", sans-serif;
      line-height: 1.25rem;
    }
    button {
      background: #00a7e1;
      color: white;
      font-family: "Nunito", sans-serif;
      border-radius: 9999px;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
  `,
};
