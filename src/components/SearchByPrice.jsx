import React, { Component } from "react";
export default class SearchByPrice extends Component {
  state = {
    rangeValue: Math.round(this.props.maxPrice()),
    min: Math.round(this.props.minPrice()),
    max: Math.round(this.props.maxPrice())
  };
  range = e => {
    this.setState({ rangeValue: e.target.value });
    this.props.search(e.target.value);
   
  };
  render() {
    return (
      <div className="price_search_div">
        <label>Price Filter</label>
        <input
          type="range"
          min={this.state.min}
          max={this.state.max}
          defaultValue={this.state.rangeValue}
          className="slider"
          id="myRange"
          onChange={this.range}
        />
        <p>
          <span /> from: {this.state.min} AED to: {this.state.rangeValue} AED
        </p>
      </div>
    );
  }
}
