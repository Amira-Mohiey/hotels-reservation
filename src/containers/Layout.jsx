import React, { Component } from "react";
import { getHotels } from "../services/api";
import DatePick from "../components/DatePick";
import HotelsList from "../components/HotelsList";
import Sort from "../components/Sort";
import SearchByName from "../components/SearchByName";
import SearchByPrice from "../components/SearchByPrice";
import { calculateNights, getAvailableHotels } from "../utils/date";
import { sortByName, sortByPrice } from "../utils/sort";
import {
  getMinPrice,
  getMaxPrice,
  searchByName,
  searchByPrice
} from "../utils/search";
export default class Layout extends Component {
  state = {
    allHotels: null,
    availableHotels: null,
    resetAvaialableHotels: null,
    nights: null,
    dateFlag: true,
    error: null
  };
  componentDidMount() {
    getHotels().then(allHotels => {
      this.setState({ allHotels });
    });
  }
  getAvailableHotels = (from, to) => {
    var availableHotels = getAvailableHotels(
      from,
      to,
      this.state.allHotels.hotels
    );
    if (availableHotels.hotels.length) {
      this.setState({
        availableHotels,
        resetAvaialableHotels: availableHotels,
        dateFlag: false
      });
    } else {
      this.setState({ error: "No Hotels available, Try Another date" });
    }
  };
  sortName = () => {
    var availableHotels = sortByName(this.state.availableHotels);
    this.setState({ availableHotels });
  };
  sortPrice = () => {
    var availableHotels = sortByPrice(this.state.availableHotels);
    this.setState({ availableHotels });
  };
  reset = () => {
    this.setState({ availableHotels: this.state.resetAvaialableHotels });
  };
  displayHotels = (from, to) => {
    var result = calculateNights(from, to);
    if (!result.error) {
      this.setState({ nights: result.nights });
      this.getAvailableHotels(from, to);
    } else {
      this.setState({ error: "invalid date entry" });
    }
  };
  getMinPrice = () => {
    return getMinPrice(this.state.availableHotels, this.state.nights);
  };
  getMaxPrice = () => {
    return getMaxPrice(this.state.availableHotels, this.state.nights);
  };
  searchByName = text => {
    var availableHotels = searchByName(text, this.state.availableHotels);

    availableHotels
      ? this.setState({ availableHotels })
      : this.setState({ error: "Hotel Name Does Not match " });
  };
  searchByPrice = price => {
    var availableHotels = searchByPrice(
      price,
      this.state.resetAvaialableHotels,
      this.state.nights
    );
    this.setState({ availableHotels });
  };
  changeDate = () => {
    this.setState({ dateFlag: true });
  };
  renderDatePicker() {
    return (
      <DatePick displayHotels={this.displayHotels} error={this.state.error} />
    );
  }
  renderSearch() {
    return (
      <div className="col-sm-3">
        <SearchByName search={this.searchByName} reset={this.reset} />
        <SearchByPrice
          reset={this.reset}
          minPrice={this.getMinPrice}
          maxPrice={this.getMaxPrice}
          search={this.searchByPrice}
        />
        <button
          type="button"
          className="btn btn-link"
          onClick={this.changeDate}
        >
          Choose Another Date
        </button>
      </div>
    );
  }
  renderSort() {
    return (
      <Sort
        nights={this.state.nights}
        sortByName={this.sortName}
        sortByPrice={this.sortPrice}
      />
    );
  }
  renderHotels() {
    return (
      <HotelsList
        hotels={this.state.availableHotels}
        nights={this.state.nights}
      />
    );
  }
  render() {
    return (
      <div className="container main">
        {this.state.dateFlag &&this.state.allHotels&& this.renderDatePicker()}
        {!this.state.dateFlag && (
          <div className="row cont">
            {this.renderSearch()}
            <div className="col-sm-9">
              {this.state.availableHotels && (
                <div>
                  {this.renderSort()}
                  {this.renderHotels()}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}
