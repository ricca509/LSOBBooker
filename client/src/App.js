import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { first, last } from 'lodash';

import AvailabilityList from './containers/AvailabilityPage/AvailabilityList';
import LocationHeader from './containers/AvailabilityPage/LocationHeader';
import Loading from './components/Loading';
import { LOCATIONS } from './const';

const fetchData = async () => {
  const res = await fetch('/api/availability');
  const json = await res.json();

  return json;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: 4,
      eventId: 68,
      availability: []
    }
  }

  async componentDidMount() {
    const json = await fetchData();
    this.setState({
      availability: json
    });
  }

  renderAvailability() {
    return this.state.availability.length ?
      <AvailabilityList {...this.state} /> :
      <Loading />;
  }

  getDates() {
    if (this.state.availability.length) {
      return {
        start: first(this.state.availability)['date'],
        end: last(this.state.availability)['date']
      }
    }

    return null;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3>London School of Barbering availability</h3>
        </div>
        <div className="row">
          <LocationHeader
            location={LOCATIONS[this.state.location]}
            dates={this.getDates()}
          />
        </div>
        <div className="row">
          { this.renderAvailability() }
        </div>
      </div>
    );
  }
}

export default App;
