/** @format */
import React, { Component } from 'react';

import Launch from './launch';

class Launches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launches: [],
    };
  }

  async componentDidMount() {
    const launches = await fetch(`https://api.spacexdata.com/v2/launches`);
    const json = await launches.json()
    this.setState({launches: json});
  }

  render() {
    const launchList = this.state.launches.map(l => {
      return (
        <div key={l.flight_number}>
          <Launch 
          name={l.mission_name}
          imgUrl={l.links.flickr_images.length > 0 ? l.links.flickr_images[0]: ''}
          imgAlt={l.mission_name}
          details={l.details}
          wikiLink={l.links.wikipedia}
          />
        </div>
      );
    });
    return (<div className="card-deck">{launchList}</div>);
  }
}

export default Launches;
