import React, { PureComponent } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Head from "next/head";
import BlackHeading from "../../../components/subcomponents/BlackHeading";
import BlogSection from "../../../components/subcomponents/BlogSection";
import GreenHeading from "../../../components/subcomponents/GreenHeading";
import Sidebar from "../../../components/subcomponents/Sidebar";
import FormSection1 from "../../../components/subcomponents/FormSection1";
export default class QSR_Cafes extends PureComponent {
  render() {
    return (
      <div>
        <Head>
          <title>Restaurants: QSR_Cafes</title>
          <meta
            name="WHY QSRS, CAFES AND CASUAL DINING SHOULD DO MEAL KITS?"
            content="Stagnant to Increasing Revenue, Shrinking to Expanding Consumer base & Unsustainable Margin to Healthy Profits. Increase Revenue. Expand Consumer Base. Achieve healthy profits"
          />{" "}
          <meta
            property="og:title"
            content="WHY QSRS, CAFES AND CASUAL DINING SHOULD DO MEAL KITS?"
            key="ogtitle"
          />
          <meta
            property="og:url"
            content="https://dailykit.org/start_a_mealKit_brand/restaurants/cafes"
          />
          <meta
            property="og:description"
            content="Stagnant to Increasing Revenue, Shrinking to Expanding Consumer base & Unsustainable Margin to Healthy Profits. Increase Revenue. Expand Consumer Base. Achieve healthy profits"
            key="ogdesc"
          />
        </Head>

        <Navbar />
        <QsrCafesComponent />
        <Footer />
      </div>
    );
  }
}

