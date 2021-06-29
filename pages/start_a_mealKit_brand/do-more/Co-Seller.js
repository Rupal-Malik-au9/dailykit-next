import React, { PureComponent } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Head from "next/head";
import BlackHeading from "../../../components/subcomponents/BlackHeading";
import BlogSection from "../../../components/subcomponents/BlogSection";
import GreenHeading from "../../../components/subcomponents/GreenHeading";
import Sidebar from "../../../components/subcomponents/Sidebar";
import FormSection1 from "../../../components/subcomponents/FormSection1";
export default class Coseller extends PureComponent {
  render() {
    return (
      <div>
        {" "}
        <Head>
          <title>Do-more: Coseller</title>
          <meta
            name="Dailykit"
            content="The Only Trend-Responsive Food-Tech Solution You'll Ever Need"
          />{" "}
          <meta property="og:title" content="Do-more: Coseller" key="ogtitle" />
          <meta
            property="og:url"
            content="https://dailykit.org/start_a_mealKit_brand/do-more/Co-Seller"
          />
          <meta
            property="og:description"
            content="The Only Trend-Responsive Food-Tech Solution You'll Ever Need."
            key="ogdesc"
          />
        </Head>
        <Navbar />
        <CosellerComponent />
        <Footer />
      </div>
    );
  }
}

export class CosellerComponent extends PureComponent {
  render() {
    return (
      <div>
        <FormSection1
          dataAccount="3161173:g2o5g2c3i8"
          dataForm="4175704:a4w7j9"
        />
        <div className="head">
          <GreenHeading text="Sell Meal Kits" />
          <BlackHeading text="Sky Rocket your Marketplace Revenue" />
        </div>
        {/* <--first sidebar--> */}
        <Sidebar
          rest={[
            {
              sidebar_heading: "KNOWLEDGEBASE",
              sidebar_link: [
                "Aggregating Restaurants? Add Meal Kits to your Marketplace",
                "Running a Discovery Platform? Help discover Meal Kits",
                "Using Dailykit's API Network, its a walk in the park.",
              ],
              para_heading:
                "Million Visitors on your blog?Turn them into buyers.",
              para: [
                "You may be an avid blogger who’s blogging out of passion or even a person who’s building a repository of Meal Kit Brands in your vicinity or even at a National Level. Now this kind of database is a rarity which has the potential to attract a lot of visitors. ",

                "People love convenience these days and your visitors might want to place an order right from your page. But you may know how to go about it. We have the tools to make your page a lean mean revenue making machine. Just plug Dailykit and viola, you are making revenue out of it in no time. All you need to do is follow some simple set of instructions and you are well on your way.",
              ],
              para2: [
                {
                  para2_heading:
                    "Aggregating Restaurants? Add Meal Kits to your Marketplace",
                  para2: [
                    "There are a lot of good Samaritans who are aggregating restaurants based on niche or even restaurants in general, just to make it easier for people who are looking for their favorite cuisine have a place to go. ",

                    "Did you know that at least 53% of American population would love to get Meal Kits from their favorite restaurant? That’s right, it’s a pretty solid number. Now add Meal Kits into the fold and you’ve got yourself a site that will attract millions of visitors without breaking a sweat. The next step is now to find a way to make your site a revenue generating, customization friendly meal kit repository. And Dailykit is right here for you. Just plug and play and you are making revenue on the go.",
                  ],
                },
                {
                  para2_heading:
                    "Running a Discovery Platform? Help discover Meal Kits",
                  para2: [
                    "Restaurant discovery is something every consumer wants these days. Convenience plays a huge role in helping a consumer to discover their needs and requirements by a click of a couple of buttons. Over the past few years with the increasing popularity of Meal Kits, consumer who would prefer dining over a Meal Kit has become a rage.",

                    "Nudge them along with their discovery and make yourself profitable in the process. Use Dailykit and your customer can easily purchase their favorite Meal Kits from you.",
                  ],
                },
                {
                  para2_heading:
                    "Using Dailykit's API Network, its a walk in the park.",
                  para2: [
                    "Dailykit makes it very easy for anyone to use our technology by accessing our vast list of API's and leverage the best of Meal Kit technology with ease. With our API's in place, all the data you need about Meal Kits will be at your finger tips.",
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
