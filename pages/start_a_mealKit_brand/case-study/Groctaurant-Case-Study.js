import React, { PureComponent } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Head from "next/head";
import BlackHeading from "../../../components/subcomponents/BlackHeading";
import BlogSection from "../../../components/subcomponents/BlogSection";
import GreenHeading from "../../../components/subcomponents/GreenHeading";
import Sidebar from "../../../components/subcomponents/Sidebar";
import FormSection1 from "../../../components/subcomponents/FormSection1";
export default class GroctaurantCaseStudy extends PureComponent {
  render() {
    return (
      <div>
        {" "}
        <Head>
          <title>Case-study: Groctaurant-Case-Study</title>
          <meta
            name="Dailykit"
            content="The Only Trend-Responsive Food-Tech Solution You'll Ever Need"
          />{" "}
          <meta
            property="og:title"
            content="Case-study: Groctaurant-Case-Study"
            key="ogtitle"
          />
          <meta
            property="og:url"
            content="https://dailykit.org/start_a_mealKit_brand/case-study/Groctaurant-Case-Study"
          />
          <meta
            property="og:description"
            content="The Only Trend-Responsive Food-Tech Solution You'll Ever Need."
            key="ogdesc"
          />
        </Head>
        <Navbar />
        <GroctaurantCaseStudyComponent />
        <Footer />
      </div>
    );
  }
}

export class GroctaurantCaseStudyComponent extends PureComponent {
  render() {
    return (
      <div>
        <FormSection1
          dataAccount="3161173:g2o5g2c3i8"
          dataForm="4175704:a4w7j9"
        />
        <div className="head">
          <GreenHeading text="How DailyKIT helped" />
          <BlackHeading text="Groctaurant to generate a new revenue stream with Meal Kits" />
        </div>
        {/* <--first sidebar--> */}
        <Sidebar
          rest={[
            {
              sidebar_heading: "GROCTAURANT, A CASE STUDY",
              sidebar_link: [
                "Challenges",
                "Solution",
                "How DailyKIT helped Groctaurant to Upsell and Cross Sell Meal Kits and Cooked Food",
                "How DailyKIT's Loyalty Program feature helped Groctaurant",
                "What delivery models worked for Groctaurant?",
                "Results",
              ],
              para_heading: "",
              para: [
                "Groctaurant was a local Restaurant operating in New Delhi, operating with over more than 100 items in their menu with different servings.",

                "Seeing the increased competition for creating a brand presence and for bringing sustainability and profitability through different alternative means, they stumbled upon the idea of Meal Kits along with Restaurant Business.",
              ],
              para2: [
                {
                  para2_heading: "Challenges",
                  para2: [
                    "The critical challenge faced by Groctaurant was to bring their team on-boarded with the idea and implementation of meal kit service fully integrated with their existing kitchen.",

                    "Though meal kit packing is a very intuitive process, in rush hour or during high order volume, it was common to commit the 2 cardinal sins of meal kit. This directly affected the consumer experience and thus the brand presence.",

                    "Another key challenge faced was to print labels and recipe cards for which there was no turnkey solution that integrated well with the meal kit packing process.",

                    "On the consumer side, there is a strong minimum set of expectations from the consumers for the buying experience like a product page with cooking directions and options to get home delivered or pick up. Along with that, Groctaurant also faced challenges with on-demand order fulfillment and thus wanted a robust solution that offers flexibility to its operations and to deal with nuances of order management.",
                  ],
                },
                {
                  para2_heading: "Solution",
                  para2: [
                    "DailyKIT presented a turnkey solution for Groctaurant that provided them with end to end tools for all of their business operations.",

                    "   1. Online Store: DailyKIT’s online store was customizable enough to enable Groctaurant to configure their meal kit menu and their ready to eat menu.",
                    "   2. In this store, Groctaurant could accept orders On-Demand, Pickup and Pre-Orders.",
                    "   3. Order Management: DailyKIT brings a robust order management system that not only accepts orders for meal kits but also Ready To Eat products alike.",
                    "   4. With a robust order management platform, an order could be routed towards different Stations for parallel processing.",
                    "   5. Packing Meal Kits: With DailyKIT’s solution for Kitchen display system (KDS) that integrates with a weighing scale through its customised app, operators were able to see the order related information on the weighing scale digital screen instead of following a paper based work. When packing a particular ingredient, using hardware integration, DailyKIT check-weighs the ingredient against the specific weight and prints the pre-configured label.",
                    "   6. Assembling Meal Kits: Before Dailykit, the staff used to miss ingredients when the final assembly was high in order volume. With barcode/QRcode scanning of labels during assembly, DailyKIT enabled Groctaurant to not miss any ingredient and ensure 100% quality.",
                  ],
                },
                {
                  para2_heading:
                    "How DailyKIT helped Groctaurant to Upsell and Cross Sell Meal Kits and Cooked Food",
                  para2: [
                    "One of the biggest requirement for Groctaurant was to Upsell and Cross Sell Cooked Food with Meal Kits.",
                    "Groctaurant’s consumer base was working millennials, families and bachelors. Depending on different needs, they used to order accordingly. A particular example can be of a customer who ordered bigger servings of meal kits on weekends to host a party with their family and friends. And the same customer, also ordered from Groctaurant for their dietary food requirements which came pre-cooked and ready to consume.",
                    "Selling Meal Kits and Cooked food allowed Groctaurant to reach out to all the need states of a consumer. This helped Groctaurant differentiate itself from other restaurants and significantly helped with its branding exposure on social media and word of mouth.",
                    "Selling Meal Kits also brought on consumers who strictly followed cooking at home and would hardly visit the restaurant or order cooked food.",
                  ],
                },
                {
                  para2_heading:
                    "How DailyKIT's Loyalty Program feature helped Groctaurant",
                  para2: [
                    "One loyalty program that worked for Groctaurant was to start Member Gets Member. With this scheme, Groctaurant provided a referral bonus to customers who helps bring their friends and family to order.",
                    "This helped with the virality of orders to an extent that Groctaurant added 2500 customers in one week.",
                  ],
                },
                {
                  para2_heading: "What delivery models worked for Groctaurant?",
                  para2: [
                    "Groctaurant offered pickup and at home delivery. Any order placed from Groctaurant’s online store was delivered by their in-house fleet. Along with this, Groctaurant also operated with Marketplaces out there so incase of orders from marketplaces, delivery was pre-handled.",
                  ],
                },
                {
                  para2_heading: "Results",
                  para2: [
                    "In the course of 6-9 months, Groctaurant was fulfilling more than 300 orders each day of which 50% came from Meal Kits and 50% from Cooked Food. ",
                    "With this ordering, Groctaurant was able to maximize their efficiency of operations by transferring the meal kit packing load to the prep staff.",
                    "While the prices of cooked food were almost 20-30% less than the comparable dish in cooked food, the bottomline margin on the meal kits and cooked food were similar due to the decreased labour cost.",
                  ],
                },
              ],
            },
          ]}
          imageurl={
            "https://www.dailykit.org/hs-fs/hubfs/groc3.jpg?width=800&name=groc3.jpg"
          }
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
