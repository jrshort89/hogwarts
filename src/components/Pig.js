import Details from "./Details";
import React, { Component } from "react";

export default class Pig extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }

  clickHandler() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }

  render() {
    const details = (
      <Details
        key={this.props.key}
        name={this.props.name}
        specialty={this.props.specialty}
        greased={this.props.greased}
        weight={this.props.weight}
        medal={this.props.medal}
      />
    );

    return (
      <div className="ui card" onClick={() => this.clickHandler()}>
        <div className="image pigTile">
          <img src={this.props.image} alt={`${this.props.name} pig`} />
        </div>
        {this.state.clicked ? details : null}
      </div>
    );
  }
}
