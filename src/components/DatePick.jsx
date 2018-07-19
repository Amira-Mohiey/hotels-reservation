import React, { Component } from "react";

export default class DatePick extends Component {
  state = {
    from: null,
    to: null,
    error:this.props.error
  };
  componentWillReceiveProps(nextProps){
    this.setState({error:nextProps.error})
  }
  setDate = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  renderInputs = name => {
    var today = new Date().toISOString().split("T")[0];
    return (
      <div className="col-sm-5">
        <label>{name}:</label>
        <input
          type="date"
          className=" form-control "
          id={name}
          format="dd/MM/yyyy"
          onChange={this.setDate}
          min={today}
        />
      </div>
    );
  };
  renderButton() {
    return (
      <div className="col-sm-2">
        <button
          type="button"
          className="btn  btn-outline-info date_pick_button "
          onClick={() =>this.props.displayHotels(this.state.from, this.state.to)}
          disabled={!(this.state.from && this.state.to)}
        >
          <span>
            <i className="fa fa-search" />
          </span>
          Search
        </button>
      </div>
    );
  }
  render() {
    return (
      <div className="date_pick_container container-fluid">
        <div className="row">
          {this.renderInputs("from")}
          {this.renderInputs("to")}
          {this.renderButton()}
        </div>
       {this.state.error&& <div className="alert alert-danger error" >{this.props.error}</div>}
      </div>
    );
  }
}
