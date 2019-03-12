/** @format */
import React, { Component } from 'react';

class Launch extends Component {
  render() {
    return (
      <div className="card" style={{ width: '18rem' }}>
        <img src={this.props.imgUrl} className="card-img-top" alt={this.props.imgAlt} />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.details}</p>
          <a href={this.props.wikiLink} className="btn btn-primary">
            {this.props.name} Wiki Page
          </a>
        </div>
      </div>
    );
  }
}

export default Launch;
