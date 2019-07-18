import React from "react";
import PropType from "prop-types";
import ReciepeService from "../../services/reciepe";

const HomeMainHead = props => (
  <div>
    <h1>Hello! {props.message}</h1>
    <ReciepeService />
  </div>
);

HomeMainHead.defaultProps = {
  message: ""
};
HomeMainHead.PropType = PropType.string;

{
  const newDate = new Date();
  const currentTime = newDate.getHours();
  console.log(currentTime);
  if (currentTime <= 12) {
    HomeMainHead.defaultProps = {
      message: "Good Morning"
    };
  } else {
    HomeMainHead.defaultProps = {
      message: "Good Afternoon"
    };
  }
}

export default HomeMainHead;
