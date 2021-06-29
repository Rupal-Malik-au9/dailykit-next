import React, { PureComponent } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";
import BlackHeading from "../../components/subcomponents/BlackHeading";
import BlogSection from "../../components/subcomponents/BlogSection";
import GreenHeading from "../../components/subcomponents/GreenHeading";
import Sidebar from "../../components/subcomponents/Sidebar";
import FormSection1 from "../../components/subcomponents/FormSection1";

export default class Cloud_kitchen extends PureComponent {
  render() {
    return (
      <div>
        <Head>
          <title>Cloud_kitchen</title>
          <meta
            name="WHY CLOUD KITCHENS SHOULD DO MEAL KITS?"
            content="Dailykit is the most Startup friendly software technology company. We help you build a strong and sustainable business by providing Customization control to your customer, Delivery within hours & Real Time Control. Boost your Brand up with Dailykit. Off the Roof ROI. Sell more and Streamline Operations. Easy to scale. "
          />
          <meta
            property="og:title"
            content="WHY CLOUD KITCHENS SHOULD DO MEAL KITS?"
            key="ogtitle"
          />
          <meta
            property="og:url"
            content="https://dailykit.org/start_a_mealKit_brand/cloud_kitchen"
          />
          <meta
            property="og:description"
            content="Dailykit is the most Startup friendly software technology company. We help you build a strong and sustainable business by providing Customization control to your customer, Delivery within hours & Real Time Control. Boost your Brand up with Dailykit. Off the Roof ROI. Sell more and Streamline Operations. Easy to scale. "
            key="ogdesc"
          />
        </Head>

        <Navbar />
        <CloudKitchen />
        <Footer />
      </div>
    );
  }
}

