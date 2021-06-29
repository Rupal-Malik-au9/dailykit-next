import React, { PureComponent } from "react";
import ContactFormSection2 from "../shared/ContactFormSection2";
import Image from "next/image";
export default class SpecialBanner4 extends PureComponent {
  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            opacity: "0.3",
            flexWrap: "wrap",
          }}
        >
          <Image
            width="200px"
            height="200px"
            src={this.props.image1}
            alt="..."
          />
          <Image
            width="200px"
            height="200px"
            src={this.props.image2}
            alt="..."
          />
          <Image
            width="200px"
            height="200px"
            src={this.props.image3}
            alt="..."
          />
          <Image
            width="200px"
            height="200px"
            src={this.props.image4}
            alt="..."
            width="200px"
          />{" "}
          <Image
            width="200px"
            height="200px"
            src={this.props.image5}
            alt="..."
          />
        </div>{" "}
        <button
          type="button"
          className="btn-style-thirteen green"
          style={{ margin: "1rem 25% 1rem 30%" }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          TELL ME MORE
        </button>
        <ContactFormSection2
          dataAccount={this.props.dataAccount}
          dataForm={this.props.dataForm}
        />
      </>
    );
  }
}
