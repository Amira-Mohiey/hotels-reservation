import React, { Component } from "react";
import { getHotels } from "../services/api";
import DatePick from "../components/DatePick";
import HotelsList from "../components/HotelsList";
import Sort from "../components/Sort";
import SearchByName from "../components/SearchByName";
import SearchByPrice from "../components/SearchByPrice";
import { calculateNights, getAvailableHotels } from "../utils/date";
import { sortByName, sortByPrice } from "../utils/sort";
import { getMinPrice, getMaxPrice, search } from "../utils/search";
export default class Layout extends Component {
  state = {
    allHotels: null,
    availableHotels: null,
    resetAvaialableHotels: null,
    nights: null,
    dateFlag: true,
    error: null,
    filters: { name: null, price: null },
    sort: null
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
    this.setState({ availableHotels, sort: "name" });
  };
  sortPrice = () => {
    var availableHotels = sortByPrice(this.state.availableHotels);
    this.setState({ availableHotels, sort: "price" });
  };
  reset = filter => {
    const filters = this.state.filters;
    filters[filter] = null;
    this.setState({availableHotels:this.state.resetAvaialableHotels,filters})
    this.search()
  
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
  searchByName = name => {
    const filters = this.state.filters;
    filters.name = name;
    this.setState({ filters }, this.search());
  };
  searchByPrice = price => {
    const filters = this.state.filters;
    filters.price = price;
    filters.nights = this.state.nights;

    this.setState({ filters }, this.search());
  };
  changeDate = () => {
    this.setState({ dateFlag: true });
  };
  renderDatePicker() {
    return (
      <DatePick displayHotels={this.displayHotels} error={this.state.error} />
    );
  }
  checkSort=(availableHotels)=>{
   
    if (this.state.sort === "name") {
      this.sortName()
    } else if (this.state.sort === "price") {
      this.sortPrice();
    }
  }
  search = () => {
   
    var availableHotels = search(
      this.state.filters,
      this.state.resetAvaialableHotels
    );
   
    this.setState({availableHotels },()=>this.checkSort(availableHotels))

  };
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
        {this.state.dateFlag && this.state.allHotels && this.renderDatePicker()}
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
              <div>
              
                {!this.state.availableHotels.hotels.length && (
                  <p>No Match Found</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
