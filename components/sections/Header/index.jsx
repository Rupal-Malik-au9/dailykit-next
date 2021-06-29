import React from "react";
import router, { useRouter } from "next/router";

import { Styles } from "./styled";

import { useAuth } from "../../../store/auth";
import { HomeIcon } from "../../../assets/icons";

const Header = () => {
  const location = useRouter();
  const { user, logout, authenticated } = useAuth();
  return (
    <Styles.Header>
      <Styles.Nav>
        <Styles.Button
          type="button"
          title="Home"
          onClick={() => location.push("/")}
        >
          <HomeIcon size="20" style={{ color: "white", stroke: "white" }} />
        </Styles.Button>
      </Styles.Nav>
      {authenticated ? (
        <section className="flex ml-auto pr-2 space-x-2">
          <span
            title={user?.name}
            className="rounded-full w-8 h-8 text-sm uppercase tracking-wide font-semibold flex items-center justify-center bg-green-700 text-white cursor-default"
          >
            Hello, {user?.firstName}
            {user?.lastName}
          </span>
          <Styles.Auth onClick={logout} className="ghost">
            Logout
          </Styles.Auth>
        </section>
      ) : (
        <section className="ml-auto pr-2 space-x-2">
          {!location.pathname.includes("login") && (
            <Styles.Auth
              className="solid"
              onClick={() => location.push("/login")}
            >
              Login
            </Styles.Auth>
          )}
          {!location.pathname.includes("signup") && (
            <Styles.Auth
              className="solid"
              onClick={() => history.push("/signup")}
            >
              Sign Up
            </Styles.Auth>
          )}
        </section>
      )}
    </Styles.Header>
  );
};

export default Header;
