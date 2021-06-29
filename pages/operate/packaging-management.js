import React, { PureComponent } from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import EndToEndFoodBusiness from "../../components/subcomponents/shared/EndToEndFoodBusiness";
import ScheduleMeetingSection1 from "../../components/subcomponents/shared/ScheduleMeetingSection1";
import BannerSection3 from "../../components/subcomponents/shared/BannerSection3";
import BannerSection9 from "../../components/subcomponents/shared/BannerSection9";
import BannerSection8 from "../../components/subcomponents/shared/BannerSection8";
export default class Packagingmanagementpage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Head>
          <title>Operate: Packaging Management</title>
          <meta
            name="Meal Kit, Meal Prep, Ready to Eat Packaging all within DailyKIT"
            content="Easily order all your packaging requirements right within Dailykit platform. Don't worry if don't find what you are looking for, we will source them for you. Just choose your packaging, Add to cart and order."
          />
          <meta
            property="og:title"
            content="Meal Kit, Meal Prep, Ready to Eat Packaging all within DailyKIT "
            key="ogtitle"
          />
          <meta
            property="og:url"
            content="https://dailykit.org/operate/packaging-management"
          />
          <meta
            property="og:description"
            content="Easily order all your packaging requirements right within Dailykit platform. Don't worry if don't find what you are looking for, we will source them for you. Just choose your packaging, Add to cart and order."
            key="ogdesc"
          />
        </Head>
        <Navbar />
        <BannerSection3
          subheading={
            "With Integrated Packaging Management Platform,Eliminate Low-Quality & Improper Packaging"
          }
          heading={"Packaging Made Easy"}
          image={"/assets/images/packaging/packaging-banner.png"}
          blackbuttontext={"Start Now"}
          height="364px"
          width="546px"
        />
        <BannerSection9
          heading={"Packaging Matters"}
          subheading={
            "Packaging not only ties your product together for final product presentation but it is also your Brand's Identity."
          }
          image1={"/assets/images/packaging/Unique Product.png"}
          image2={"/assets/images/packaging/Envir. Concern.png"}
          image3={"/assets/images/packaging/Consumer ed..png"}
          imagetitle1={"Each Product is Unique"}
          imagetitle2={"Environmental Concerns"}
          imagetitle3={"Consumer Education"}
          imagepara1={
            "Every order component requires specific packaging in order to be safe, secure, and presentable."
          }
          imagepara2={
            "Excess packaging is a problem. Choose environmental friendly packaging for your brand from our platform"
          }
          imagepara3={
            "Choose packaging that educates consumers about your brand. They rely on the print to learn more about your product."
          }
        />
        <BannerSection8
          heading={"The Proper Packaging for The Product"}
          subheading={"Integrated Packaging Module"}
          image={"/assets/images/packaging/1st.png"}
          para={[
            "Get recommendations for packaging for your unique products be they meal kits, desserts, beverages, hot or cold food, etc., based on different parameters such as if they are solid, liquid or require refrigration.",
          ]}
          learn={1}
          buttonlink={"/meal-kit-guides/meal-kit-packaging"}
          height="501px"
          width="400px"
        />{" "}
        <BannerSection8
          heading={"Explore & Purchase Packaging"}
          subheading={"Integrated Packaging Store"}
          image={"/assets/images/packaging/2nd.png"}
          para={[
            "Use PackagingHub to Review Pricing, Explore & Filter Out packaging items per your product requirements. Be it insulated ones for cold items, heat-resistant for Ready-to-Eat, tranparent, polyethylene or paper-based, we've got it all.",
            " ",
            "Manage Inventory & Create Purchase Orders using forecasting making sure your staff always has enough proper packaging on hand at their assigned workstations.",
          ]}
          learn={1}
          buttonlink={"/meal-kit-guides/meal-kit-packaging"}
          height="501px"
          width="400px"
        />
        <BannerSection8
          heading={"Ensure Each Order is Properly Packed"}
          subheading={"Leave Nothing To Chance"}
          image={"/assets/images/packaging/3rd.png"}
          para={[
            "Showcase the product packaging to be used per your input at KDS or KOTs to save time and headaches.",
            "Packaging Inventory is tracked as well, so you're notified if you're running short and need to immediately order additional packaging.",
          ]}
          learn={1}
          buttonlink={"/meal-kit-guides/meal-kit-packaging"}
          height="501px"
          width="400px"
        />{" "}
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