export class QsrCafesComponent extends PureComponent {
  render() {
    return (
      <div>
        <FormSection1
          dataAccount="3161173:g2o5g2c3i8"
          dataForm="4175704:a4w7j9"
        />
        <div className="head">
          <GreenHeading text="Experience 100% growth from" />
          <BlackHeading text="Stagnant to Increasing Revenue, Shrinking to Expanding Consumer base & Unsustainable Margin to Healthy Profits" />
        </div>
        {/* <--first sidebar--> */}
        <Sidebar
          rest={[
            {
              sidebar_heading:
                "WHY QSRS, CAFES AND CASUAL DINING SHOULD DO MEAL KITS?",
              sidebar_link: [
                "From Stagnant Growth to Increasing Revenue",
                "From Shrinking to Expanding Consumer Base",
                "Unsustainable margin to healthy profits",
              ],
              para_heading: "QSRs, Cafes and Casual Dining ",
              para: [
                "are where consumers serve themselves, though the definition is subjective, the general understanding is that QSRs are fast moving. For a better visualization, any establishment with a bar stool facing a window or wall can be said to fall in this category.",
                "Below are the facts about the challenges faced by this category and how adding meal kit addresses those",
              ],
              para2: [
                {
                  para2_heading: "From Stagnant Growth to Increasing Revenue",
                  para2: [
                    "Majority of customers are residents or working in the locality of your establishment. So, increasing revenue from new wave of customers is not a possibility, leading to stagnant growth.",
                    "Adding meal kit to your offering should entice your existing clientele to purchase them and cook at home and thus adding revenue from existing customers. Consider this a side business like selling soda, chips.",
                    "Isn’t a business run best when your existing customers buy more from you? Well, that’s what meal kit does. It increases your average revenue per customer (ARPC) and thus increasing your revenue.",
                  ],
                },
                {
                  para2_heading: "From Shrinking to Expanding Consumer Base",
                  para2: [
                    "Every business succeeds when they add more consumers than they lose meaning ever increasing consumer base. Adding meal kits exposes your brand to an unaddressed pocket of audience that prefers to cook at home.",
                    "Now they have a reason to step inside your establishment and purchase your kits to cook at home and brag to their social circle, post pictures of your brand on social media. Think about your Social Media Presence going off the roof",
                  ],
                },
                {
                  para2_heading: "Unsustainable margin to healthy profits",
                  para2: [
                    "Often the products are priced at these stores are inexpensive and close to economical value to drive a casual and impulsive decision. Cheap products and higher costs on rent, staff and investment on infrastructure leads to unsustainable margin leading to business running in loss.",
                    "Using your existing resources such as staff, location and infrastructure to produce and sell meal kits, drives more return from these fixed costs thus leading to higher profit margin",
                  ],
                },
              ],
            },
          ]}
        />

        {/* <--first sidebar--> */}

        <Sidebar
          rest={[
            {
              sidebar_heading: "HOW DAILYKIT HELPS YOU?",
              sidebar_link: [
                "Recipes",
                "Packing",
                "Market and Sell",
                "Delivery",
              ],
              para_heading: "Before you read further, ",
              para: [
                " We would like to thank you for your service by feeding us. If it weren’t for you, we’d be in a very tough spot. We hope that you have gone through our guide on why you should add meal kits to your offering",
                "Dailykit is the platform with a vision to help businesses like yours become sustainable, earn profits by helping you add meal kit delivery.",
                "There are Basically 4 avenues to any food business that are common to meal kits too.",
              ],
              para2: [
                {
                  para2_heading: "Recipes",
                  para2: [
                    "Recipes are soul of meal kits. We help you curating your existing recipes to be sold as meal kits.",
                    "Not only this, you can also add recipes from our recipe marketplace to your menu. You can search for all the recipes that matches to your existing inventory it’s easy go.",
                  ],
                },
                {
                  para2_heading: "Packing",
                  para2: [
                    "That’s where we best come in. Using dailykit solution, you can pack meal kits practically anywhere.",

                    "It becomes so easy to pack meal kits either at back-of the house kitchen or even at the counter in front of consumers.",

                    "If done right, it hardly takes less than 3 minutes to pack a meal kit from scratch.",
                  ],
                },
                {
                  para2_heading: "Market and Sell",
                  para2: [
                    "Whatever be the possibility, you can be assured that with Dailykit, you’re covered. We have omni-channel solution.",

                    "We help you set up your own website like Shopify with all the options to curate the conditions of selling such as enforcing pre-orders only. We also help you integrate with marketplaces like Ubereats, Grubhub etc so you can also sell with them.",

                    "We’re also coming up with vending machine for meal kits that will be a game changer.",
                  ],
                },
                {
                  para2_heading: "Delivery Partner",
                  para2: [
                    "Just like market and sell, Dailykit helps you with the software solution to run your own delivery fleet if you’re into that.",

                    "Else, you can take the help of delivery partners available on Dailykit platform for on-demand or scheduled hyperlocal delivery.",

                    "We also help you integrate with shipping companies in case, you’re planning to do nationwide delivery but we would recommend you against it.",

                    "To conclude, Dailykit is purposefully built keeping in mind, the operations and constraints of your business. You can be assured that adding meal kit to your operations would be a smooth sailing experience. And don’t forget about the benefits of adding meal kits.",

                    "We hope that you’re familiar that we’re open source and thus completely free. So, what are you waiting for? Bring us today, our Daily Kit.",
                  ],
                },
              ],
            },
          ]}
        />

        <BlogSection
          blogs={[
            {
              id: "1",
              image: "/assets/images/blogSection/image1.png",
              title: "HOW TO LAUNCH MEAL KITS AT YOUR RESTAURANT?",
              cardText:
                "There is an urgent need to make sure Restaurants try every possible way in which they can get people ordering. If you think you as a Restaurateur have tried everything then,think again. Yes,...",
              readMoreId: "#Readmore",
            },
            {
              id: "2",
              image: "/assets/images/blogSection/image2.png",
              title: "YOUR PACKAGING SHOULD BUILD BRAND RECALL",
              cardText:
                "Your brand is in a constant battle to retain customers,build confidence and encourage brand recall. To ensure this, a brand needs to build their brand voice. When it comes to food, brand voice...",
              readMoreId: "#Readmore",
            },
          ]}
          blogs_heading="CHECK OUT OUR BLOG"
        />
      </div>
    );
  }
}
