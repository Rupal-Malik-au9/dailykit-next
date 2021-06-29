import React, { PureComponent } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";
import BlackHeading from "../../components/subcomponents/BlackHeading";
import BlogSection from "../../components/subcomponents/BlogSection";
import GreenHeading from "../../components/subcomponents/GreenHeading";
import Sidebar from "../../components/subcomponents/Sidebar";
import FormSection1 from "../../components/subcomponents/FormSection1";
export default class BakeryPage extends PureComponent {
  render() {
    return (
      <div>
        <Head>
          <title>Bakery </title>
          <meta
            name="WHY SHOULD BAKERIES DO MEAL KITS?"
            content="Bakers can get the most out ofMeal Kits by enjoying Substantial Revenue, Diverse menu & Increased Customer Loyalty. Diversify your Menu. Your Loyal Customers would be craving for your recipes. Achieve Higher Profit Margins"
          />
          <meta
            property="og:title"
            content="WHY SHOULD BAKERIES DO MEAL KITS?"
            key="ogtitle"
          />
          <meta
            property="og:url"
            content="https://dailykit.org/start_a_mealKit_brand/bakerypage"
          />
          <meta
            property="og:description"
            content="Bakers can get the most out ofMeal Kits by enjoying Substantial Revenue, Diverse menu & Increased Customer Loyalty. Diversify your Menu. Your Loyal Customers would be craving for your recipes. Achieve Higher Profit Margins"
            key="ogdesc"
          />
        </Head>

        <Navbar />
        <Bakeries />
        <Footer />
      </div>
    );
  }
}

export class Bakeries extends PureComponent {
  render() {
    return (
      <div>
        <FormSection1
          dataAccount="3161173:g2o5g2c3i8"
          dataForm="4175704:a4w7j9"
        />

        <div className="head">
          <GreenHeading text="Bakers can get the most out ofMeal Kits by enjoying" />
          <BlackHeading text="Substantial Revenue, Diverse menu & Increased Customer Loyalty" />
        </div>
        {/* <--first sidebar--> */}

        {/* <--first sidebar--> */}
        <Sidebar
          rest={[
            {
              sidebar_heading: "WHY SHOULD BAKERIES DO MEAL KITS?",
              sidebar_link: [
                "What would you choose from the 2 choices below?",
                "Increased Revenue",
                "Diversify your Menu",
                "Loyal Customers",
                "Higher Profit Margin",
              ],
              para_heading: "Who doesn’t love baking?",
              para: [
                "Having the sweet aroma of freshly baked delicacies fill up your home. While you get the dreamy picture, the reality is, for 90% of people, this sweet aroma is a dream.",
                "Nailing the right recipe and technique is so damn difficult in bakery products and it’s not surprising to see people try their whole life to make a cake and fail miserably at it.",
                "That’s not all, even for people that are adept at baking, it gets challenging to source small quantities of various ingredients that go in baking. Just think how big companies that introduced ready to bake mixes, instant cupcakes etc became a hit. There are millions of people who use these mixes regularly.",
                "Truthfully, if there’s any niche that meal kit is built for, it’s gotta be Bakery products. Everything needs to be precisely portioned and instructions need to be followed very strictly. And guess what? Meal Kit does that.",
              ],
              para2: [
                {
                  para2_heading:
                    "What would you choose from the 2 choices below?",
                  para2: [
                    "Meal kit from your favorite baker that includes all the ingredients and recipe to their product range curated by their chef. Tasteless mass produced mix",
                    "Well, the answer is pretty clear. Everyone chooses Meal Kits.",
                    "Here are all the benefits you will get when you start selling meal kits of bakery products to your consumers",
                  ],
                },
                {
                  para2_heading: "Increased Revenue",
                  para2: [
                    "Selling meal kits, will drive consumers who would have otherwise purchased these mixes to spend money in your business.",
                  ],
                },
                {
                  para2_heading: "Diversify your Menu",
                  para2: [
                    "You know how much you can play around with different permutation combination of toppings but you can’t put all of them on your shelf because there’s a very niche market for them. But with meal kits, your menu can include any of these crazy ideas which have a very niche market.",
                  ],
                },
                {
                  para2_heading: "Loyal Customers",
                  para2: [
                    "Loyalty is driven by empathy towards consumers and when you help them to make their home smell like your bakery, they don’t have a choice except to become loyal to you.",
                  ],
                },
                {
                  para2_heading: "Higher Profit Margin",
                  para2: [
                    "Selling baked goods includes cost of oven electricity, talented chefs and wastage eating away in your profit margin. With meal kits, the only cost you incur is of ingredients and the inexpensive labour to portion them. So, with meal kits, you’ll find a much healthier profit margin that would bring your business to a new high.",
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
                "Manufacturing/Fulfillment",
                "Market and Sell",
                "Delivery",
              ],
              para_heading: "We hope",
              para: [
                "after reading “why bakeries should add meal kits”, you’re eager and relaxed to know that with dailykit platform, this will be a piece of cake.",
                "Following are the 4 ways dailykit helps you with your meal kit business",
              ],
              para2: [
                {
                  para2_heading: "Recipes",
                  para2: [
                    "Using DailyKit recipe tools, you’d be able to curate your recipes to be sold as meal kits. We’ll keep you updated on all the latest trends in recipes so you stay on top of industry.",
                  ],
                },
                {
                  para2_heading: "Manufacturing/Fulfillment",
                  para2: [
                    "Dailykit solution can be very easily integrated inside your kitchen. Our simple and easy to use weighing scales will make portioning and packing so easy that even a child can pack meal dailykit makes packing meal kits idiot proof, leaving no room for errors.",
                  ],
                },
                {
                  para2_heading: "Market and Sell",
                  para2: [
                    "Dailykit’s omni channel commerce solution allows you to plan your inventory to keep on shelf and use POS for in-store customers. We also help you set up your website for free. You can choose to sell on marketplaces using easy integrations.",
                    "We’re coming soon with vending machine that can be loaded up with pre-packaged ingredients that fall at once to form a meal kit. We’ll keep you posted with this.",
                  ],
                },
                {
                  para2_heading: "Delivery",
                  para2: [
                    "The advantage with bakery products being shelf stable is that you can choose to extend your delivery area using delivery partners, both hyperlocal and nationwide shipping companies.",
                    "Dailykit’s platform is specifically built with keeping the bakery operations in mind and starting with meal kit is super easy. So, with that said, what are you waiting for? Bring us today, our baking kit.",
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
