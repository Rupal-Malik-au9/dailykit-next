import React, { PureComponent } from "react";
export default class VideoBanner extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  toggle() {
    this.setState(() => ({
      text: this.props.toggletextarr[Math.floor(Math.random() * (2 - 0 + 1))],
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.toggle(), 1000);
  }
  render() {
    return (
      <div className="image video-1">
        <video
          className="videoTag"
          autoPlay
          loop
          muted
          style={{ opacity: "0.1" }}
        >
          <source src="/assets/videos/home-video-3.mp4" type="video/mp4" />
        </video>
        <div className="header">
          <div className="heading-1">{this.props.heading1text}</div>
          <h2 className="nunito">{this.props.heading2text}</h2>
          <br />
          <h5>{this.props.subheadingtext}</h5>
          <br />
          <h4 id="yourElem" className="all-text">
            {this.state.text}
          </h4>
          <br />
          <br />
          <a href={this.props.whitebuttonlink}>
            <button type="button" className="btn-style-thirteen white">
              {this.props.whitebuttontext}
            </button>
          </a>
          &ensp;
          {/* <a href="/">
          <button type="button" className="btn-style-ten purple">
            {this.props.purplebuttontext}
          </button>
        </a>
        <br />
        <br />
  <div className="offer">{this.props.offertext}</div> */}
        </div>
      </div>
    );
  }
}
