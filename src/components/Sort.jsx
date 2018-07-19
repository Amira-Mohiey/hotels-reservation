import React, { Component } from "react";

export default class Sort extends Component {
  render() {
    return (
      <div className="sort_div">
        <div className="nights_div">
          <span className="nights_span">Total Nights: {this.props.nights}</span>
        </div>
        <button
          type="button"
          className="btn btn-outline-info sort_button"
          id="name-sort"
          onClick={this.props.sortByName}

        >
          Sort by Name
        </button>
        <button
          type="button"
          id="price-sort"
          className="btn btn-outline-info sort_button"
          onClick={this.props.sortByPrice}
        >
          Sort by Price
        </button>
      </div>
    );
  }
}
