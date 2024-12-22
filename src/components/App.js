import React, { Component } from "react";
import Modal from "./Modal";

class App extends Component {
  state = {
    players: [],
    playerModal: false,
    currentValue: "",
    currentAge: "",
  };

  componentDidMount() {
    const players = [
      { name: "Julian Alvarez", age: 22, club: "Atletico Mardir", price: 75 },
      { name: "Dominic Solanke", age: 23, club: "Tottenham", price: 64.3 },
      { name: "Leny Yoro", age: 25, club: "Man United", price: 62 },
      { name: "Pedro Neto", age: 24, club: "Chelsea", price: 60 },
      { name: "Moussa Diaby", age: 23, club: "Al-Ittihad", price: 60 },
      { name: "Joao Neves", age: 20, club: "PSG", price: 59.92 },
      { name: "Amadou Onana", age: 27, club: "Aston Villa", price: 59.35 },
      { name: "Dani Olma", age: 26, club: "Barcelona", price: 55 },
      { name: "Teun Koopmeiners", age: 24, club: "Juventus", price: 54.7 },
      { name: "Micheal Olise", age: 23, club: "Bayern Munich", price: 53 },
    ];
    this.setState({
      players,
    });
  }

  removePlayer = (index) => {
    const players = this.state.players;
    players.splice(index, 1);
    this.setState({
      players,
    });
  };

  openModal = () => {
    this.setState({
      playerModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      playerModal: false,
    });
  };

  changeCurrentValue = (type, isInc) => {
    const { currentValue, currentAge } = this.state;
    let newCurrentValue = currentValue ? currentValue : 0;
    let newCurrentAge = currentAge ? currentAge : 0;

    if (type === "value") {
      if (isInc) {
        newCurrentValue++;
      } else if (newCurrentValue < 1) {
        newCurrentValue = 0;
      } else {
        newCurrentValue--;
      }
    }

    if (type === "age") {
      if (isInc) {
        newCurrentAge++;
      } else if (newCurrentAge < 1) {
        newCurrentAge = 0;
      } else {
        newCurrentAge--;
      }
    }

    this.setState({
      currentValue: newCurrentValue,
      currentAge: newCurrentAge,
    });
  };

  render() {
    const { players, playerModal, currentAge, currentValue } = this.state;
    return (
      <>
        <div className="container bg-light rounded mt-3 p-3">
          <div className="row">
            <div className="col">
              <button onClick={this.openModal} className="btn btn-primary">
                Add Player
              </button>
              {playerModal ? (
                <Modal
                  changeCurrentValue={this.changeCurrentValue}
                  closeModal={this.closeModal}
                  currentAge={currentAge}
                  currentValue={currentValue}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="container bg-light rounded mt-3">
          <div className="row">
            <div className="col">
              <h1 className="text-center my-3">⚽ Transfers Market</h1>
              <table className="table table-hover table-light">
                <thead>
                  <tr>
                    <th>№</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Club</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {players.map((player, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{player.name}</td>
                        <td>{player.age}</td>
                        <td>{player.club}</td>
                        <td>
                          <span className="badge bg-primary">
                            &euro;{player.price}m
                          </span>
                        </td>
                        <td>
                          <button
                            onClick={() => this.removePlayer(index)}
                            className="btn btn-danger btn-sm"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
