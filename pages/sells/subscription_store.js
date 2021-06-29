import React, { PureComponent } from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ScheduleMeetingSection1 from "../../components/subcomponents/shared/ScheduleMeetingSection1";
import SpecialBanner5 from "../../components/subcomponents/onDemardStorePage/SpecialBanner5";
import BlueBox2 from "../../components/subcomponents/subscription/BlueBox2";
import BannerSection2 from "../../components/subcomponents/shared/BannerSection2";
import BannerSection3 from "../../components/subcomponents/shared/BannerSection3";
import BannerSection5 from "../../components/subcomponents/shared/BannerSection5";
export default class SubscriptionStorepage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Head>
          <title>Sells: Subscription Store</title>
          <meta
            name="Best Subscription Management Software - Free Demo "
            content="Automate your billing with powereful auto deduct features. Generate Recurring Revenue. Allow customers to subscribe to Weekly Plans. Incorporate weekly or monthly changing Menus easily. Experience Customer Retention like never before. Personalise subscriber experience."
          />
          <meta
            property="og:title"
            content="Best Subscription Management Software - Free Demo "
            key="ogtitle"
          />
          <meta
            property="og:url"
            content="https://dailykit.org/sells/subscription_store"
          />
          <meta
            property="og:description"
            content="Automate your billing with powereful auto deduct features. Generate Recurring Revenue. Allow customers to subscribe to Weekly Plans. Incorporate weekly or monthly changing Menus easily. Experience Customer Retention like never before. Personalise subscriber experience."
            key="ogdesc"
          />
        </Head>

        <Navbar />
        <BannerSection3
          subheading={"Why should they have all the fun?"}
          heading={"Get your share of subscription Revenue"}
          image={"/assets/images/subscription-banner-2.png"}
          blackbuttontext={"Start Now"}
          height="382.86px"
          width="546px"
        />

        <BannerSection2
          rightimageurl={
            "/assets/images/marketStandardSubscriptionFlows@2x-1.png"
          }
          heading={"Market Standard Subsription Flows"}
          bluesubheading={"Familiar & Intuitive Signup Process"}
          description="Customer Experience shouldn't be an expense. DailyKIT offers turnkey solutions for higher conversions."
          descriptionpoints={[
            "Showcase Subscription Plans in elegant cards",
            "Give your customers option to choose between Item Count, Servings & Delivery Week-Day.",
            "Increase Conversions by funneling Customers to preview menus prior to signing up.",
          ]}
          height="546px"
          width="546px"
        />

        <BlueBox2 heading={"Don't Just Manage, Own it."} />
        <BannerSection5
          heading={"Taking Your Store Beyond & Above"}
          description={
            "Incorporate Multiple Instructional or about us pages along with any other information suiting your brand."
          }
          rightimage={"/assets/images/takingyourStoreAbove&Beyond@2x.png"}
          box1icon={"/assets/icons/subscription_store/About Pages.svg"}
          box2icon={"/assets/icons/subscription_store/FAQ Pages.svg"}
          box1title={"About Pages"}
          box2title={"FAQ Pages"}
          box1description={
            "Showcase as much Information you want eg: Chef, Sourcing, etc."
          }
          box2description={
            "Easily Highlight FAQs and How it Work Pages to Your Customers."
          }
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
