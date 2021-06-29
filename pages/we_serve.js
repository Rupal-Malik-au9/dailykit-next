import React, { PureComponent } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScheduleMeetingSection1 from "../components/subcomponents/shared/ScheduleMeetingSection1";
import Makethejuice from "../components/subcomponents/weservepage/Makethejuice";
import Weserve from "../components/subcomponents/weservepage/Weserve";
import OptimizeKitchen from "../components/subcomponents/weservepage/OptimizeKitchen";
import AnERP from "../components/subcomponents/weservepage/AnERP";
import BannerSection10 from "../components/subcomponents/shared/BannerSection10";

export default class Weservepage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Head>
          <title>We serve</title>
          <meta
            name="Restaurants, Cloud Kitchens, Super Markets, Enterprise - One Stop Solution"
            content="Dailykit is a one stop shop for Restaurants, Cloud Kitchens, Franchisees, Super Markets, Food Startups or even Large Enterprises. Optimize Kitchen Workflows. Explore Multiple New Sales Channels. Never before seen scalability as Dailykit Scales as you Scale. "
          />
          <meta
            property="og:title"
            content="Restaurants, Cloud Kitchens, Super Markets, Enterprise - One Stop Solution"
            key="ogtitle"
          />
          <meta property="og:url" content="https://dailykit.org/we_serve" />
          <meta
            property="og:description"
            content="Dailykit is a one stop shop for Restaurants, Cloud Kitchens, Franchisees, Super Markets, Food Startups or even Large Enterprises. Optimize Kitchen Workflows. Explore Multiple New Sales Channels. Never before seen scalability as Dailykit Scales as you Scale. "
            key="ogdesc"
          />
        </Head>

        <Navbar />

        <Makethejuice
          subheading={"One-Stop Shop"}
          heading={"Make The Juice Worth The Squeeze"}
          image={"/assets/images/we-serve/Lob-hero@2x.png"}
          button1text={"Schedule A Call"}
          button2text={"Learn More"}
          button1link={"#scheduledemo"}
          button2link={"/"}
          smallimage={"/assets/icons/chat-icon.png"}
          smallheading={"Minimum Added Revenue"}
          smallsubheading={"$100000"}
          para={
            "Blend Best Business Practices To Help Your Food Business Maximize Sustainability & Growth"
          }
          dataAccount="3161173:g2o5g2c3i8"
          dataForm="4175704:a4w7j9"
        />
        <Weserve
          heading="We Serve"
          subheading="DailyKIT Does It All"
          image1={"/assets/images/we-serve/Serve-restaurant@2x.png"}
          image2={"/assets/images/we-serve/Serve-supermarket@2x.png"}
          image3={"/assets/images/we-serve/Serve-cloudkitchen@2x.png"}
          image4={"/assets/images/we-serve/Serve-enterprise@2x.png"}
        />
        <OptimizeKitchen
          subheading={"For Restaurants"}
          heading={"Optimize Kitchen Workflows & Juice New Sales Channels."}
          para={
            "An Innovative Omni-Channel Solution That Monetizes Food Trends with End-To-End Kitchen Workflows & Operations Management Software"
          }
          button1text={"Schedule A Call"}
          button1link={"#scheduledemo"}
          button2text={"Learn More"}
          image={"/assets/images/we-serve/restaurant-chef-fold@2x.png"}
          points={[
            [
              {
                heading: "Trending Sales Channels",
                para: "Leverage Trending Product Lines & Sales Channels such as On-Demand, Ready To Eat, Meal Kits, Meal Prep..Etc To Capture Maxmium Revenue.",
                link: "/assets/icons/link.svg",
              },
              {
                heading: "Standardized Kitchen Workflows",
                para: "Increase Kitchen Productivity & Reduce Labor Dependency Through DailyKIT's Automated SOPs That Are Built Around Your Existing BOH Workflows.",
                link: "/assets/icons/map.svg",
              },
            ],

            [
              {
                heading: "Built For Scale",
                para: "Whether You Operate A Single Location or Multiple Locations, A Regional or National Chain, The DailyKIT Platform Will Work For You.",
                link: "/assets/icons/photos.svg",
              },
              {
                heading: "Mitigate Risks & Achieve Stability",
                para: "Reduce dependence on uncertain scenarios like labor, environmental crisis, pandemic or any unforeseen circumstances. DailyKIT acts like the digital copy of your food business that you can turn it on and off at will.",
                link: "/assets/icons/dollar-cycle.svg",
              },
            ],
          ]}
        />
        <BannerSection10
          subheading={"For Supermarkets"}
          heading={"Meet Rapidly Evolving Consumer Needs With Ease"}
          leftImage={"/assets/images/we-serve/supermarket@2x.png"}
          para={
            "Online Grocery Sales Hit A Record $7.2 BN in 2020 & That Is Just Scratching The Surface."
          }
          list1={["Grow Top-Line Revenue", "Mulitply Brand Awareness"]}
          list2={[
            "Increase Bottom-Line Profits",

            "Mitigate Risk & Achieve Sustainability",
          ]}
          id="supermarkets"
          button1link={"#scheduledemo"}
          dataAccount="3161173:g2o5g2c3i8"
          dataForm="4175704:a4w7j9"
        />
        <BannerSection10
          subheading={"For Cloud Kitchens"}
          heading={"Built For Cloud Kitchen Operations"}
          rightImage={"/assets/images/we-serve/Cloudkitchen@2x.png"}
          para={
            "Cloud Kitchens rely heavily on technology to help run their brands. DailyKIT’s ability to take any kitchen to cloud will help bring life into your Ghost Kitchen brands."
          }
          list1={["Incorporate Trending Sales Channels", "Optimize Operations"]}
          list2={["Multiple Brands - One Solution", "Built for The Future"]}
          id="restaurants"
          button1link={"#scheduledemo"}
        />
        <AnERP
          heading={"An ERP for Large Enterprises"}
          rightImage={"/assets/images/we-serve/enterprise-solution@2x.png"}
          para={
            "Easily address the complexities of large food manufacturers and distributors while dealing with high transaction volumes and multiple locations."
          }
          button1text={"Schedule A Meeting"}
          button1link={"#scheduledemo"}
        />

        <ScheduleMeetingSection1
          heading={"Schedule an E-Meeting"}
          id={"scheduledemo"}
          content={[
            {
              question: "How Do You Schedule A Meeting?",
              answer:
                "Select the date on the calendar, the time slot, and then simply fill in your information. Done!",
            },
            {
              question: "What Happens After You Schedule A Meeting?",
              answer:
                "We will send you a calendar invite to your supplied email address with the Google Meet link at the scheduled date & time.In the event that you're unable to join by laptop/computer, we will call you on the given phone number",
            },
            {
              question: "What Happens During The Meeting?",
              answer:
                "We invite you to share good, bad and the ugly of your business. After understanding your requirements and concerns, we will figure out how to deploy the proper DailyKIT tech solutions based on your business strategy.",
            },
          ]}
        />
        <Footer />
      </div>
    );
  }
}
