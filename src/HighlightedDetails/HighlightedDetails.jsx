import React from "react";
import "./HighlightedDetails.css";

// export function HighLightedDetailsComponent() {
//   return (
//     <div className="my-section">
//       <div className="my-title">License</div>
//       <div className="my-value">MIT</div>
//     </div>
//   );
// }

export class HighLightedDetailsComponent extends React.Component {
  constructor() {
    super();
    //this.city = "Mumbai";
    this.name = "Amit";
    this.state = { city: "Mumbai" };
  }

  handleOnKeyUp(event) {
    console.log("this", this);
    console.log("event", event.target.value);
    // this.city = event.target.value;
    //this.state.city = event.target.value;
    this.setState({ city: event.target.value });
  }

  display() {
    console.log("disaplay", this);
  }

  // handleOnKeydDown(event) {
  //   if (event.target.value === "Pune") event.preventDefualt();
  // }
  render() {
    console.log("render method called...");
    return (
      <div className="my-section">
        <div className="my-title">License 2</div>
        <div className="my-value">MIT</div>
        <div>City:{this.state.city}</div>
        {/* <input onKeyUp={this.handleOnKeyUp.bind(this)} /> */}
        <input
          onKeyUp={(e) => {
            this.handleOnKeyUp(e);
          }}
        />
        {/* <input onKeyDown={this.handleOnKeydDown} /> */}
        {this.display()}
      </div>
    );
  }
}

// var s = new HighLightedDetailsComponent();