export class CloudKitchen extends PureComponent {
  render() {
    return (
      <div>
        <FormSection1
          dataAccount="3161173:g2o5g2c3i8"
          dataForm="4175704:a4w7j9"
        />

        <div className="head">
          <GreenHeading text="We help you build a strong and sustainable business by providing" />
          <BlackHeading
            text="Customization control to your customer, Delivery within hours & Real
            Time Control"
          />
        </div>
        {/* <--first sidebar--> */}
        <Sidebar
          rest={[
            {
              sidebar_heading: "WHY CLOUD KITCHENS SHOULD DO MEAL KITS?",
              sidebar_link: [
                "Brand Awareness?",
                "Improved Profit Margins",
                "Less Riskier",
              ],
              para_heading: "In America,",
              para: [
                " busy schedules and on demand services are bringing many options to consume food to the table. One of the most popular ones are Cloud/Virtual Kitchens which has taken the nation by storm.",
                "But there’s a downside to this. There have been many Cloud Kitchen brands that have sprung up in the past and sustainability has been a main concern for these brands. Stagnant revenue and loyal customer base is another one but there’s light at the end of the tunnel, and lets explore that.",
              ],
              para2: [
                {
                  para2_heading: "Brand Awareness?",
                  para2: [
                    "Virtual Kitchens have always struggled with Brand Awareness as they do not have a physical presence. This makes them invest more money into Marketing themselves which is good but the returns are low.",
                    "Adding Meal Kits to your vertical will significantly improve your Brand Awareness as the Meal Kit Revolution is sweeping the nation by storm. You instantly come across as a brand that people talk about on Social Media as to how great your dishes are.",
                    "Ideally you will be addressing 2 sizable markets in one stroke as both have extremely loyal customer bases. The idea of Meal Kits makes a lot more sense to a Cloud Kitchen than anyone else in the market and its easier to execute for a Cloud Kitchen since you already have the technology and operational capabilities to deliver them.",
                  ],
                },
                {
                  para2_heading: "Improved Profit Margins",
                  para2: [
                    "Lets face it, Cloud Kitchens do have the cushion of not working out of a fancy huge location which exposes your brand to higher profit margins. But the recent survey suggests otherwise. Even though you do not have to worry about huge physical location overheads, you still have to spend money on Marketing.",
                    "Essentially the money that you save is going back into Marketing. So adding another vertical of generating revenue makes a lot of sense for Cloud Kitchens.",
                    "What better vertical to add than a Meal Kit.",
                    "You don’t even need a Chef to pack a Meal Kit. It can be done by anyone. With Dailykit’s technology, we have made this process completely fool proof that even a 10 year old can do it.",
                  ],
                },
                {
                  para2_heading: "Less Riskier",
                  para2: [
                    "Cloud Kitchens can serve a variety of recipes on the platter which makes them so unique already. Adding a new recipe or removing a recipe from the menu is not a difficult task but a bad recipe/bad review can hurt the brand.",
                    "However unique your recipe might be, you always run into the risk of exposing the customer to a recipe he may/ may not like. So why don’t you do the soft approach first?",
                    "Introduce the new recipe as a Meal Kit first. Get your customers to taste it as a Meal Kit. Once you have your customers talking about your new recipe, you can then include it part of your cooked food. This will allow your customers to try their way with the Meal Kit and also your way with your cooked version.",
                    "You win both ways.",
                    "Now, you are already making great food that people love. Why don’t you make Meal Kits out of them? Or even have a seperate recipes for Meal Kits as well. The options are endless.",
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
                "Boost your Brand up with Dailykit",
                "Off the Roof ROI",
                "Recipes, Vendors and best of both worlds",
              ],
              para_heading: "Meal Kits has become a requirement",
              para: [
                "these days because of the flexibility and ease it provides a consumer to cook their favorite meal with having to think about grocery shopping nor does it posses any learning curve.",
                "Companies like Blue Apron are selling millions and millions of Meal Kits. So it is quite obvious that people love Meal Kits, inturn this makes anyone and everyone a cook",
              ],
              para2: [
                {
                  para2_heading: "Boost your Brand up with Dailykit",
                  para2: [
                    " Since Cloud Kitchens do not have a physical presence, it becomes so much more important for any virtual kitchen setup to have a very strong presence online.",
                    "With so many people already hailing Meal Kits, your brand will easily become the talk of the town. Dailykit will help you start a Meal Kit Business with so much ease that you might even consider doing Meal Kits all the time.",
                    "With your brand doing Meal Kits, people will now have another reason to talk about your brand which gives you more impetus in terms of brand awareness online.",
                  ],
                },
                {
                  para2_heading: "Off the Roof ROI",
                  para2: [
                    "The data suggests that any investment in a Meal Kit business will present you with an amazing ROI. But the key here is the execution which is why you see a lot of people not doing Meal Kits. The complexities involved in preparing a Meal Kit used to be great. But not anymore.",
                    "With Dailykit, we have made it so easy that anyone can do it. You can hire a person with zero experience and they can pack a meal kit within 5 mins with no sweat.",
                    "Since our team already has a solid background in the meal kit industry, we have tried and tested our solution in the most complex scenarios and everytime Dailykit has won.",
                    "This ease of use gives you a greater leverage in terms of implementation of any Meal Kit strategy because preparing a Meal Kit not your problem anymore. We have it completely covered.",
                  ],
                },
                {
                  para2_heading: "Recipes, Vendors and best of both worlds",
                  para2: [
                    "Trying out the best of recipes always keeps you ahead of the competition but to ace a recipe used to be hard.",
                    "Dailykit makes that easy as well with thousands of recipe providers on our platform, any new recipe, be it exotic or regular are now just a few clicks away.",
                    "We know what you  are thinking. New recipe brings in new ingredients, which in turn brings  the headache of finding new vendors right? Well we got  that covered too.",
                    "With Mandi (Dailykit marketplace) choosing a vendor and placing an order is as simple as tapping a few buttons. With our Suggestive Interface, you can choose the right Vendor for your requirement in under 5 minutes, place an order and get delivery details all under the same roof.",
                    "These are just a few of the many many features of our amazing platform.",
                    "All you got to do is fill out a nice little form, give us a few minutes of your time and we will take it from there.",
                    "We have purposefully not revealed an aspect of our platform which will make it a no brainer. We are so confident that, you will start with us immediately when you hear those magic words from us.",
                    "So are you ready to bring in those $$$",
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
