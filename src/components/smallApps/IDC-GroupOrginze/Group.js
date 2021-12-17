import React from "react";
import "./Group.css";

function Group(props) {
  return (
    <div className="oneGroup">
      <h4> {props.data[0][1]}</h4>
      <h4> {props.data[1][1]}</h4>
      <h4> {props.data[2][1]}</h4>
      {props.data[3] && <h4> {props.data[3][1]}</h4>}
      {props.data[4] && <h4> {props.data[4][1]}</h4>}
    </div>
  );
}

export default Group;
