import React, { PureComponent } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Head from "next/head";
import BlackHeading from "../../../components/subcomponents/BlackHeading";
import BlogSection from "../../../components/subcomponents/BlogSection";
import GreenHeading from "../../../components/subcomponents/GreenHeading";
import Sidebar from "../../../components/subcomponents/Sidebar";
import FormSection1 from "../../../components/subcomponents/FormSection1";
export default class Franchisees extends PureComponent {
  render() {
    return (
      <div>
        {" "}
        <Head>
          <title>Enterprise: Franchisees</title>
          <meta
            name="WHY SHOULD FRANCHISEES START MEAL KITS?"
            content="How do you stand out from the competition? How do you increase profitability and increase your offering? How do you add new franchisees? Dailykit will address all the challenges presented above. Discard Competition. Achieve Sustainable Operations. Explore New Revenue Streams. Expand your customers base.
            "
          />
          <meta
            property="og:title"
            content="WHY SHOULD FRANCHISEES START MEAL KITS?"
            key="ogtitle"
          />
          <meta
            property="og:url"
            content="https://dailykit.org/start_a_mealKit_brand/enterprise/how-dailykit-can-help-franchisees"
          />
          <meta
            property="og:description"
            content="How do you stand out from the competition? How do you increase profitability and increase your offering? How do you add new franchisees? Dailykit will address all the challenges presented above. Discard Competition. Achieve Sustainable Operations. Explore New Revenue Streams. Expand your customers base."
            key="ogdesc"
          />
        </Head>
        <Navbar />
        <FranchiseesComponent />
        <Footer />
      </div>
    );
  }
}

export class FranchiseesComponent extends PureComponent {
  render() {
    return (
      <div>
        <FormSection1
          dataAccount="3161173:g2o5g2c3i8"
          dataForm="4175704:a4w7j9"
        />
        <div className="head">
          <GreenHeading text="Why Franchisees businesses" />
          <BlackHeading text="Should add Meal kit to their repertoire" />
        </div>
        {/* <--first sidebar--> */}
        <Sidebar
          rest={[
            {
              sidebar_heading: "WHY SHOULD FRANCHISEES START MEAL KITS?",
              sidebar_link: [
                "How do you stand out from the competition?",
                "How do you increase profitability and increase your offering?",
                "How do you add new franchisees?",
                "Adding Meal kits to your business address all the challenges presented above",
                "Increased Virality - Save thousands of dollars on marketing to a deaf market",
                "Improved Profit Margin - All that matters is this right?",
                "Flexible Meal Kit offering - Using inventory from existing menu",
              ],
              para_heading: "",
              para: [
                "If you have a franchisee business, we understand how challenging it is to build one.",
                "To manage multi-store establishment , It takes real entrepreneurial skills and we respect that. I’m sure you would be aware of the cliched statement “the only constant in business is change”. Despite however cliche the statement be, it doesn’t make it irrelevant, and especially in a time like this.",
              ],
              para2: [
                {
                  para2_heading: "How do you stand out from the competition?",
                  para2: [
                    "Subway had to shut down 1000s of their stores in last few years. Well, problem isn't with subway rather the new businesses opening. Despite the size of QSR, the effects of competition can be seen by decreasing average revenue per customer (ARPC) and increasing consumer acquisition cost (CAC).",
                  ],
                },
                {
                  para2_heading:
                    "How do you increase profitability and increase your offering?",
                  para2: [
                    "In the age, where everyday a new concept is coming, it becomes pertinent to be innovative. Often your kitchen space is optimized to a certain cooking processes so adding a new item in menu, requires extensive training and may even add a new hardware.",
                  ],
                },
                {
                  para2_heading: "How do you add new franchisees?",
                  para2: [
                    "Franchisee industry is saturated with ideas and selling a new franchisee has become one of the most difficult business to be in.",
                  ],
                },
                {
                  para2_heading:
                    "Adding Meal kits to your business address all the challenges presented above",
                  para2: [
                    "Offering meal kits adds a highly lucrative revenue bringing grocery shoppers to QSR's to shop for their favorite QSR Recipe using their Meal Kit and fix a quick home-cooked meal.",
                  ],
                },
                {
                  para2_heading:
                    "Increased Virality - Save thousands of dollars on marketing to a deaf market",
                  para2: [
                    "Despite however convenient restaurant offerings are, the groceries have always lead the way for everyday meal consumptions.",
                    "These mass pockets of unaddressed audience only cook at home. But with Meal Kits, they now have a reason to step inside your store or visit your website and get your meal kits",
                  ],
                },
                {
                  para2_heading:
                    "Improved Profit Margin - All that matters is this right?",
                  para2: [
                    "Meal kits are cheaper to produce than a ready to eat product because of inexpensive labour which can be done by mis-en-plas staff instead of trained cooks and chefs.",
                  ],
                },
                {
                  para2_heading:
                    "Flexible Meal Kit offering - Using inventory from existing menu",
                  para2: [
                    "Different permutation and combination allows to add many Restricted Space which are challenging to offer as a ready to eat product but very simple to add in meal kit menu.",
                    "It's not surprising to know that Chick-fil A, one of the fastest growing QSR chains started their meal kit offering in 150 of their stores in partnership with Tyson.",
                    "Dailykit platform is the only solution in the market that allows any multi-store business to start their meal kit pilot and gauge their performance for the big launch.",
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
                "Restricted Space",
                "Existing Softwares",
                "Employee Training",
                "Devising Menu",
              ],
              para_heading: "",
              para: [
                "We understand that the decision to start with meal kits may look difficult, and it’s not your fault.",
                "Chick-Fil-A, the leading franchisee business made the decision to do meal kits which received tremendous response but strained their business with added complexities of running a meal kit production facility and maintaining distribution to individual stores to be kept on the shelf.",
                "Every franchisee should have a strategy towards meal kit industry, and we at dailykit, help you start with this initiative, one step at a time.",
                "In our research, we identified the following challenges you can face and designed our solution to overcome these with absolute ease.",
              ],
              para2: [
                {
                  para2_heading: "Restricted Space",
                  para2: [
                    "We know how ergonomically these kitchens are planned, so we have devised plug and play packaging solutions that reduce the footprint required to be under 4-10 sq ft.",
                  ],
                },
                {
                  para2_heading: "Existing Softwares",
                  para2: [
                    "Huge amount of money must be spent by your organization to serve as technology backbone of your operations. Our open source software can be integrated with your system without breaking a sweat.",
                  ],
                },
                {
                  para2_heading: "Employee Training",
                  para2: [
                    "Your employees are trained to execute the current tasks and it is a challenge to introduce new processes but with Dailykit’s intelligent software, we make the process idiot-proof.",
                    "Not only do our tools have in-built training with analytics so you can gauge performances and work on their precise skills",
                  ],
                },
                {
                  para2_heading: "Devising Menu",
                  para2: [
                    "Inventory is heart of restaurant operations. To start with, you recommend to add recipes that uses current inventory. Our recipe marketplace can be used to partner with celebrities and influencers so you gain instant growth.",
                    "As we said before, meal kit can be a huge opportunity and can boost your revenue to 30-50%. Not only that, with increased efficiencies, your low profit margin improves.",
                    "We recommend you to start with meal kit business in one of your locations and run it as pilot. Using performance and reviews from there, you should pivot to newer locations. Either at pilot, or when you are at 10,000 stores, we’ll be there with our help at any scale you are.",
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
