import React, { PureComponent } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Head from "next/head";
import BlackHeading from "../../../components/subcomponents/BlackHeading";
import BlogSection from "../../../components/subcomponents/BlogSection";
import GreenHeading from "../../../components/subcomponents/GreenHeading";
import Sidebar from "../../../components/subcomponents/Sidebar";
import FormSection1 from "../../../components/subcomponents/FormSection1";
export default class What_is_a_mealkit extends PureComponent {
  render() {
    return (
      <div>
        <Head>
          <title>Start-meal-kit-brands: What_is_a_mealkit</title>
          <meta
            name="Dailykit"
            content="The Only Trend-Responsive Food-Tech Solution You'll Ever Need"
          />
          <meta
            property="og:title"
            content="Start-meal-kit-brands: What_is_a_mealkit"
            key="ogtitle"
          />
          <meta
            property="og:url"
            content="https://dailykit.org/start_a_mealKit_brand/start-meal-kit-brands/what-is-meal-kit"
          />
          <meta
            property="og:description"
            content="The Only Trend-Responsive Food-Tech Solution You'll Ever Need."
            key="ogdesc"
          />
        </Head>

        <Navbar />
        <MealkitComponent />
        <Footer />
      </div>
    );
  }
}

export class MealkitComponent extends PureComponent {
  render() {
    return (
      <div>
        <FormSection1
          dataAccount="3161173:g2o5g2c3i8"
          dataForm="4175704:a4w7j9"
        />

        <div className="head">
          <GreenHeading text="Everyone’s talking about Meal Kits." />
          <BlackHeading text="But do you know what a Meal Kit is?" />
        </div>
        {/* <--first sidebar--> */}
        <Sidebar
          rest={[
            {
              sidebar_heading: "WHAT THE HELL IS A MEAL KIT?",
              sidebar_link: [
                "The Popularity",
                "Convenience and Choice",
                "The Future",
              ],
              para_heading: "Meal Kits",
              para: [
                "Meal Kit is a ready-to-cook solution that contains all the ingredients pre-portioned according to a recipe.",
                "The biggest reason why this concept is such a huge hit is because it attracts the people who want to cook their own food without having to step foot in the grocery store.",
                "A Meal Kit is not convenience food, which is actually cooked and 'prepared' at a kitchen facility before shipment--typically in a refrigerated container. The ingredients in a Meal Kit are usually fresh or pre-prepped.",
              ],
              para2: [
                {
                  para2_heading: "The Popularity",
                  para2: [
                    "The Meal Kits are popular among busy parents, millennials, or those juggling multiple jobs, working couples, or people with special diet needs who are always in a rush to come up with a quick dinner. ",
                    "The age old solutions were was pizza delivery, a drive-thru or a takeout counter. These days, there is so much more in prepared food and meal kit delivery, the consumer usually treats Meal Kits as a way to cook food at Home with minimal fuss and no complications.",
                  ],
                },
                {
                  para2_heading: "Convenience and Choice",
                  para2: [
                    "The exotic nature of the recipes also contribute to the success of Meal Kits even though most of these recipes are available on the internet, the convenience of Meal Kits make them an extremely popular choice with the customers. ",

                    "Although most of the services are subscription-based, there’s a huge gap in terms of offering the Meal Kits Hyper-locally. This provides more convenience, customization, and choices to the consumers. This can only be possible by using a Meal Kit Software Platform that will fill all these gaps.",
                  ],
                },
                {
                  para2_heading: "The Future",
                  para2: [
                    "Meal Kits are soon turning out to be a necessity with consumers who are running out of time to manage their day to day activities. Meal Kits is probably the last stage in disruption of food businesses and probably one of the most critical disruptions to emerge in a market where people are constantly trying solve the problem of food wastage.",
                    "The U.S. meal kit market tallied sales of $2.6 billion in 2017 and will achieve an estimated $4 billion in sales in 2019. The Meal Kit sales will soon hit double digits by 2023 onwards and continue to grow exponentially",
                  ],
                },
              ],
            },
          ]}
          videourl={"https://www.youtube.com/embed/9BNn7n8zjfY"}
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
