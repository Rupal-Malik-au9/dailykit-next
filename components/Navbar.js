import React, { PureComponent } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAuth } from "../store/auth";
export const Navbar =()=> {
    const location = useRouter();
    const {user,authenticated } = useAuth();
    return (
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-light bg-light"
        style={{
          border: "0px solid black",
          boxShadow: "5px 5px 5px #888888",
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
              {!authenticated ? (
                 <li className="nav-item">
                    {!location.pathname.includes("login") && (
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
                      }}
                      onClick={() => location.push("/onboard/signup")}>
                       Signup/Login
                      </a> )}  
                    </li>
                 ):(
                 
           
                user.organization && user.organization.onboardStatus!="FINISH_SETUP" ?(
        <li className="nav-item">
          <a className="nav-link"
                  style={{
                    background: "#8ac03b",
                    color: "white",
                    borderRadius: "7px",
                    fontWeight: "600",
                    marginLeft: "0.7rem",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    fontSize: "14px",
                  }}
                  onClick={() => location.push("/onboard/signup")}
                >
                  Complete your Signup
                </a>
        </li>):(
                       
                          <li className="nav-item">
                            <a className="nav-link"
                                    style={{
                                      background: "#8ac03b",
                                      color: "white",
                                      borderRadius: "7px",
                                      fontWeight: "600",
                                      marginLeft: "0.7rem",
                                      paddingLeft: "20px",
                                      paddingRight: "20px",
                                      fontSize: "14px",
                                    }}
                                    onClick={() => location.push("/onboard/signup")}
                                  >
                                    Go to dashboard
                                  </a>
                          </li>)
     
       
        
      )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  export default Navbar;
  // SETUP_PENDING
  // console.log(user.organization.onboardStatus)