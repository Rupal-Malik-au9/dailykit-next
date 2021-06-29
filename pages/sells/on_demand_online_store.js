import React, { PureComponent } from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ScheduleMeetingSection1 from "../../components/subcomponents/shared/ScheduleMeetingSection1";
import IdealProduct from "../../components/subcomponents/onDemardStorePage/IdealProduct";
import BannerSection4 from "../../components/subcomponents/shared/BannerSection4";
import BannerSection2 from "../../components/subcomponents/shared/BannerSection2";
import BannerSection3 from "../../components/subcomponents/shared/BannerSection3";
import SpecialBanner5 from "../../components/subcomponents/onDemardStorePage/SpecialBanner5";
export default class OnDemandStorepage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Head>
          <title>Sells: On Demand Store</title>
          <meta
            name="Dailykit Restaurant Online Ordering - Best E Commerce Platform"
            content="Best Online Restaurant Ordering System For Online Ordering, Takeout, & Delivery. Increase Daily Revenue. Marketing Insights. Unparalleled Service. Increase Avg. Check Size. Multi-store website. Operate Multiple Ghost Brands"
          />
          <meta
            property="og:title"
            content="Dailykit Restaurant Online Ordering - Best E Commerce Platform"
            key="ogtitle"
          />
          <meta
            property="og:url"
            content="https://dailykit.org/sells/on_demand_online_store"
          />
          <meta
            property="og:description"
            content="Best Online Restaurant Ordering System For Online Ordering, Takeout, & Delivery. Increase Daily Revenue. Marketing Insights. Unparalleled Service. Increase Avg. Check Size. Multi-store website. Operate Multiple Ghost Brands."
            key="ogdesc"
          />
        </Head>

        <Navbar />
        <BannerSection3
          subheading={"DailyKIT for Online Ordering"}
          heading={"A Store That Sells"}
          image={"/assets/images/ondemand-hero1.gif"}
          blackbuttontext={"Start Now"}
        />
        <BannerSection2
          rightimageurl={"/assets/images/popularOrderingExperiences.gif"}
          heading={"Popular Ordering Experiences"}
          bluesubheading={"Familiar & Intuitive"}
          description="Customer Experience shouldn't be an expense. DailyKIT offers turnkey solutions for higher conversions."
          descriptionpoints={[
            "Showcase Multiple Product Types in elegant cards & drawers.",
            "Give your customers option to choose between Now/Later & Pickup/Delivery.",
            "Increase conversions by showcasing categories as Digital Aisle for Smooth Browsing.",
          ]}
          height="546px"
          width="546px"
        />

        <IdealProduct
          heading="Ideal Product Presentations"
          subheading="For Every Trend Out There"
          card1subheading="Customer's Choice"
          card1heading="Customizable Products"
          card1description="Allow to customers to modify different components of a dish."
          card2subheading="Cross-Sell & Up-Sell"
          card2heading="Accompaniments"
          card2description="Recommend & Showcase Cross-Sell Products such as Beverages, Desserts and More."
          card3subheading="Extra Product Presentations "
          card3heading="Flexible Combo Options"
          card3description="Suited for 'Build Your Own Meal' concepts"
        />
        <BannerSection4
          heading={"Real-Time Order Tracking"}
          description={
            "Cater to consumer habits of tracking order lifecycle from Kitchen to Delivery leading to higher retention."
          }
          points={[
            ["Kitchen Order Status", "Delivery Personnel Info"],
            ["ETA & Map Tracking", "Review & Rating"],
          ]}
          leftimage={"/assets/images/Real-TimeOrderTracking@2x.png"}
          height="424.46px"
          width="546px"
        />
        <BannerSection4
          heading={"Showcase your COVID Safety Measures"}
          description={
            "Reassure your customers of their safety using DailyKIT's COVID Safety tools"
          }
          points={[
            ["Body-Temp Reports", "Safety report on Invoice"],
            ["Use of PPE Checklist", "Cleaning Protocols"],
          ]}
          rightimage={"/assets/images/ShowcaseYourCOVIDSafetyMeasures@2x.png"}
          height="424.46px"
          width="546px"
        />
        <BannerSection4
          heading={"Own Your Online Store Completely"}
          bluesubheading={"Don't Compromise"}
          description={
            "In the modern digital world, owning your web presence is a MUST."
          }
          points={[
            ["Your Own Domain", "Themes & Brand Colors"],
            ["iOS & Android Apps", "Custom Brand Pages"],
          ]}
          leftimage={"/assets/images/Themes and brand colors.png"}
          height="424.46px"
          width="546px"
        />
        <SpecialBanner5
          heading={"Why Choose DailyKIT"}
          subpara={
            "Are You Using A Plain Old Micro-Site For Online Ordering Or Worse, Do You Not Have An Online Store? It’s Vital To The Success Of Your Business To Have A Professional Looking Onine Store."
          }
          points={[
            [
              {
                heading: "Unlimited Categories",
                para: "Manage multiple categories for easy browsing.",
                icon: "/assets/icons/whychoose/unlimited-categories.png",
              },
              {
                heading: "SEO-Friendly Pages",
                para: "URL-based pages for Products & Categories.",
                icon: "/assets/icons/whychoose/seo-friendly.png",
              },
              {
                heading: "Product Tags",
                para: "Tag your products for easy filtering and discoverability.",
                icon: "/assets/icons/whychoose/product-tags.png",
              },
              {
                heading: "Product Images",
                para: "Display Amazing Product Pictures for Higher Conversion.",
                icon: "/assets/icons/whychoose/product-images.png",
              },
            ],
            [
              {
                heading: "Product Description",
                para: "Convert more via enticing product descriptions.",
                icon: "/assets/icons/whychoose/product-description.png",
              },
              {
                heading: "Social Media Sharing",
                para: "Integrated Social Media sharing functionality on every product page.",
                icon: "/assets/icons/whychoose/social-media-share.png",
              },
              {
                heading: "Desktop Friendly",
                para: "Don't miss out on the 20% of consumers ordering food through their laptops/desktops.",
                icon: "/assets/icons/whychoose/desktop-friendly.png",
              },
              {
                heading: "Mobile & Tab Friendly",
                para: "Perfect experience through any browser app or in-app browsers.",
                icon: "/assets/icons/whychoose/mobile-friendly.png",
              },
            ],
            [
              {
                heading: "Advanced Scheduling",
                para: "BreakFast, Lunch, Dinner or Daily/Weekly Recurring, Festive Menus.",
                icon: "/assets/icons/whychoose/Advance Scheduling.svg",
              },
              {
                heading: "Know your Margins",
                para: "Control your food cost with Sales Price Recommendations.",
                icon: "/assets/icons/whychoose/Margins.svg",
              },
              {
                heading: "Precise Configuration",
                para: "Configure Inventory, Packaging and Product Labels.",
                icon: "/assets/icons/whychoose/Precise Configuration.svg",
              },
            ],
            [
              {
                heading: "Smart Insights",
                para: "Automated Sales Reports with conversion details.",
                icon: "/assets/icons/whychoose/Smart Insights.svg",
              },
              {
                heading: "Discounts & Coupons",
                para: "Create Smart Rewards, Vouchers and more from CRM",
                icon: "/assets/icons/whychoose/Discounts & Coupons.svg",
              },
              {
                heading: "Delivery Integrations",
                para: "Supporting Selected Delivery Partners in your Area.",
                icon: "/assets/icons/whychoose/Delivery Integrations.svg",
              },
            ],
          ]}
          buttontext={"Schedule A Demo"}
          buttonlink={"#scheduledemo"}
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
