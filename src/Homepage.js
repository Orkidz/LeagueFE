import React, { Component } from "react";
import Game from './components/game';
import Header from "./components/pagedesign/header";
import Footer from "./components/pagedesign/footer";

export class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      champions: false,
      championOne: {},
      championTwo: {},
      currentScore: 0,
    };

    this.onGuess = this.onGuess.bind(this);
  }

  onGuess = wasCorrect => e => {
    e.preventDefault();
    console.log(wasCorrect);
    if (wasCorrect) {
      this.setState({ currentScore: this.state.currentScore + 1 })
    }
    this.setState(state => ({
      championOne: state.champions.pop(),
      championTwo: state.champions.pop()
    }));
  }

  componentDidMount() {
    if(!this.state.champions) {
      fetch('http://localhost:3000/Champions')
      .then(response => response.json())
      .then((data) => {
        let jsonData = JSON.parse(JSON.stringify(data));
        let champions = [];
        for (var i in jsonData) {
          champions.push(jsonData[i])
        }
        champions.sort(function() {
          return .5 - Math.random();
        });
        this.setState({ champions, championOne: champions.pop(), championTwo: champions.pop() });
      });
    }
  }

  render() {
    return (
      <div>
        <Header currentScore={this.state.currentScore}></Header>
        {this.state.champions !== false &&
          <Game onGuessHandler={this.onGuess} championOne={this.state.championOne} championTwo={this.state.championTwo}></Game>
        }
        <Footer></Footer>
      </div>
    );
  }
}

export default Homepage;