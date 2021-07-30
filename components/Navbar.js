import React, { PureComponent } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAuth } from "../store/auth";
import { Styles } from "../components/sections/Header/styled";

export const Navbar = () => {
  const location = useRouter();
  const { user, authenticated, logout } = useAuth();
 

// const checkStatus=()=> {
//   console.log(user?.organization)
//   if (user?.organization?.onboardStatus) {
//     switch (user?.organization?.onboardStatus) {
//        case 'COMPANY':
//           location.push('/onboard/signup/company')
//           break
//        case 'ABOUT_YOURSELF':
//           location.push('/onboard/signup/about-yourself')
//           break
//        case 'HOSTING':
//           location.push('/onboard/signup/hosting')
//           break
//        case 'CARD_DETAILS':
//            location.push('/onboard/signup/card-details')
//            break
//        case 'SUPPORT':
//           location.push('/onboard/signup/support')
//           break
//        case 'IMPORT':
//           location.push('/onboard/signup/import')
//           break
//        case 'SETUP_DOMAIN' ||'FINISH_SETUP':
//           location.push('/onboard/signup/finish-setup')
//           break
//        default:
//           break
//     }
//  }
// }
  return (
    <nav
      className="navbar fixed-top navbar-expand-lg navbar-light bg-light"
      style={{
        border: "0px solid black",
        boxShadow: !location.pathname.includes("onboard") ?"0px 5px 20px rgba(0, 0, 0, 0.1)":"0px 5px 20px rgba(255, 255, 255, 0.3)",
      }}
    >
      <div className="container-fluid mt-2 mb-2">
        <a className="navbar-brand" href="/" style={{ marginLeft: "1.5rem" }}>
          <Image
            src="/assets/images/Logo.png"
            alt=""
            width="181"
            height="54"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {!location.pathname.includes("onboard") ? (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav special-styling me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown hover">
                <a
                  className="nav-link dropdown-toggle"
                  style={{
                    color: "#113D63",
                    fontWeight: "600",
                    marginLeft: "0.7rem",
                    fontSize: "14px",
                  }}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sell
                </a>
                <ul
                  className="special-styling dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <li className="hover">
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                      href="/sells/on_demand_online_store"
                    >
                      onDemand Store
                    </a>
                  </li>
                  <li className="hover">
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                      href="/sells/subscription_store"
                    >
                      Subscription Store
                    </a>
                  </li>
                  <li className="hover">
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                      href="/sells/menu_management"
                    >
                      Menu Management
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown hover">
                <a
                  className="nav-link dropdown-toggle"
                  style={{
                    color: "#113D63",
                    fontWeight: "600",
                    marginLeft: "0.7rem",
                    fontSize: "14px",
                  }}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Operate
                </a>
                <ul
                  className=" special-styling dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <li className="hover">
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                      href="/operate/centralized-order-dashboard"
                    >
                      Centralized Order Dashboard
                    </a>
                  </li>
                  <li className="hover">
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                      href="/operate/order-routing-and-kitchen-display-system"
                    >
                      Order Routing & KDS
                    </a>
                  </li>
                  <li className="hover">
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                      href="/operate/order-fulfillment"
                    >
                      Order Fulfillment Management
                    </a>
                  </li>
                  <li className="hover">
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                      href="/operate/packaging-management"
                    >
                      Packaging Management
                    </a>
                  </li>
                  <li className="hover">
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                      href="/operate/portion-control"
                    >
                      Portion Control
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{
                    color: "#113D63",
                    fontWeight: "600",
                    marginLeft: "0.7rem",
                    fontSize: "14px",
                  }}
                  href="/market"
                >
                  Market
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{
                    color: "#113D63",
                    fontWeight: "600",
                    marginLeft: "0.7rem",
                    fontSize: "14px",
                  }}
                  href="/we_serve"
                >
                  We Serve
                </a>
              </li>
              <li className="nav-item dropdown hover">
                <a
                  className="nav-link dropdown-toggle"
                  style={{
                    color: "#113D63",
                    fontWeight: "600",
                    marginLeft: "0.7rem",
                    fontSize: "14px",
                  }}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Start a Meal Kit Brand
                </a>
                <ul
                  className=" special-styling dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <li className="hover">
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                    >
                      For Restaurants ▼
                    </a>
                    <ul className="special-styling">
                      <li className="hover">
                        <a href="/start_a_mealKit_brand/restaurants/fine-dine-restaurants">
                          Casual and Fine Dining
                        </a>
                      </li>
                      <li className="hover">
                        <a href="/start_a_mealKit_brand/restaurants/cafes">
                          QSR, Cafes
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="hover">
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                    >
                      For Enterprise ▼
                    </a>
                    <ul className="special-styling">
                      <li className="hover">
                        <a href="/start_a_mealKit_brand/enterprise/grocers">
                          Grocers
                        </a>
                      </li>
                      <li className="hover">
                        <a href="/start_a_mealKit_brand/enterprise/meal-kit-startups">
                          Meal kit Startups
                        </a>
                      </li>
                      <li className="hover">
                        <a href="/start_a_mealKit_brand/enterprise/how-dailykit-can-help-franchisees">
                          Franchisees
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="hover">
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                      href="/start_a_mealKit_brand/cloud_kitchen"
                    >
                      Cloud Kitchen
                    </a>
                  </li>
                  <li className="hover">
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                      href="/start_a_mealKit_brand/bakerypage"
                    >
                      Bakery
                    </a>
                  </li>
                  <li className="hover">
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                    >
                      Meal Kit Guides ▼
                    </a>
                    <ul className="special-styling">
                      <li className="hover">
                        <a href="/start_a_mealKit_brand/meal-kit-guides/meal-kit-packaging">
                          Meal Kit Packaging
                        </a>
                      </li>
                      <li className="hover">
                        <a>The Meal Kit Marketing Guide ▼</a>
                        <ul className="special-styling">
                          <li className="hover">
                            <a href="/start_a_mealKit_brand/start_a_mealKit_brand/meal-kit-guides/meal-kit-marketing-guides/how-to-decide-your-meal-kits">
                              How to decide your meal kits
                            </a>
                          </li>
                          <li className="hover">
                            <a href="/start_a_mealKit_brand/meal-kit-guides/meal-kit-marketing-guides/how-to-price-your-meal-kits">
                              How to price your meal kits
                            </a>
                          </li>
                          <li className="hover">
                            <a href="/start_a_mealKit_brand/meal-kit-guides/meal-kit-marketing-guides/how-to-promote-your-meal-kits">
                              How to promote your meal kits
                            </a>
                          </li>
                          <li className="hover">
                            <a href="/start_a_mealKit_brand/meal-kit-guides/meal-kit-marketing-guides/how-to-sell-your-meal-kits">
                              How to sell your meal kits
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="hover">
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                    >
                      Start Meal Kit Brand ▼
                    </a>
                    <ul className="special-styling">
                      <li className="hover">
                        <a href="/start_a_mealKit_brand/start-meal-kit-brands/what-is-meal-kit">
                          What is a Meal Kit?
                        </a>
                      </li>
                      <li className="hover">
                        <a href="/start_a_mealKit_brand/start-meal-kit-brands/how-to-start-a-Meal-Kit-Service">
                          How to start a Meal Kit Service
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="hover">
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                    >
                      Case study ▼
                    </a>
                    <ul className="special-styling">
                      <li className="hover">
                        <a href="/start_a_mealKit_brand/case-study/Groctaurant-Case-Study">
                          Groctaurant Case Study
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown hover">
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                    >
                      Do more ▼
                    </a>
                    <ul className="special-styling">
                      <li className="hover">
                        <a href="/start_a_mealKit_brand/do-more/Recipe-Provider">
                          Recipe Provider
                        </a>
                      </li>
                      <li className="hover">
                        <a href="/start_a_mealKit_brand/do-more/Co-Packer">
                          Co-Packer
                        </a>
                      </li>
                      <li className="hover">
                        <a href="/start_a_mealKit_brand/do-more/Co-Seller">
                          Co-Seller
                        </a>
                      </li>
                      <li className="hover">
                        <a href="/start_a_mealKit_brand/do-more/Delivery-Partner">
                          Delivery Partner
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown hover">
                <a
                  className="nav-link dropdown-toggle"
                  style={{
                    color: "#113D63",
                    fontWeight: "600",
                    marginLeft: "0.7rem",
                    fontSize: "14px",
                  }}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </a>
                <ul
                  className=" special-styling dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <li className="hover">
                    <a
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      style={{
                        color: "#113D63",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      className="dropdown-item"
                      href="/start_a_mealKit_brand/Aboutus/Ourphilosophy"
                    >
                      Our Philosophy
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{
                    color: "#113D63",
                    fontWeight: "600",
                    marginLeft: "0.7rem",
                    fontSize: "14px",
                  }}
                  href="https://blog.dailykit.org/"
                >
                  Our Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{
                    color: "#113D63",
                    fontWeight: "600",
                    marginLeft: "0.7rem",
                    fontSize: "14px",
                  }}
                  href="/pricing"
                >
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{
                    color: "#113D63",
                    fontWeight: "600",
                    marginLeft: "0.7rem",
                    fontSize: "14px",
                  }}
                  href="#scheduledemo"
                >
                  Schedule Demo
                </a>
              </li>
              {/* *******authenticated and not in onboard pages so 1signup/login 2)complete your signup 3)Logout */}
              <li className="nav-item">
                {authenticated ? (<>
                  {user?.organization?.onboardStatus != "FINISH_SETUP" ? (
                   <a
                   className="nav-link"
                   style={{
                     background: "#8ac03b",
                     color: "white",
                     borderRadius: "7px",
                     fontWeight: "600",
                     marginLeft: "0.7rem",
                     paddingLeft: "20px",
                     paddingRight: "20px",
                     fontSize: "14px",
                     cursor: "pointer"
                   }}
                   onClick={()=>location.push('/onboard/signup/company')}>
                  Complete your Signup
                 </a>) : (<a
                      className="nav-link"
                      style={{
                          background: "#8ac03b",
                          color: "white",
                          borderRadius: "7px",
                          fontWeight: "600",
                          marginLeft: "0.7rem",
                          paddingLeft: "20px",
                          paddingRight: "20px",
                          fontSize: "14px",
                          cursor: "pointer"
                      }}
                      onClick={logout}
                    >
                      Logout
                    </a>)
                  }</>) : (<a
                    className="nav-link"
                    style={{
                      background: "#8ac03b",
                      color: "white",
                      borderRadius: "7px",
                      fontWeight: "600",
                      marginLeft: "0.7rem",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      fontSize: "14px",
                      cursor: "pointer"
                    }}
                    onClick={() => location.push("/onboard/signup")}
                  >
                    Signup/Login
                  </a>
                )}
              </li>
              {/*authenticated and NOT IN ONBOARD PAGES so 1signup/login 2)complete your signup 3)Logout  ********/}
            </ul>
          </div>



        ) : (


          // ONBOARD PAGES

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav special-styling me-auto mb-2 mb-lg-0">
              {/* if not authenticated and ONBOARD PAGES then 2 condtion 1)login or 2) signup */}
              {!authenticated ? (

                <li className="nav-item">
                  <section className="username">
                  {!location.pathname.includes("login") ? (
                        <Styles.Auth className="nunito solid text-white border-0" style={{ "marginLeft": "6.5rem",fontWeight:"bold",fontSize:"1rem" }}
                         onClick={() => location.push("/onboard/login")}>
                            Login
                            </Styles.Auth>
                  ) : (
                    <Styles.Auth className="nunito solid text-white border-0" style={{marginLeft: "6.5rem",fontWeight:"bold",fontSize:"1rem" }}
                         onClick={() => location.push("/onboard/signup")}>
                           Signup
                            </Styles.Auth>)}
                  </section>
                </li>
              ) : (

                // {/* // if authenticated then 2 condtion 1)logout or 2)go to dasboard */}
                <li className="nav-item">
                  <section className="username">
                    <span
                      title={user?.name} style={{ fontSize: "16px" }}
                      className="nunito rounded-full w-8 h-8 text-sm text-black cursor-default"
                    >
                      Hello, {user?.firstName}
                      {user?.lastName}
                    </span>
                    {user?.organization.onboardStatus == "FINISH_SETUP" ? (
                      <Styles.Auth
                        className="nunito solid text-white border-0"
                        style={{ "marginLeft": "0.5rem" }}
                        onClick={() => location.push("/")}
                      >
                        Go to dashboard
                      </Styles.Auth>
                    ) : (<Styles.Auth onClick={logout} className="ghost text-white text-uppercase border-0">
                      Logout
                    </Styles.Auth>)}


                  </section>

                </li>
              )}
            </ul>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;