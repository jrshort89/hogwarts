import React from "react";

const Details = (props) => (
  <div>
    <div className="content">
      <a className="header">{props.name}</a>
      <div className="meta">
        <span className="date">{props.specialty}</span>
      </div>
      <div className="description">
        {props.greased ? "Greasy ass pig" : "Pig needs some grease"}
        <br></br>
        Weight: {props.weight}
      </div>
    </div>
    <div className="extra content">
      <a>
        <i className="trophy icon"></i>
        {props.medal}
      </a>
    </div>
  </div>
);

export default Details;
