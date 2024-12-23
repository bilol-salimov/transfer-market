import React, { Component } from "react";
import Modal from "./Modal";

class App extends Component {
  state = {
    players: [],
    playerModal: false,
    currentData: { name: "Player", age: 0, club: "Club", value: 0 },
  };

  componentDidMount() {
    const players = [
      { name: "Julian Alvarez", age: 22, club: "Atletico Mardir", value: 75 },
      { name: "Dominic Solanke", age: 23, club: "Tottenham", value: 64.3 },
      { name: "Leny Yoro", age: 25, club: "Man United", value: 62 },
      { name: "Pedro Neto", age: 24, club: "Chelsea", value: 60 },
      { name: "Moussa Diaby", age: 23, club: "Al-Ittihad", value: 60 },
      { name: "Joao Neves", age: 20, club: "PSG", value: 59.92 },
      { name: "Amadou Onana", age: 27, club: "Aston Villa", value: 59.35 },
      { name: "Dani Olma", age: 26, club: "Barcelona", value: 55 },
      { name: "Teun Koopmeiners", age: 24, club: "Juventus", value: 54.7 },
      { name: "Micheal Olise", age: 23, club: "Bayern Munich", value: 53 },
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
    const { currentData } = this.state;

    if (type === "value") {
      if (isInc) {
        currentData.value++;
      } else if (currentData.value < 1) {
        currentData.value = 0;
      } else {
        currentData.value--;
      }
    }

    if (type === "age") {
      if (isInc) {
        currentData.age++;
      } else if (currentData.age < 1) {
        currentData.age = 0;
      } else {
        currentData.age--;
      }
    }

    this.setState({
      currentData,
    });
  };

  saveChanges = () => {
    const { currentData, players } = this.state;

    players.push(currentData);
    this.setState({
      players,
    });

    this.setState({
      currentData: { name: "Player", age: 0, club: "Club", value: 0 },
    });
  };

  render() {
    const { players, playerModal, currentData } = this.state;
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
                  currentData={currentData}
                  saveChanges={this.saveChanges}
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
                            &euro;{player.value}m
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
