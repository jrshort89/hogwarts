import React, { Component } from "react";
import Pig from "./Pig";

import hogs from "../porkers_data";
import Sort from "../components/Sort";

class Pigpen extends Component {
  constructor() {
    super();
    this.state = {
      pigs: this.rallyPigs(),
      sortedBy: "",
    };
  }

  rallyPigs() {
    const pigs = hogs.map((pig, index) => {
      const imageName = pig.name.replace(/\s/g, "_").toLowerCase();
      const pigImage = require(`../hog-imgs/${imageName}.jpg`);
      return (
        <Pig
          key={index}
          name={pig.name}
          specialty={pig.specialty}
          greased={pig.greased}
          weight={pig.weight}
          medal={pig["highest medal achieved"]}
          image={pigImage}
        />
      );
    });
    return pigs;
  }

  sortHandler(event) {
    let pigs = this.rallyPigs();
    switch (event.target.value) {
      case "greased":
        pigs = pigs.filter((pig) => pig.props.greased);
        break;
      case "ungreased":
        pigs = pigs.filter((pig) => !pig.props.greased);
        break;
      case "alphabetical":
        pigs = pigs.sort((a, b) => {
          var nameA = a.props.name.toUpperCase(); // ignore upper and lowercase
          var nameB = b.props.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        break;
      case "weight":
        pigs = pigs.sort((a, b) => {
          if (a.props.weight > b.props.weight) {
            return -1;
          }
          if (a.props.weight < b.props.weight) {
            return 1;
          }
          return 0;
        });
        break;
      default:
        break;
    }
    this.setState({
      pigs: pigs,
    });
  }

  render() {
    return (
      <div>
        <Sort sortHandler={(event) => this.sortHandler(event)} />
        <div>
          <br />
          <div style={{ display: "inline-block" }}>{this.state.pigs}</div>
        </div>
      </div>
    );
  }
}

export default Pigpen;
