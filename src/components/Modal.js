import React, { Component } from "react";

class Modal extends Component {
  render() {
    const { closeModal, changeCurrentValue, currentAge, currentValue } =
      this.props;
    return (
      <div className="card mt-3">
        <div className="card-header bg-success text-light">
          <h2>Player Modal</h2>
        </div>
        <div className="card-body text-success">
          <div className="row">
            <div className="col">
              <h3>Player Age</h3>
              <button
                onClick={() => changeCurrentValue("age", false)}
                className="btn btn-secondary"
              >
                -
              </button>
              <button className="btn">{currentAge ? currentAge : 0}</button>
              <button
                onClick={() => changeCurrentValue("age", true)}
                className="btn btn-info text-light"
              >
                +
              </button>
            </div>
            <div className="col">
              <h3>Player Value</h3>
              <button
                onClick={() => changeCurrentValue("value", false)}
                className="btn btn-secondary"
              >
                -
              </button>
              <button className="btn">
                💰{currentValue ? currentValue : 0}.00m
              </button>
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
          <button className="btn btn-light text-success m-1">
            Save Changes
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
