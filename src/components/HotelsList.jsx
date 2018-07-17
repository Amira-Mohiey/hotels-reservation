import React, { Component } from "react";

export default class HotelsList extends Component {
  componentWillReceiveProps(nextProps){
    this.setState({hotels:nextProps.hotels})
  }
  state = {
    hotels: this.props.hotels
  };
  renderCard = (hotel,index) => {
    return (
      <div className="card" key={index} style={{}}>
        <div className="card-body">
          <h4 className="card-title">{hotel.name}</h4>
          <p className="card-text">
            price : {Math.round(hotel.price * this.props.nights)} AED{" "}
          </p>
          <p className="card-text">city : {hotel.city} </p>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div className="card-columns">
        {this.state.hotels.hotels.map((hotel, index) => {
          return this.renderCard(hotel,index);
        })}
      </div>
    );
  }
}
