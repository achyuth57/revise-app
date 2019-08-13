import React from "react";
import ModalComponent from "./ModalComponent";
import ParentComp from "../Context/ParentComp";

function AboutPopup() {
  return (
    <>
      <button
        type="button"
        className="btn btn-info btn-lg"
        data-toggle="modal"
        data-target="#myModal"
      >
        Open Modal
      </button>
      <ModalComponent />
      <ParentComp />
    </>
  );
}
export default AboutPopup;
