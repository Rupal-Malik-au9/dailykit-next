import React, { PureComponent } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import EndToEndFoodBusiness from "../components/subcomponents/shared/EndToEndFoodBusiness";
import ScheduleMeetingSection1 from "../components/subcomponents/shared/ScheduleMeetingSection1";
import BannerSection3 from "../components/subcomponents/shared/BannerSection3";
import BannerSection5 from "../components/subcomponents/shared/BannerSection5";
import BannerSection4 from "../components/subcomponents/shared/BannerSection4";
export default class Marketpage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Head>
          <title>Market</title>

          <meta
            name="Referral Campaigns, Loyalty Points, Wallet and Reward Points"
            content="Dailykit's Rule based Campaign Management allows you to apply simple to complex rules to your campaigns so that you can be creative with you Loyalty Points, Referral Campaigns, Wallet Rewards and many more"
          />
          <meta
            property="og:title"
            content="Referral Campaigns, Loyalty Points, Wallet and Reward Points"
            key="ogtitle"
          />
          <meta property="og:url" content="https://dailykit.org/market" />
          <meta
            property="og:description"
            content="Dailykit's Rule based Campaign Management allows you to apply simple to complex rules to your campaigns so that you can be creative with you Loyalty Points, Referral Campaigns, Wallet Rewards and many more."
            key="ogdesc"
          />
        </Head>

        <Navbar />
        <BannerSection3
          heading={"Marketing Made Easy."}
          subheading={
            "Must have Innovative Marketing tools to help you connect your brand with your customers."
          }
          image={"/assets/images/marketing-overview/Marketing made easy.png"}
          button2={["Get Started Now", "Get Demo"]}
          button1link={"#scheduledemo"}
          button2link={"#scheduledemo"}
          height="377px"
          width="546px"
        />
        <BannerSection5
          icon="/assets/icons/paperplane.PNG"
          heading={"Build Smarter Campaigns."}
          description={
            "Create and deliver engaging experiences, improve customer engagement and boost ROI in the process."
          }
          rightimage={
            "/assets/images/marketing-overview/Build smarter campaigns.png"
          }
        />
        <BannerSection5
          icon="/assets/icons/paperplane.PNG"
          heading={"Inspire customers to take action."}
          para={[
            "Customers are always looking for fresh new deals. With DailyKIT's Custom Coupons become a lead magnet with exclusive offers and motivate customers to take action.",
            "Use DailyKIT's Smart Coupon Generation to experiment with various actions that you think your customers will perform.",
          ]}
          leftimage={
            "/assets/images/marketing-overview/Inspire customer to take action.png"
          }
        />
        <BannerSection5
          icon="/assets/icons/paperplane.PNG"
          heading={"Create Rewarding Experiences."}
          description={
            "Keep your customers coming back by rewarding them when they take a certain action. With Loyalty Points, retain and keep your customers engaged."
          }
          leftimage={
            "/assets/images/marketing-overview/Creat rewarding experiances.png"
          }
          box1title={"Simple. Powerful. Fast"}
          box2title={"ROI-Focused"}
          box1description={""}
          box2description={""}
        />
        <BannerSection4
          heading={"Your tryst with virality"}
          description={
            "Experience accelerated growth using customer referrals as your trusted marketing strategy"
          }
          points={[
            ["Supercharge Word of Mouth", "Drive repeated growth"],
            ["Keep them coming back", "Get more customers from your customers"],
          ]}
          rightimage={
            "/assets/images/marketing-overview/Your tryst with virality.png"
          }
        />
        <BannerSection5
          icon="/assets/icons/paperplane.PNG"
          heading={"Keep them Loyal."}
          description={
            "With our cashbacks, maintain customer loyalty by rewarding them for their action. With DailyKIT Wallets, provide more than one way to shop for your customer."
          }
          leftimage={"/assets/images/marketing-overview/keep them loyal.png"}
          box1title={"Consumer B2C App"}
          box2title={"Partner Restaurant Integration"}
          box1description={""}
          box2description={""}
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
