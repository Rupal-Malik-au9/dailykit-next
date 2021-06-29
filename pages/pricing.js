import React, { PureComponent } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PriceColumn from "../components/PriceColumn";
import PriceColumnLabel from "../components/PriceColumnLabel";
import PriceBanner1 from "../components/PriceBanner1";
import PriceHeading from "../components/PriceHeading";
export default class pricepage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Head>
          <title>Pricing</title>
          <meta
            name="Restaurants, Cloud Kitchens, Super Markets, Enterprise - One Stop Solution"
            content="Dailykit is a one stop shop for Restaurants, Cloud Kitchens, Franchisees, Super Markets, Food Startups or even Large Enterprises. Optimize Kitchen Workflows. Explore Multiple New Sales Channels. Never before seen scalability as Dailykit Scales as you Scale. "
          />
          <meta
            property="og:title"
            content="Restaurants, Cloud Kitchens, Super Markets, Enterprise - One Stop Solution"
            key="ogtitle"
          />
          <meta property="og:url" content="https://dailykit.org/we_serve" />
          <meta
            property="og:description"
            content="Dailykit is a one stop shop for Restaurants, Cloud Kitchens, Franchisees, Super Markets, Food Startups or even Large Enterprises. Optimize Kitchen Workflows. Explore Multiple New Sales Channels. Never before seen scalability as Dailykit Scales as you Scale. "
            key="ogdesc"
          />
        </Head>

        <Navbar />
        <PriceBanner1 />
        <PriceHeading heading={"Best pricing"} />
        <div className="container">
          <div className="row ">
            <div className="col-md-3 col-xs-10">
              <PriceColumnLabel
                onlinestore={[
                  ["onDemandStore"],
                  ["Subscription Store"],
                  ["Auto Select Menu "],
                  ["Ecommerce"],
                  ["Meal Kit Specific Store capabilities"],
                  ["Upsell & Cross Sell"],
                  ["Build your own meal"],
                  ["SEO Optimization"],
                ]}
                features={[
                  ["Unlimited products"],
                  [
                    "Staff accounts: Staff members with access to the admin and POS.",
                  ],
                  ["24/7 support"],
                  [
                    "Locations:Assign inventory to stores, warehouses,pop-ups, or wherever you store products",
                    "✖",
                  ],
                  ["Manual order creation"],
                  ["Discount codes"],
                  ["SSL certificate"],
                  ["Abandoned cart recovery"],
                  ["Referral Programs"],
                  [" Wallet"],
                  ["Professional reports"],
                  [
                    "Third-party calculated shipping rates: Show calculated rates with your own account or third-party apps at checkout.",
                    "Basic",
                  ],
                  ["Menu Engineeing"],
                  ["Weighing Scale Integration, KOT, Print Routing"],
                  ["Multi Locations Support"],
                  ["Recipe Management"],
                  ["Station Management"],
                  ["Standard Kitchen Operating Procedures"],
                  ["Meal Kit Management (New)"],
                  ["Campaign Management"],
                  ["Multi Brand / Ghost Kitchens"],
                ]}

                inventory={[
                  ["Supplier Management"],
                  ["Purchase Orders"],
                  ["Work Orders"],
                  ["Packaging Management"],
                  ["Item Management"],
                ]}
                delivery={[
                  ["Print shipping labels"],
                  ["Postmastes Integration"],
                  ["3rd party delivery support"],
                  ["Order based delivery routing to delivery partners"],
                  ["3rd Party Food Aggregator Support"],
                  ["Live Delivery Tracking"],
                  ["Multiple Delivery Partner Integration"],
                  ["Auto Delivery"],
                ]}
                orderManagement={[
                  ["Real time order tracking"],
                  ["Reject an Order"],
                  ["Weighing Scale Integration, KOT, Print Routing"],
                  ["Station Management"],
                ]}
                globalSelling={[
                  ["Sell in multiple languages"],
                  ["Multi Currency"],
                ]}
                customization={[["Support Custom Requests"]]}
                editorApp={[["Online Store Creation"], ["Multiple Themes"]]}
                contentApp={[
                  ["Page Management"],
                  ["Manage Subscription Store Content"],
                ]}
                cartManagement={[["✖"]]}
                insights={[["✖"]]}
                support={[["Basic"]]}
                paymentGatewayIntegration={[
                  ["Stripe"],
                  ["Custom"],
                  ["Transaction Fees"],
                ]}
              />
            </div>
            <div className="col-md-3 col-xs-10">
              <PriceColumn
                dataAccount="3161173:g2o5g2c3i8"
                dataForm={"4175704:a4w7j9"}
                planName="Standard"
                price="29"
                onlinestore={[
                  ["onDemandStore", "✔"],
                  ["Subscription Store", "$10/Month Addon"],
                  ["Auto Select Menu", "Applicable on Subscription AddOn"],
                  ["Ecommerce", "✔"],
                  ["Meal Kit Specific Store capabilities", "✔"],
                  ["Upsell & Cross Sell", "✔"],
                  ["Build your own meal", "✔"],
                  ["SEO Optimization", "✔"],
                ]}
                features={[
                  ["Unlimited products", "✔"],
                  [
                    "Staff accounts: Staff members with access to the admin and POS.",
                    "2",
                  ],
                  ["24/7 support", "✖"],
                  [
                    "Locations:Assign inventory to stores, warehouses,pop-ups, or wherever you store products",
                    "✖",
                  ],
                  ["Manual order creation", "✖"],
                  ["Discount codes", "✔"],
                  ["SSL certificate", "✔"],
                  ["Abandoned cart recovery", "✔"],
                  ["Referral Programs", "✔"],
                  [" Wallet", "✔"],
                  ["Professional reports", "✖"],
                  [
                    "Third-party calculated shipping rates: Show calculated rates with your own account or third-party apps at checkout.",
                    "✖",
                  ],
                  ["Menu Engineeing", "Basic"],
                  ["Weighing Scale Integration, KOT, Print Routing", "✖"],
                  ["Multi Locations Support", "✔"],
                  ["Recipe Management", "✔"],
                  ["Station Management", "✔"],
                  ["Standard Kitchen Operating Procedures", "✖"],
                  ["Meal Kit Management (New)", "✖"],
                  ["Campaign Management", "Basic Rules"],
                  ["Multi Brand / Ghost Kitchens", "Upto 2 Brands"],
                ]}
                inventoryOffer="Available at $49 Addon"
                inventory=
                {[
                  ["Supplier Management", "Available with Inventory Add On"],
                  ["Purchase Orders", "Available with Inventory Add On"],
                  ["Work Orders", "Available with Inventory Add On"],
                  ["Packaging Management", "Available with Inventory Add On"],
                  ["Item Management", "Available with Inventory Add On"],
                ]}
                delivery={[
                  ["Print shipping labels", "✔"],
                  ["Postmastes Integration", "✔"],
                  ["3rd party delivery support", "✔"],
                  ["Order based delivery routing to delivery partners", "✔"],
                  ["3rd Party Food Aggregator Support", "✔"],
                  ["Live Delivery Tracking", "✔"],
                  ["Multiple Delivery Partner Integration", "✖"],
                  ["Auto Delivery", "✖"],
                ]}
                orderManagement={[
                  ["Real time order tracking", "✔"],
                  ["Reject an Order", "✔"],
                  ["Weighing Scale Integration, KOT, Print Routing", "✖"],
                  ["Station Management", "✔"],
                ]}
                globalSelling={[
                  ["Sell in multiple languages", "✔"],
                  ["Multi Currency", "✖"],
                ]}
                customization={[["Support Custom Requests", "✖"]]}
                editorApp={[
                  ["Online Store Creation", "Basic"],
                  ["Multiple Themes", "✖"],
                ]}
                contentApp={[
                  ["Page Management", "✖"],
                  ["Manage Subscription Store Content", "✖"],
                ]}
                cartManagement={[["✖"]]}
                insights={[["✖"]]}
                support={[["Basic"]]}
                paymentGatewayIntegration={[
                  ["Stripe", "✔"],
                  ["Custom", "✖"],
                  ["Transaction Fees", "2%"],
                ]}
              />
            </div>
            <div className="col-md-3 col-xs-10">
              <PriceColumn
                recommended
                dataAccount="3161173:g2o5g2c3i8"
                dataForm={"4175704:a4w7j9"}
                planName="Premium"
                price="79"
                onlinestore={[
                  ["onDemandStore", "✔"],
                  ["Subscription Store", "Included"],
                  ["Auto Select Menu", "Included"],
                  ["Ecommerce", "✔"],
                  ["Meal Kit Specific Store capabilities", "✔"],
                  ["Upsell & Cross Sell", "✔"],
                  ["Build your own meal", "✔"],
                  ["SEO Optimization", "✔"],
                ]}
                features={[
                  ["Unlimited products", "✔"],
                  [
                    "Staff accounts: Staff members with access to the admin and POS.",
                    "5",
                  ],
                  ["24/7 support", "✔"],
                  [
                    "Locations:Assign inventory to stores, warehouses,pop-ups, or wherever you store products",
                    "✔",
                  ],
                  ["Manual order creation", "✔"],
                  ["Discount codes", "✔"],
                  ["SSL certificate", "✔"],
                  ["Abandoned cart recovery", "✔"],
                  ["Referral Programs", "✔"],
                  [" Wallet", "✔"],
                  ["Professional reports", "✔"],
                  [
                    "Third-party calculated shipping rates: Show calculated rates with your own account or third-party apps at checkout.",
                    "✖",
                  ],
                  ["Menu Engineeing", "Advanced"],
                  ["Weighing Scale Integration, KOT, Print Routing", "✔"],
                  ["Multi Locations Support", "✔"],
                  ["Recipe Management", "✔"],
                  ["Station Management", "✔"],
                  ["Standard Kitchen Operating Procedures", "✔"],

                  ["Meal Kit Management (New)", "✔"],
                  ["Campaign Management", "Advanced Rules"],
                  ["Multi Brand / Ghost Kitchens", "Upto 5 brands"],
                ]}
                inventoryOffer="Available at $49 Addon"
                inventory=

                {[
                  ["Supplier Management", "Available with Inventory Add On"],
                  ["Purchase Orders", "Available with Inventory Add On"],
                  ["Work Orders", "Available with Inventory Add On"],
                  ["Packaging Management", "Available with Inventory Add On"],
                  ["Item Management", "Available with Inventory Add On"],
                ]}
                delivery={[
                  ["Print shipping labels", "✔"],
                  ["Postmastes Integration", "✔"],
                  ["3rd party delivery support", "✔"],
                  ["Order based delivery routing to delivery partners", "✔"],
                  ["3rd Party Food Aggregator Support", "✔"],
                  ["Live Delivery Tracking", "✔"],
                  ["Multiple Delivery Partner Integration", "✔"],
                  ["Auto Delivery", "✖"],
                ]}
                orderManagement={[
                  ["Real time order tracking", "✔"],
                  ["Reject an Order", "✔"],
                  ["Weighing Scale Integration, KOT, Print Routing", "✔"],
                  ["Station Management", "✔"],
                ]}
                globalSelling={[
                  ["Sell in multiple languages", "✔"],
                  ["Multi Currency", "✖"],
                ]}
                customization={[["Support Custom Requests", "✖"]]}
                editorApp={[
                  ["Online Store Creation", "Basic"],
                  ["Multiple Themes", "upto 5"],
                ]}
                contentApp={[
                  ["Page Management", "✔"],
                  ["Manage Subscription Store Content", "✔"],
                ]}
                cartManagement={[["✔"]]}
                insights={[["Basic"]]}
                support={[["24/7"]]}
                paymentGatewayIntegration={[
                  ["Stripe", "✔"],
                  ["Custom", "✖"],
                  ["Transaction Fees", "1.50%"],
                ]}
              />
            </div>
            <div className="col-md-3 col-xs-10">
              {" "}
              <PriceColumn
                dataAccount="3161173:g2o5g2c3i8"
                dataForm={"4175704:a4w7j9"}
                planName="Professional"
                price="449"
                onlinestore={[
                  ["onDemandStore", "✔"],
                  ["Subscription Store", "Included"],
                  ["Auto Select Menu", "Included"],
                  ["Ecommerce", "✔"],
                  ["Meal Kit Specific Store capabilities", "✔"],
                  ["Upsell & Cross Sell", "✔"],
                  ["Build your own meal", "✔"],
                  ["SEO Optimization", "✔"],
                ]}
                features={[
                  ["Unlimited products", "✔"],
                  [
                    "Staff accounts: Staff members with access to the admin and POS.",
                    "Unlimited",
                  ],
                  ["24/7 support", "✔"],
                  [
                    "Locations:Assign inventory to stores, warehouses,pop-ups, or wherever you store products",
                    "✔",
                  ],
                  ["Manual order creation", "✔"],
                  ["Discount codes", "✔"],
                  ["SSL certificate", "✔"],
                  ["Abandoned cart recovery", "✔"],
                  ["Referral Programs", "✔"],
                  [" Wallet", "✔"],
                  ["Professional reports", "✔"],
                  [
                    "Third-party calculated shipping rates: Show calculated rates with your own account or third-party apps at checkout.",
                    "✔",
                  ],
                  ["Menu Engineeing", "Complete Control"],
                  ["Weighing Scale Integration, KOT, Print Routing", "✔"],
                  ["Multi Locations Support", "✔"],
                  ["Recipe Management", "✔"],
                  ["Station Management", "✔"],
                  ["Standard Kitchen Operating Procedures", "✔"],
                  ["Meal Kit Management (New)", "✔"],
                  ["Campaign Management", "Advanced Rules"],
                  ["Multi Brand / Ghost Kitchens", "Unlimited"],
                ]}
                inventoryOffer="Included"
                inventory={[
                  ["Supplier Management", "Included"],
                  ["Purchase Orders", "Included"],
                  ["Work Orders", "Included"],
                  ["Packaging Management", "Included"],
                  ["Item Management", "Included"],
                ]}
                delivery={[
                  ["Print shipping labels", "✔"],
                  ["Postmastes Integration", "✔"],
                  ["3rd party delivery support", "✔"],
                  ["Order based delivery routing to delivery partners", "✔"],
                  ["3rd Party Food Aggregator Support", "✔"],
                  ["Live Delivery Tracking", "✔"],
                  ["Multiple Delivery Partner Integration", "✔"],
                  ["Auto Delivery", "✔"],
                ]}
                orderManagement={[
                  ["Real time order tracking", "✔"],
                  ["Reject an Order", "✔"],
                  ["Weighing Scale Integration, KOT, Print Routing", "✔"],
                  ["Station Management", "✔"],
                ]}
                globalSelling={[
                  ["Sell in multiple languages", "✔"],
                  ["Multi Currency", "✔"],
                ]}
                customization={[["Support Custom Requests", "✔"]]}
                editorApp={[
                  ["Online Store Creation", "Advanced"],
                  ["Multiple Themes", "Multiple"],
                ]}
                contentApp={[
                  ["Page Management", "✔"],
                  ["Manage Subscription Store Content", "✔"],
                ]}
                cartManagement={[["✔"]]}
                insights={[["Advanced"]]}
                support={[["24/7"]]}
                paymentGatewayIntegration={[
                  ["Stripe", "✔"],
                  ["Custom", "✔"],
                  ["Transaction Fees", "1%"],
                ]}
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
