import React, { PureComponent } from "react";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import Head from "next/head";
import BlackHeading from "../../../../components/subcomponents/BlackHeading";
import BlogSection from "../../../../components/subcomponents/BlogSection";
import GreenHeading from "../../../../components/subcomponents/GreenHeading";
import Sidebar from "../../../../components/subcomponents/Sidebar";
import FormSection1 from "../../../../components/subcomponents/FormSection1";
export default class HowtopriceyourMealKits extends PureComponent {
  render() {
    return (
      <div>
        <Head>
          <title>HOW TO PRICE YOUR MEAL KITS</title>
          <meta
            name="HOW TO PRICE YOUR MEAL KITS"
            content="In Meal Kits too, food cost of your item can be easily calculated, which you probably know and if not, DailyKit’s software shows you real-time food cost while making your recipes."
          />{" "}
          <meta
            property="og:title"
            content="HOW TO PRICE YOUR MEAL KITS"
            key="ogtitle"
          />
          <meta
            property="og:url"
            content="https://dailykit.org/start_a_mealKit_brand/meal-kit-guides/meal-kit-marketing-guides/how-to-price-your-meal-kits"
          />
          <meta
            property="og:description"
            content="In Meal Kits too, food cost of your item can be easily calculated, which you probably know and if not, DailyKit’s software shows you real-time food cost while making your recipes."
            key="ogdesc"
          />
        </Head>

        <Navbar />
        <HowtopriceyourMealKitsComponent />
        <Footer />
      </div>
    );
  }
}

export class HowtopriceyourMealKitsComponent extends PureComponent {
  render() {
    return (
      <div>
        <FormSection1
          dataAccount="3161173:g2o5g2c3i8"
          dataForm="4175704:a4w7j9"
        />
        <div className="head">
          <GreenHeading text="How to have the right price" />
          <BlackHeading text="for your Meal Kits" />
        </div>
        {/* <--first sidebar--> */}
        <Sidebar
          rest={[
            {
              sidebar_heading: "HOW TO PRICE YOUR MEAL KITS",
              sidebar_link: [
                "Pick the most loved dish from your Menu",
                "Cost of Labor",
                "Work with Recipe Providers",
              ],
              para_heading: "Questions",
              para: [
                "“How much should I price my Meal Kit at?” ",
                "“What IS the Ideal Meal Kit Cost?” ",
                "“Should I price my Meal Kit low or high?”",
                "These are the types of questions usually a lot of clients have asked us and we have always had the same answer to everyone. “It’s completely your choice” ",
                "Pricing your product is the most crucial part of the business process and the answer to this is part of research and understanding about your own product’s value proposition in terms of the services offered.",
                "In a rough sense, pricing Meal Kits follows the same process as pricing a restaurant’s menu.",
                "How? Well, the biggest price component of a meal kit is the cost of food that makes it up. Restaurants typically have recipes of each item or a rough sense of the cost it takes them to serve one serving of an item.",
              ],
              para2: [
                {
                  para2_heading: "Are you New to all this?",
                  para2: [
                    "In Meal Kits too, food cost of your item can be easily calculated, which you probably know and if not, DailyKit’s software shows you real-time food cost while making your recipes. ",
                    "Now, there are many components that constitute the selling price. Food Cost being the one, there are more as following;",
                  ],
                },
                {
                  para2_heading: "Cost of Labor",
                  para2: [
                    "Adding Labor cost into your Meal Kit pricing is another important component. ",
                    " Ingredients need to be portioned and put into little packets. Luckily, anyone can do this simple exercise so the cost of labor/hour in this is less as compared to staff working on gas.Also, packing a Meal Kit using DailyKit takes an average of 3 minutes by one person",
                    "So, if at 10$ per hour labor cost, if it takes a person roughly 3 minutes to pack a meal kit, your labor cost per kit would be around 50 cents.",
                  ],
                },
                {
                  para2_heading: "Packaging Cost",
                  para2: [
                    "Packaging is used for every part of ingredients but the small bags are very inexpensive and if properly planned, packaging should not cost more than 5-10% of the total selling price.",
                    "You might also have a master bag that packs everything together into one. If you have such packaging then you might want to add that as well to the overall cost. ",
                    "Here the packaging might vary based on your preferences. You might want to use Zip Locks, Aluminium packaging, Paper-based packaging or non-plastic / environmental friendly. So depending on your preference of packaging, the cost will vary and you can arrive at the final cost. ",
                    "So, let’s say, it costs you 1 dollar including the outer bag and inner packets for 2 servings of meal kit, You will need to add this to the cost of food and labor to arrive at the price of the product.",
                  ],
                },
                {
                  para2_heading: "Delivery",
                  para2: [
                    "This is an additional cost that is completely up to the Restaurant to add this cost or even partially absorb the cost of delivery. A lot of brands absorb the cost of delivery partially and add the cost as a separate entity in the bill. ",
                    "Since, you may be already running a restaurant so it might happen that you have an idea of above things and are probably looking to guesstimate your meal kit price based on the existing menu. Based on a different objective, the pricing strategy for Meal Kit may differ.",
                  ],
                },
                {
                  para2_heading: "Other Components",
                  para2: [
                    "Adding above constituents, you will easily be able to calculate the cost of Meal Kit for your business. Over this, you’ll add your brand premium and cost of space, opportunity and other factors going well for you. ",
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
