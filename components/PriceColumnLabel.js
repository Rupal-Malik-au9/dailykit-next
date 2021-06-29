import React, { PureComponent } from "react";
export default class PriceColumnLabel extends PureComponent {
  render() {
    return (
      <div id="pricing-table" className="clear  priceColumnLabel  left">
        <div className="col-md-5 col-xs-10 plan text-align-left">
          <div style={{ marginTop: "17.8rem" }} />
          <ul>
            <h4>Online store</h4>
            {this.props.onlinestore.map((list) => {
              return <li key={list}> {list[0]}&nbsp;</li>;
            })}
          </ul>
        </div>
        <div className="plan">
          <ul>
            <h4>Features</h4>
            {this.props.features.map((list) => {
              return <li key={list}> {list[0]}&nbsp;</li>;
            })}
          </ul>
        </div>
        <div className="plan">
          <ul>
            <h4>Inventory</h4>
            {this.props.inventory.map((list) => {
              return <li key={list}> {list}&nbsp;</li>;
            })}
          </ul>
        </div>
        <div className="plan">
          <ul>
            <h4>Delivery</h4>
            {this.props.delivery.map((list) => {
              return <li key={list}> {list[0]}&nbsp;</li>;
            })}
          </ul>
        </div>
        <div className="plan">
          <ul>
            <h4>Order Management</h4>
            {this.props.orderManagement.map((list) => {
              return <li key={list}> {list[0]}&nbsp;</li>;
            })}
          </ul>
        </div>
        <div className="plan">
          <ul>
            <h4>Global Selling</h4>
            {this.props.globalSelling.map((list) => {
              return <li key={list}> {list[0]}&nbsp;</li>;
            })}
          </ul>
        </div>
        <div className="plan">
          <ul>
            <h4>Customization</h4>
            {this.props.customization.map((list) => {
              return <li key={list}> {list[0]}&nbsp;</li>;
            })}
          </ul>
        </div>
        <div className="plan">
          <ul>
            <h4>Editor App</h4>
            {this.props.editorApp.map((list) => {
              return <li key={list}> {list[0]}&nbsp;</li>;
            })}
          </ul>
        </div>
        <div className="plan">
          <ul>
            <h4>Content App</h4>
            {this.props.contentApp.map((list) => {
              return <li key={list}> {list[0]}&nbsp;</li>;
            })}
          </ul>
        </div>
        <div className="plan">
          <ul>
            {this.props.cartManagement.map((list) => {
              return (
                <li style={{ borderTop: "none" }} key={list}>
                  Cart Management
                </li>
              );
            })}
          </ul>
        </div>
        <div className="plan">
          <ul>
            {this.props.insights.map((list) => {
              return (
                <li style={{ borderTop: "none" }} key={list}>
                  Insights
                </li>
              );
            })}
          </ul>
        </div>
        <div className="plan">
          <ul>
            {this.props.support.map((list) => {
              return (
                <li style={{ borderTop: "none" }} key={list}>
                  Support
                </li>
              );
            })}
          </ul>
        </div>
        <div className="plan">
          <ul>
            <h4>Payment Gateway Integration</h4>
            {this.props.paymentGatewayIntegration.map((list) => {
              return <li key={list}> {list[0]}&nbsp;</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
