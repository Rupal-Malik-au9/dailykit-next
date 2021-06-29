import React, { PureComponent } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Head from "next/head";
import BlackHeading from "../../../components/subcomponents/BlackHeading";
import BlogSection from "../../../components/subcomponents/BlogSection";
import GreenHeading from "../../../components/subcomponents/GreenHeading";
import Sidebar from "../../../components/subcomponents/Sidebar";
import FormSection1 from "../../../components/subcomponents/FormSection1";
export default class Meal_kit_packaging extends PureComponent {
  render() {
    return (
      <div>
        <Head>
          <title>Meal-kit-guides: Meal_kit_packaging</title>
          <meta
            name="How to pack your Meal Kits?"
            content="Works for all types of Meal Kits like Shelf-Based Meal Kits, Prepped Meal Kits, raw Meal Kits and more. Subscription Based Meal Kits. Manage Inner Packaging. More Sustainable Ideas. Meal Kits are nothing to be afraid of and it’s packaged exactly how you think it should be. "
          />
          <meta
            property="og:title"
            content="How to pack your Meal Kits?"
            key="ogtitle"
          />
          <meta
            property="og:url"
            content="https://dailykit.org/start_a_mealKit_brand/meal-kit-guides/meal-kit-packaging"
          />
          <meta
            property="og:description"
            content="Works for all types of Meal Kits like Shelf-Based Meal Kits, Prepped Meal Kits, raw Meal Kits and more. Subscription Based Meal Kits. Manage Inner Packaging. More Sustainable Ideas. Meal Kits are nothing to be afraid of and it’s packaged exactly how you think it should be. "
            key="ogdesc"
          />
        </Head>

        <Navbar />
        <MealKitPackaging />
        <Footer />
      </div>
    );
  }
}
export class MealKitPackaging extends PureComponent {
  render() {
    return (
      <div>
        <FormSection1
          dataAccount="3161173:g2o5g2c3i8"
          dataForm="4175704:a4w7j9"
        />
        <div className="head">
          <GreenHeading text="How to pack your" />
          <BlackHeading text="Meal Kits?" />
        </div>
        {/* <--first sidebar--> */}
        <Sidebar
          rest={[
            {
              sidebar_heading: "WHY SHOULD BAKERIES DO MEAL KITS?",
              sidebar_link: [
                "HOW TO PACK YOUR MEAL KITS?",
                "Subscription/Mail-Order Business Model",
                "Shelf-Based Meal Kits",
                "But Wait, Do we need to put Ice Packs?",
                "So what about IcePacks in Local fulfillment?",
                "Subscription Based Meal Kits",
                "Inner Packaging",
                "Groctaurant Example",
                "Sustainable Ideas",
                "It's not over...",
              ],
              para_heading: "",
              para: [
                "So, Here we are.. If you’ve come to this guide on how to package Meal Kits, make sure that you are familiar with Meal Kits.",
                "Incase you’re not, Meal Kits are simply a packet that contains small packets of individual ingredients that make up a particular recipe (Read More)",
                "So, in essence, there are 2 components to a Meal Kit packaging.",
                "  1. The Outer Bag or the Master Bag or the Main Bag or the Box that contains all the Sachets",
                "  2.The Inner Packets that contain the Individual Ingredients in the portioned quantity forming the sachets as part of complete kit.",
                "Why is packaging important?",
                "  1. It helps you market your product.",
                "  2.Packaging brings a uniqueness to your brand",
                "  3.Packaging makes sure that the product is delivered to the end user in the expected manner set aside by the business model.",
                "  4.Packaging affects the user experience in consuming the product.",
                "Now, deciding the right packaging is such a diverse and subjective process that it’s essential to understand the business process you’ll be choosing.",
                "For a subjective reference, lets see how packaging differs according to the business model chosen.",
              ],
              para2: [
                {
                  para2_heading: "Subscription/Mail-Order Business Model",
                  para2: [
                    {
                      description:
                        "1. BlueApron is synonymous with  those who have used a subscription service like this.  People must be familiar with the packaging that Blue Apron Meal Kits comes with but those who aren’t, this is what their outer packaging looks like.",
                      image:
                        "https://www.dailykit.org/hs-fs/hubfs/Screenshot%202020-01-06%20at%205.26.29%20PM.png?width=929&name=Screenshot%202020-01-06%20at%205.26.29%20PM.png",
                    },
                    {
                      description:
                        "You must be thinking “Wow, that’s some bulky packaging they’ve got” but wait, this is how it looks from inside",
                      image:
                        "https://www.dailykit.org/hs-fs/hubfs/Screenshot%202020-01-06%20at%205.26.38%20PM.png?width=933&name=Screenshot%202020-01-06%20at%205.26.38%20PM.png",
                    },
                    {
                      description:
                        "This is what their box looks like empty from inside with the insulation and ice packs",
                      image:
                        "https://www.dailykit.org/hs-fs/hubfs/Screenshot%202020-01-06%20at%205.26.46%20PM.png?width=933&name=Screenshot%202020-01-06%20at%205.26.46%20PM.png",
                    },
                    "Now in case of BlueApron and services similar to this, one thing to note is that they are not hyperlocal and shipping from their central facility using fedex or UPS similar services. So, it is quite natural for them to bulk up their packaging with ice packs and insulation.",
                    "Surprisingly, in BA’s case, packaging weighs 2/3rd of the box weighing mainly because of the ice packs, which is not required in case of hyperlocal delivery.",
                  ],
                },
                {
                  para2_heading: "Shelf-Based Meal Kits",
                  para2: [
                    {
                      description:
                        "A bigger trend arising these days is the shelving of Meal Kits in grocery aisles inside open aerated refrigerators. When compared to mail-order packaging, this  requires strikingly light packaging. Here’s a picture of the packaging of Meal Kit kept by BlueApron in retail.",
                      image:
                        "https://www.dailykit.org/hs-fs/hubfs/Screenshot%202020-01-06%20at%205.26.55%20PM.png?width=927&name=Screenshot%202020-01-06%20at%205.26.55%20PM.png",
                    },
                    {
                      description:
                        "Also, another take by Publix market in packaging is this",
                      image:
                        "https://www.dailykit.org/hs-fs/hubfs/Screenshot%202020-01-06%20at%205.27.04%20PM.png?width=935&name=Screenshot%202020-01-06%20at%205.27.04%20PM.png",
                    },

                    "They use a paper bag that is easy to carry and also more environmentally sustainable as compared to using a plastic bag.",
                  ],
                },
                {
                  para2_heading: "But Wait, Do we need to put Ice Packs?",
                  para2: [
                    "Well, first, Icepacks are required for perishable items that need to stay fresh and consumable from the time of delivery to the time of consumption.",
                    "So, the smart answer would be that Meal Kit does not mandate the use of ice packs rather it’s the supply chain process of your Business Model that will decide that.",
                    "Incase of services like BlueApron, Ice Pack is mandated because cold supply chain is not maintained all the way from shipping to consumers. So, the answer is clear when shipping across states that ice packs are needed.",
                  ],
                },
                {
                  para2_heading: "So what about IcePacks in Local fulfillment?",
                  para2: [
                    "Well, let’s imagine this.. When  perishable ingredients like Vegetables or Meat is bought from a grocery store, either shopping yourself or through instacart, do we really use ice packs for them? Well in 99.99% of the cases the answer is a resounding No, Right?",
                    "None of the grocery stores are responsible for providing you ice packs when any perishable products are bought because it is considered the responsibility of the buyer to refrigerate the product in their home kitchen if not consumed immediately.",
                    "So, with whatever model you have chosen, if your Meal Kit can stay fresh during transit to be refrigerated again by the consumer, there is absolutely no need for the ice-packs.",
                    "So, now the question remains, how should you decide the ideal packaging for your brand?",
                  ],
                },
                {
                  para2_heading: "Subscription Based Meal Kits",
                  para2: [
                    "Subscription based Meal Kits are especially useful to customers who like to follow a regiment. People who are fitness enthusiasts like to Subscribe to a service that gives them Meal Kits in a timely manner on a daily or weekly basis. ",
                    "Subscription services can also be very useful for old aged people who also follow a strict regiment of healthy meals in their diet. So these types of services have a lot of advantages when it comes to serving its purpose. ",
                    "Similar to Pre Order functionalities, Dailykit has built in the ability for customers to Subscribe to a particular restaurant’s services thus giving customers a lot of options to sell meal kits using many different channels",
                  ],
                },
                {
                  para2_heading: "Inner Packaging",
                  para2: [
                    "The inner packaging depends on a variety of things along with the nature of the ingredients.",
                    "As a rule, it is advisable to package individual ingredients in a way that the wet ingredients do not affect the dry ingredients.",
                    "Let’s take a look at the packaging based on the ingredient category:",
                    "1.  Spices: Spices can be very easily packed in small paper bags or plastic zip locks. Please note: if you are using a paper bag, it is advisable to enclose them inside another bag so as they do not tear and get affected in the case of any wet ingredient leaks.",
                    "2.  Sauces: Sauces can be packed in zip locks and also in small plastic bottles.",
                    "3.  Dry Dairy Products: Products in the category of cheese can be packed in a paper bag or wrapped in shrink wrap.",
                    "Please note: if the cheese  provided is already shredded, then it is advisable to use a plastic container so as it is not squished during transit.",
                    "4.  Wet Dairy Product: Ingredients like cream, curd, milk should be delivered sealed in a plastic container or a carton.",
                    "5.  Solid Vegetables: If the vegetable provided is raw like onion, cabbage etc, they can be put as it is inside the box or packaged in a paper bag.",
                    "If the vegetables are prepped i.e. chopped or pureed, a plastic container or zip lock is recommended.",
                    "6.  Leafy Vegetables: Leafy vegetables can be enclosed in a plastic ziplock or a paper bag. ",
                    "7.  Meat: It is advisable to pack Meal Kit in a plastic container so that the surface of the packaging does not stick with meat.",
                    "Please note: It may happen that some of the ingredients are available as a sachet from the manufacturer such as ketchup or butter. In those cases, they do not require additional packaging.",
                  ],
                },
                {
                  para2_heading: "Groctaurant Example",
                  para2: [
                    {
                      description:
                        "Have a look at how Groctaurant, a Hyperlocal Meal Kit brand run by a restaurant kitchen used to pack Meal Kits..",
                      image:
                        "https://www.dailykit.org/hs-fs/hubfs/Screenshot%202020-01-06%20at%205.27.15%20PM.png?width=933&name=Screenshot%202020-01-06%20at%205.27.15%20PM.png",
                    },
                    {
                      description:
                        "Laid out like this nicely as if ready for a chef’s kitchen table. ",
                      image:
                        "https://www.dailykit.org/hs-fs/hubfs/Screenshot%202020-01-06%20at%205.27.23%20PM.png?width=933&name=Screenshot%202020-01-06%20at%205.27.23%20PM.png",
                    },
                    {
                      description: "Looking like this once cooked. ",
                      image:
                        "https://www.dailykit.org/hs-fs/hubfs/Screenshot%202020-01-06%20at%205.27.32%20PM.png?width=935&name=Screenshot%202020-01-06%20at%205.27.32%20PM.png",
                    },
                    "At Groctaurant, which was also running a cloud restaurant with a different brand name, delivered Meal Kits under 60 minutes.",
                    "Well, truth be told, Meal Kits are little packaging intensive. In an informal study done, as compared to someone purchasing food through grocery, Meal Kits consume 20% more packaging by weight.",
                  ],
                },
                {
                  para2_heading: "Sustainable Ideas",
                  para2: [
                    "If packaging is least required in any meal kit models, it’s through hyperlocal on-demand delivery, which restaurants and grocers can very easily fulfill. ",
                    "Some ideas to make packaging sustainable to it’s absolute limit ",
                    "   1. Use as much paper based material for things that are dry. ",
                    "   2. A restaurant in Bangalore, India, uses a very thin old piece of washed cloth as the outer bag. ",
                    "   3.  Consumers can be persuaded to put a security deposit for 2 sets of tupperware boxes in which Meal Kits are delivered. More about this will be part of study. ",
                    "So, to sum it up nicely, Meal Kits are nothing to be afraid of and it’s packaged exactly how you think it should be. There are countless companies selling the best of packaging that you will ever require for this.",
                  ],
                },
                {
                  para2_heading: "It's not over...",
                  para2: [
                    "Each packet needs to be labelled if not very obvious. Labelling helps you with the manufacturing process and also help you increase your brand, and consumer experience. Label helps consumers identify the correct ingredients. Label can carry shelf life, the brand of the ingredient etc.",
                    "DailyKit’s software allows you to select custom label for every ingredient type so it’s all dynamic and smooth. ",
                    "DailyKit prints label anytime an ingredient is check-weighed, this label contains the information decided by you per ingredient along with a QR code/Barcode for you to scan while assembly.",
                    "Some things for the future",
                    "With the rising trend of traceability and transparency, we’re tying up with the blockchain based solution that will allow consumers to scan the ingredient label and find out all the details to the farm level for that ingredient. Awesome isn’t it?",
                  ],
                },
              ],
            },
          ]}
          videourl="https://www.youtube.com/embed/pmtxnL0Y_n0"
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
