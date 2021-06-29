import React, { PureComponent } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Head from "next/head";
import BlackHeading from "../../../components/subcomponents/BlackHeading";
import BlogSection from "../../../components/subcomponents/BlogSection";
import GreenHeading from "../../../components/subcomponents/GreenHeading";
import Sidebar from "../../../components/subcomponents/Sidebar";
import FormSection1 from "../../../components/subcomponents/FormSection1";
export default class Grocers extends PureComponent {
  render() {
    return (
      <div>
        {" "}
        <Head>
          <title>Enterprise: Grocers</title>
          <meta
            name="WHY SHOULD GROCERS DO MEAL KITS?"
            content="Grab Your share of the Meal Kit Revenue. Discard Competition. Achieve Sustainable Operations. Explore New Revenue Streams. Expand your customers base. Dailykit will help you get there easily. "
          />
          <meta
            property="og:title"
            content="WHY SHOULD GROCERS DO MEAL KITS?"
            key="ogtitle"
          />
          <meta
            property="og:url"
            content="https://dailykit.org/start_a_mealKit_brand/enterprise/grocers"
          />
          <meta
            property="og:description"
            content="Grab Your share of the Meal Kit Revenue. Discard Competition. Achieve Sustainable Operations. Explore New Revenue Streams. Expand your customers base. Dailykit will help you get there easily. "
            key="ogdesc"
          />
        </Head>
        <Navbar />
        <GrocersComponent />
        <Footer />
      </div>
    );
  }
}

