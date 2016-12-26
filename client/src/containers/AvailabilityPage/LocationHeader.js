import React, { Component } from 'react';
import moment from 'moment';

export default class LocationHeader extends Component {
  getStartDate(dates) {
    return dates ?
    (<div><strong>From </strong>{ moment(dates.start).format('dddd, MMMM Do YYYY') }</div>) :
    (<div><strong>From </strong>-</div>);
  }

  getEndDate(dates) {
    return dates ?
    (<div><strong>to </strong>{ moment(dates.end).format('dddd, MMMM Do YYYY') }</div>) :
    (<div><strong>to </strong>-</div>);
  }

  render() {
    const { location, service, dates } = this.props;
    return (
      <div>
        <div><strong>Location </strong>{ location }</div>
        <div><strong>Service </strong>{ service }</div>
        { this.getStartDate(dates) }
        { this.getEndDate(dates) }
      </div>
    );
  }
}

LocationHeader.displayName = 'LocationHeader';
