import React, { Component } from 'react';
import axios from "axios";
import PlayerCard from "./components/PlayerCard";
import Nav from "./components/Nav.js";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      players: []
    }
  }
  componentDidMount(){
    axios.get(`http://localhost:5000/api/players`)
    .then(response => {
      console.log(response.data);
      console.table(response.data);
      this.setState({players: response.data})
      console.log(Array.isArray(this.state.players))

    })
  }
  render(){
  return (
    <div className="App">
      <Nav/>
    <div className="container">
      {this.state.players.map(player => (
        <PlayerCard 
        key={player.id}
        player={player}/>
      ))}
      </div>
    </div>
  );
}}

export default App;