export class GrocersComponent extends PureComponent {
  render() {
    return (
      <div>
        <FormSection1
          dataAccount="3161173:g2o5g2c3i8"
          dataForm="4175704:a4w7j9"
        />
        <div className="head">
          <GreenHeading text="Don't miss out on" />
          <BlackHeading text="Your share of the Meal Kit Revenue" />
        </div>
        {/* <--first sidebar--> */}
        <Sidebar
          rest={[
            {
              sidebar_heading: "WHY SHOULD GROCERS DO MEAL KITS?",
              sidebar_link: [
                "Discard Competition",
                "Sustainable Operations",
                "New Revenue Stream",
                "Millennials are your customers",
              ],
              para_heading: "Sally is a super mom ",
              para: [
                "who works and also has time to make delicious food for her family when she’s back home. But she recently got promoted and has to put in a few extra hours at office. Although she hates to eat outside, she still prefers making food for the family.",
                "She cannot order a Meal Kit from Blue Apron as it would arrive only a week later. So she’s kept wondering “What if Groceries did Meal Kits? It would make my life a lot more easier. I can just pick up what I need and be out in a jiffy rather than spend time looking for what I want”",
                "It makes perfect sense for an Individual Grocer to sell their own Meal Kits and here’s why you should do it",
              ],
              para2: [
                {
                  para2_heading: "Discard Competition",
                  para2: [
                    "Current Problem",
                    "There are over 150+ Meal Kit providers in USA alone and none of them are Grocers.",
                    "Meal Kits is a booming industry but has received a lot of flak because of operational inefficiencies.",
                    "Solution;",
                    "A Grocer can join the party and decimate the competition.",
                    "It makes so much more sense for a Grocer to be a Meal Kit provider. Grocers can tailor make their Meal Kit Menu based on the ingredients they already possess, the quality..etc and sell it for way below current market price. This makes Meal Kits such an attractive proposition for a Grocer.",
                    "The Grocers can now stay at par with the competition by offering attractive recipes and pricing to increase brand loyalty",
                  ],
                },
                {
                  para2_heading: "Sustainable Operations",
                  para2: [
                    "Current Problem",
                    "Like we explained above, the current Meal Kit Operations are in no way scalable because of Centralised model of operations.",
                    "This makes Meal Kit a more subscription based service than an alternative that can be an answer to “Hey, what’s for dinner tonight?”",
                    "Solution",
                    "When someone asks “What’s for dinner tonight?” if the person thinks of getting a Meal Kit from a local grocery store rather than from a Meal Kit service, you have won. Their answer would now be “There’s an awesome Meal Kit for Creamy Courgette & Bacon Pasta available just a few blocks away. Let me grab that for dinner”",
                    "Its so much more easier for a Grocer to become a Meal Kit provider than an individual entity because there’s absolutely zero dependency. Being a Grocer, all the ingredients and staff are readily available and are just a few aisles away.",
                  ],
                },
                {
                  para2_heading: "New Revenue Stream",
                  para2: [
                    "Current Problem:",
                    "Grocers have been operating the same archaic way for so many years now. There’s not been an innovative change in terms of how a Grocers earn their revenue as a result, they have become victims of Buyouts or Shutting Shops.",
                    "Solution:",
                    "Meal Kits provide the perfect opportunity to add a sustainable business as a lucrative revenue stream.",
                    "It’s pretty clear by now that Meal Kits are in pretty huge demand but the supply is just lacking execution. It’s a clear case of Demand vs Supply problem. If Grocers enter the market and become a player in the Market, it becomes so much easier to convert all those foot falls into Meal Kit consumers very easily with almost zero marketing.",
                  ],
                },
                {
                  para2_heading: "Millennials are your customers",
                  para2: [
                    "Current Problem:",
                    "Washington Post recently did a study which suggests that Millennials are more likely to purchase Meal Kits than visit Grocers. These are a big customer base and are the most reluctant to visit a Grocery Store to purchase raw materials to cook.",
                    "Solution:",
                    "If you know what we are talking about, you would already be thinking of adding a Meal Kit to your aisle already.",
                    "Millennials are your customers for the future so if you catch them early, the revenue from these customer bases can be enormous. They are the most impulse buyers and if there’s a Meal Kit, they will get their hands on them fairly quickly.",
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
                "Price Friendly",
                "No Extra Food Wastage",
                "Increased Brand Loyalty",
                "Delivery",
              ],
              para_heading: "The Market currently thinks",
              para: [
                "  of the Meal Kit industry as something with many problems waiting to be fixed. But there are not many people who are doing something about it. There seems to be a standard that is set and people fail to think beyond that standard of how this industry has to operate.",
                "A recent Bloomberg Article perfectly summed up all the problems Meal Kit companies face by going the retail route but the solutions are right in front of your eyes too.",
              ],
              para2: [
                {
                  para2_heading: "Price Friendly",
                  para2: [
                    "Customers think of Meal Kits as a fancy way of cooking a meal rather than an everyday proposition.",
                    "While its a fair argument, its skewed in a few ways just because of the fact that the current operational methodologies by these Meal Kit Companies makes it almost impossible to run it for profitability. This makes Meal Kits EXPENSIVE and thus making it Fancy !!",
                  ],
                },
                {
                  para2_heading: "No Extra Food Wastage",
                  para2: [
                    "Since these Meal Kits are placed on huge aisles, the super markets are hard pressed on meeting the local demands. This makes them stock more than what is actually needed taking up a lot of shelf space.",
                    "While this addresses the problem of availability to a consumer, the problem lies when the doors shut. Now since these foods have a shorter shelf life, the unused ones need to be discarded to make space for the newer and fresher meal kits.",
                    "This food wastage adds to the existing raw food the grocers have to already throw away from their shelves to make space for fresher ones.",
                    "We are just running in circles here.",
                  ],
                },
                {
                  para2_heading: "Increased Brand Loyalty",
                  para2: [
                    "SuperMarkets and Grocers may have brand loyalty for themselves in the macro but the brands within their doors do not.",

                    "Why you ask? Well you already know the answer to that one. Its the sheer amount of selection you get when you visit a supermarket or a grocery store.",

                    "Couple that with the Meal Kit Brands that are placed on their aisles with the already existing Frozen Food section and what not. A person who is exposed to Meal Kits for the first time will not bother about the brand but what makes sense for him at that moment.",

                    "This makes it more of an impulse buy rather than Brand Focussed Purchase.",
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
