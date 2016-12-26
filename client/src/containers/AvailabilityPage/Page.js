import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { first, last } from 'lodash';

import AvailabilityList from '../AvailabilityPage/AvailabilityList';
import LocationHeader from '../AvailabilityPage/LocationHeader';
import Loading from '../../components/Loading';
import { LOCATIONS } from '../../const';

export class Page extends Component {
  renderAvailability() {
    return this.props.hasAvailability ?
      <AvailabilityList availability={this.props.availability} /> :
      <Loading />;
  }

  getDates() {
    return this.props.hasAvailability ?
      {
        start: first(this.props.availability)['date'],
        end: last(this.props.availability)['date']
      } :
      null;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3>London School of Barbering availability</h3>
        </div>
        <div className="row">
          <LocationHeader
            location={ LOCATIONS[this.props.location] }
            dates={ this.getDates() }
          />
        </div>
        <div className="row">
          { this.renderAvailability() }
        </div>
      </div>
    );
  }
}

Page.displayName = 'Page';

export default (observer(Page));
