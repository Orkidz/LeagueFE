import React, { Component } from "react";
import Champion from "./champion";
import styled from "styled-components";

export class Game extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (key) => (e) => {
    e.preventDefault();
    let clickedChampion =
      this.props.championOne.key === key
        ? this.props.championOne
        : this.props.championTwo;
    let otherChampion =
      this.props.championOne.key !== key
        ? this.props.championOne
        : this.props.championTwo;
    console.log("clickedChampion had " + clickedChampion.skinCount);
    console.log("otherChampion had " + otherChampion.skinCount);

    console.log(this.props.onGuessHandler);
    this.props.onGuessHandler(
      clickedChampion.skinCount >= otherChampion.skinCount
    );
  };

  render() {
    return (
      <GameContainer>
        <h1>Which champion has more skins?</h1>
        <Champion
          onClickEvent={this.handleClick}
          data={this.props.championOne}
        />
        <Champion
          onClickEvent={this.handleClick}
          data={this.props.championTwo}
        />
      </GameContainer>
    );
  }
}

const GameContainer = styled.div`
  width: 100%;
  text-align: center;

  h1 {
    color: #00bfff;
  }
`;

export default Game;
