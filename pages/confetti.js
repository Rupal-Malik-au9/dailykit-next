import React from 'react'
import Confetti from 'react-dom-confetti';
export default class confetti extends React.Component {
    constructor(props) {
        super(props);
        this.state = {someProp: true};
      }
handleClick=()=>{
    this.setState({someProp: !this.state.someProp});
      }
    
  render() {  
    const   config = {
        angle: 90,
        spread: 360,
        startVelocity: 40,
        elementCount: 70,
        dragFriction: 0.12,
        duration: 3000,
        stagger: 3,
        width: "10px",
        height: "10px",
        perspective: "500px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
      };
    return (<>
    <h2>Confetti</h2>
        <Confetti  active={this.state.someProp} config={ config }/>
    <button onClick={this.handleClick()}>hello</button>
    </>
    )
}
}
