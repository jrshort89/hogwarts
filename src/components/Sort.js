import React from "react";

const Sorted = (props) => (
  <select onChange={props.sortHandler}>
    <option value="">All</option>
    <option value="greased">Greased</option>
    <option value="ungreased">Not Greased</option>
    <option value="weight">Weight</option>
    <option value="alphabetical">Alphabetical</option>
  </select>
);

export default Sorted;
