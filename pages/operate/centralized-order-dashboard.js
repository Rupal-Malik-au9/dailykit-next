import React, { PureComponent } from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import EndToEndFoodBusiness from "../../components/subcomponents/shared/EndToEndFoodBusiness";
import ScheduleMeetingSection1 from "../../components/subcomponents/shared/ScheduleMeetingSection1";
import BannerSection2 from "../../components/subcomponents/shared/BannerSection2";
import BannerSection7 from "../../components/subcomponents/shared/BannerSection7";
import BannerSection9 from "../../components/subcomponents/shared/BannerSection9";
import SpecialBanner1 from "../../components/subcomponents/shared/SpecialBanner1";
export default class Orderdashboardpage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Head>
          <title>Operate: Order Dashboard</title>
          <meta
            name="The Most Complete Order Management Software Capabilities"
            content="Dailykit's Order Management is equipped with one of the most advanced Order Management Capabilities. Easily Manage Meal Kit Orders. Pack Meal Kits with Ease. Delivery Management Made Easy. Print KOTs and Recipe Information. Ingredient Level Information. Recieve Pre Orders and make Ingredient level Inventory Planning."
          />
          <meta
            property="og:title"
            content="The Most Complete Order Management Software Capabilities "
            key="ogtitle"
          />
          <meta
            property="og:url"
            content="https://dailykit.org/operate/centralized-order-dashboard"
          />
          <meta
            property="og:description"
            content="Dailykit's Order Management is equipped with one of the most advanced Order Management Capabilities. Easily Manage Meal Kit Orders. Pack Meal Kits with Ease. Delivery Management Made Easy. Print KOTs and Recipe Information. Ingredient Level Information. Recieve Pre Orders and make Ingredient level Inventory Planning."
            key="ogdesc"
          />
        </Head>

        <Navbar />
        <SpecialBanner1
          heading={"Centralized Order Management"}
          subheading={"Make Your Life Easier"}
          imageurl={
            "/assets/images/order-dashboard/order-dashboard-hero2@2x.png"
          }
          button1text={"Get Started Now"}
          button2text={"Free Demo"}
          button1link={"#scheduledemo"}
          button2link={"#scheduledemo"}
          height="750px"
          width="646px"
        />

        <BannerSection2
          rightimageurl={"/assets/images/order-dashboard/all-orders-2@2x.png"}
          heading={"One Dashboard For Every Product Line"}
          bluesubheading={"Easy & Intuitive"}
          description="Be it Meal Kits, Ready-To-Eat, Private-Label Artisanal Grocery or Any Other Trending Product Line, DailyKIT Offers One Comprehensive Dashboard to Manage Them All."
          descriptionpoints={[
            "Accept Orders from Everywhere e.g.On-Demand/Subscription Store, Multiple Ghost Brands/Third-Party Marketplaces",
            "Cloud-Based Access allowing you to manage orders from anywhere",
            "Apply Filters & Sorting using multiple parameters to help with Order Expediting",
          ]}
          height="546px"
          width="546px"
        />

        <BannerSection9
          image1={"/assets/images/order-dashboard/DailyOS-Notifications@2x.png"}
          image2={"/assets/images/order-dashboard/print-KOTs@2x.png"}
          image3={
            "/assets/images/order-dashboard/Email-%26-SMS-Notifications@2x.png"
          }
        />

        <BannerSection7
          heading={"Daily Order Reporting & Analytics"}
          list={[
            "Order Fulfillment",
            "Daily Sales & Revenue",
            "Inventory Usage",
          ]}
          image={["imagebox5", "imagebox6", "imagebox7"]}
          dataAccount="3161173:g2o5g2c3i8"
          dataForm="4175704:a4w7j9"
        />
        <EndToEndFoodBusiness
          subheading={"An End-To-End Food Business Software Solution Provider"}
          heading={"You've Never Managed Your Food Business Like This Before"}
          dataAccount={"3161173:g2o5g2c3i8"}
          dataForm={"4175542:d4z0s3"}
          points={[
            [
              "Recipe & Menu Engineering",
              "Manufacturing Technology",
              "Sales & Marketing Platform",
            ],
            [
              "Delivery & Packaging Integrations",
              "Inventory Management",
              "Analytics",
            ],
          ]}
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
