import React, { PureComponent } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Head from "next/head";
import BlackHeading from "../../../components/subcomponents/BlackHeading";
import BlogSection from "../../../components/subcomponents/BlogSection";
import GreenHeading from "../../../components/subcomponents/GreenHeading";
import Sidebar from "../../../components/subcomponents/Sidebar";
import FormSection1 from "../../../components/subcomponents/FormSection1";
export default class Start_mealkit_brands extends PureComponent {
  render() {
    return (
      <div>
        <Head>
          <title>Start-meal-kit-brands: Start_mealkit_brands</title>
          <meta
            name="Dailykit"
            content="The Only Trend-Responsive Food-Tech Solution You'll Ever Need"
          />
          <meta
            property="og:title"
            content="Start_mealkit_brands"
            key="ogtitle"
          />
          <meta
            property="og:url"
            content="https://dailykit.org/start_a_mealKit_brand/start-meal-kit-brands/how-to-start-a-Meal-Kit-Service"
          />
          <meta
            property="og:description"
            content="The Only Trend-Responsive Food-Tech Solution You'll Ever Need."
            key="ogdesc"
          />
        </Head>

        <Navbar />
        <StartmealkitbrandsComponent />
        <Footer />
      </div>
    );
  }
}

export class StartmealkitbrandsComponent extends PureComponent {
  render() {
    return (
      <div>
        <FormSection1
          dataAccount="3161173:g2o5g2c3i8"
          dataForm="4175704:a4w7j9"
        />

        <div className="head">
          <GreenHeading text="How to start a Meal Kit Service?" />
          <BlackHeading text="Here's 5 steps how you can start your own Meal Kit Brand" />
        </div>
        {/* <--first sidebar--> */}
        <Sidebar
          rest={[
            {
              sidebar_heading: "5 STEPS TO START A MEAL KIT SERVICE",
              sidebar_link: [
                "Step 1: Get Operation Ready",
                "Step 2: Allocate Staff to pack them",
                "Step 3: Decide your Meal Kit Menu",
                "Step 4: Sell them easily at your restaurant",
                "Step 5: Online Ordering",
                "Bonus",
              ],
              para_heading: "",
              para: [
                "How exactly do you start a Meal Kit Service? Is it Easy? What does it take to start a new service you know nothing of? These are some of the questions people have been asking over the past few months judging by the popularity of Meal Kits. ",
                "Study shows that Meal Kits by funded startups can pose a serious threat to full service restaurants. But there’s another study which says, Restaurants stand the best chance to benefit the most from Meal Kits. More than 50% of the American Population (and growing) want to take home a Meal Kit from their favorite restaurant. Not Blue Apron, Not Hello Fresh, Not Chef’d but your own Restaurant Meal Kits. ",
                "Surprised? Well don’t be because Meal Kits are not really different from what Restaurants do on a daily basis. The only difference is, instead of cooking them, you pack them before with instructions how to cook them. That is all. ",
                "There are companies like Dailykit that allows you to start a Meal Kit service with ease. Infact, you can start a Meal Kit service within 48 hours because Dailykit will set everything up for you.",
                "So here’s 5 steps to follow when you need to start a Meal Kit service today..",
              ],
              para2: [
                {
                  para2_heading: "Step 1: Get Operation Ready",
                  para2: [
                    "The reason we have gone straight into operations is because you already have the Inventory, you already would have chopped veggies, pre cooked everything you need to serve your customers fast. Now all you need to do is allocate a small area in your kitchen to pack the ingredients. When this is done, DailyKit will tell you exactly what you have and what you don’t, to prepare the Meal Kits. So when you get an order, you just select that item and follow the instructions that is shown on the screen. You will have a Meal Kit ready in under 5 minutes.",
                  ],
                },
                {
                  para2_heading: "Step 2: Allocate Staff to pack them",
                  para2: [
                    "When you start a Meal Kit Service, you don't need to hire any additional staff. You can do that with the existing staff very easily. You just need to allocate them right. This person will be in-charge of packing the Meal Kits. So when an Order is received in DailyKit system, it will tell this person exactly where the ingredients are, how much quantity to pack and in what order. If they miss an ingredient, DailyKit will not allow them to proceed. So you never have to worry about missing an ingredient.",
                  ],
                },
                {
                  para2_heading: "Step 3: Decide your Meal Kit Menu",
                  para2: [
                    "It's very simple really. You can have just 5 or more (but we recommend 5 to begin with) recipes to begin with and see how people are responding to it. You must already have those set of customers who always order the same dish over and over again. This is how you choose Pick the best 5 recipes you know are the best dishes you serve at your restaurant.",
                  ],
                },
                {
                  para2_heading: "Step 4: Sell them easily at your restaurant",
                  para2: [
                    "When you are done with choosing your 5 recipes, it’s time to sell them and tell people that you have started offering Meal Kits. Active employee engagement will be the key to sell Meal Kits. Every person who walks into your restaurant is a possible customer. Your employees just need to walk up to these customers and ask. If they like your food, there’s no doubt that they might want to take home your Meal Kits.",
                  ],
                },
                {
                  para2_heading: "Step 5: Online Ordering",
                  para2: [
                    "Once you have got a good hold on selling Meal Kits at your restaurant, you can now start telling people to place and order online as well. The convenience of online ordering will bring in a substantial amount of revenue from busy parents, office goers, late nighters, millennials..etc. You can also have a separate Meal Kits menu in your delivery partner apps so that people can easily order using Uber Eats, Postmates, Grubhub..so on. Using Dailykit, you can now ask your customer to order them from your website. Hence you are not spending a single marketing $ on this. The kits pretty much sell themselves",
                  ],
                },
                {
                  para2_heading: "Bonus",
                  para2: [
                    "Once your customers have started loving the Meal Kits more, give them another reason to love them. Open up the customization option in DailyKit. Now your customers can place an order online and also customize their Meal Kits. For eg, Customer A wouldn’t want any Garlic on his Bread Sticks but Customer B would want more than what you offer by default. So they simply push the customization slider up against the ingredient and viola, you have a customized order. ",
                    "So these are 5 simple steps using which you can start a Meal Kit service right from your restaurant. Give your customers more reasons to order from you and say good bye to depleting revenue.",
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
