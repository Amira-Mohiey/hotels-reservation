import React, { Component } from "react";

export default class SearchByName extends Component {
  state = {
    name: ""
  };
  setName = event => {
    event.target.value
      ? this.setState({ name: event.target.value })
      : this.props.reset("name");
  };
  search = () => {
    this.props.search(this.state.name);
  };
  render() {
    return (
      <div className="input-group search_div">
        <input
          className="form-control search_input"
          type="search"
          placeholder="Hotel Name"
          id="search-input"
          onChange={this.setName}
        />
        <span className="input-group-append">
          <button
            className="btn btn-outline-secondary search_button"
            type="button"
            onClick={this.search}
          >
            <i className="fa fa-search" />
          </button>
        </span>
      </div>
    );
  }
}
