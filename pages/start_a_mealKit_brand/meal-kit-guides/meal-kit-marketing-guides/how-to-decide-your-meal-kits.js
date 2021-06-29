import React, { PureComponent } from "react";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import Head from "next/head";
import BlackHeading from "../../../../components/subcomponents/BlackHeading";
import BlogSection from "../../../../components/subcomponents/BlogSection";
import GreenHeading from "../../../../components/subcomponents/GreenHeading";
import Sidebar from "../../../../components/subcomponents/Sidebar";
import FormSection1 from "../../../../components/subcomponents/FormSection1";
export default class HowtodecideyourMealKitMenu extends PureComponent {
  render() {
    return (
      <div>
        <Head>
          <title>HOW TO DECIDE YOUR MEAL KITS</title>
          <meta
            name="HOW TO DECIDE YOUR MEAL KITS"
            content="Restaurants already know what their customers love and appreciate. We all have that one dish we absolutely love from our favorite Restaurant for which we ache almost on a weekly basis and wish we could get our hands-on. So from a consumer’s perspective Restaurants already look set for the perfect Meal Kit menu. Now, all that a Restaurant have to do is to improvise"
          />{" "}
          <meta
            property="og:title"
            content="HOW TO DECIDE YOUR MEAL KITS"
            key="ogtitle"
          />
          <meta
            property="og:url"
            content="https://dailykit.org/start_a_mealKit_brand/meal-kit-guides/meal-kit-marketing-guides/how-to-decide-your-meal-kits"
          />
          <meta
            property="og:description"
            content="Restaurants already know what their customers love and appreciate. We all have that one dish we absolutely love from our favorite Restaurant for which we ache almost on a weekly basis and wish we could get our hands-on. So from a consumer’s perspective Restaurants already look set for the perfect Meal Kit menu. Now, all that a Restaurant have to do is to improvise"
            key="ogdesc"
          />
        </Head>

        <Navbar />
        <HowtodecideyourMealKitMenuComponent />
        <Footer />
      </div>
    );
  }
}

export class HowtodecideyourMealKitMenuComponent extends PureComponent {
  render() {
    return (
      <div>
        <FormSection1
          dataAccount="3161173:g2o5g2c3i8"
          dataForm="4175704:a4w7j9"
        />
        <div className="head">
          <GreenHeading text="How to prepare a" />
          <BlackHeading text="Meal Kit Menu" />
        </div>
        {/* <--first sidebar--> */}
        <Sidebar
          rest={[
            {
              sidebar_heading: "HOW TO PREPARE A MEAL KIT MENU",
              sidebar_link: [
                "Pick the most loved dish from your Menu",
                "Prepare your Recipe Inhouse",
                "Work with Recipe Providers",
              ],
              para_heading: "",
              para: [
                "We all know how much time it took for us to come up with the perfect Menu for our Restaurant. Some of us did it based on what we felt was the right Menu and the others did it taking opinions from people but we can all agree that it was a time-consuming process. ",
                "Now, will Restaurants have to do the same for a Meal Kit menu? Not quite actually. Here’s why.",
                "Restaurants already know what their customers love and appreciate. We all have that one dish we absolutely love from our favorite Restaurant for which we ache almost on a weekly basis and wish we could get our hands-on. So from a consumer’s perspective Restaurants already look set for the perfect Meal Kit menu. Now, all that a Restaurant have to do is to improvise. ",
                "Here are some tips on coming up with the right Meal Kit menu",
              ],
              para2: [
                {
                  para2_heading: "Pick the most loved dish from your Menu",
                  para2: [
                    "Restaurants already know which are those dishes which their customers love based on past Order History. They always make sure that these dishes are always given preference over the rest in the kitchen. ",
                    "To begin with, this strategy seems like the perfect one to start with. Just pick the most ordered dishes from your menu and turn them into Meal Kits. Restaurants now have a starting point for their first Meal Kit Menu.",
                  ],
                },
                {
                  para2_heading: "Prepare your Recipe Inhouse",
                  para2: [
                    "Restaurants are typically made of amazing chefs who make sure that every time you visit, you are treated to some great food. Chefs typically are always on the lookout for something new in their field of study and will have plenty of recipes they would love to whip up in the kitchen. ",
                    "Restaurants can work with their existing Chef and come up with a small list of dishes that their Chef can easily pack it into a Meal Kit. Going back to your Chef would be a perfect way to start working on that Meal Kit Menu",
                  ],
                },
                {
                  para2_heading: "Work with Recipe Providers",
                  para2: [
                    "Meal Kits is not a replacement for cooked food. Restaurants need to continue working on what they are good at and to do that, time is of the essence. There are plenty of Recipe Providers who would like to sell some of their Recipes for a small price.",
                    "If Restaurants would like to save time and not worry about recipes, they can work with Recipe providers for the perfect recipes that they feel compliments their menu. Some restaurants like to take this opportunity and experiment with other types of dishes like Healthy, Vegan or Gluten-free types of recipes just to open up another stream of consumers.",
                  ],
                },
                {
                  para2_heading: "Find your perfect recipe online",
                  para2: [
                    "Cooking has become a huge rage these days and with Meal Kits, it has become a topic of discussion among the youth. This has encouraged people to post different recipes online and videos on how they came up with it. ",
                    "Restaurants can find their perfect recipe on platforms like Youtube, All Recipes, Delish, Tasty..etc who make some amazing innovative dishes and post them on their platforms. Most of these recipes can be used for commercial purposes as well. So this is another time saver for Restaurants deciding their Meal Kit Menu.",
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
              image: "/assets/images/blogSection/image1",
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
