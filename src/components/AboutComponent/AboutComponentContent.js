import React from "react";
import ModalComponent from "./ModalComponent";

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
    </>
  );
}
export default AboutPopup;
