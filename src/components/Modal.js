import React, { Component } from "react";

class Modal extends Component {
  render() {
    const { closeModal, changeCurrentValue, currentData, saveChanges } =
      this.props;
    return (
      <div className="card mt-3">
        <div className="card-header bg-success text-light">
          <h2>Player Modal</h2>
        </div>
        <div className="card-body text-success">
          <div className="row text-center">
            <div className="col-5">
              <h3>Player Age</h3>
              <button
                onClick={() => changeCurrentValue("age", false)}
                className="btn btn-secondary"
              >
                -
              </button>
              <button className="btn">{currentData.age}</button>
              <button
                onClick={() => changeCurrentValue("age", true)}
                className="btn btn-info text-light"
              >
                +
              </button>
            </div>
            <div className="col-2">
              <img
                className="img-fluid"
                src="https://static.vecteezy.com/system/resources/previews/050/018/550/non_2x/modern-abstract-jersey-mockup-isolated-on-transparent-background-great-for-t-shirt-prints-player-apparel-and-product-covers-free-png.png"
                alt="player t-shirt"
              />
            </div>
            <div className="col-5">
              <h3>Player Value</h3>
              <button
                onClick={() => changeCurrentValue("value", false)}
                className="btn btn-secondary"
              >
                -
              </button>
              <button className="btn">💰{currentData.value}.00m</button>
              <button
                onClick={() => changeCurrentValue("value", true)}
                className="btn btn-info text-light"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="card-footer bg-success">
          <button
            onClick={closeModal}
            className="btn btn-warning text-success m-1"
          >
            Cancel
          </button>
          <button
            onClick={saveChanges}
            className="btn btn-light text-success m-1"
          >
            Save Changes
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
