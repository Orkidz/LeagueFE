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
        <div id="game" className="basic-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-container">
                  <div className="section-title">
                    <ScoresContainer>
                      <div>
                        Current Score: {this.props.currentScore} |&nbsp;
                      </div>
                      <div>High Score: {this.props.highScore}</div>
                    </ScoresContainer>
                  </div>
                  <h2>Which champion has more skins?</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <Champion
                  onClickEvent={this.handleClick}
                  data={this.props.championOne}
                />
              </div>
              <div className="col-lg-6">
                <Champion
                  onClickEvent={this.handleClick}
                  data={this.props.championTwo}
                />
              </div>
            </div>
          </div>
        </div>
      </GameContainer>
    );
  }
}

const GameContainer = styled.div`
  .basic-1 {
    padding-top: 6.5rem;
    padding-bottom: 3rem;
  }

  .basic-1 .text-container {
    margin-bottom: 3rem;

    h2 {
      margin-top: 2rem;
      text-align: center;
    }
  }

  .basic-1 .section-title {
    text-align: center;
    margin-bottom: 0.5rem;
  }

  .basic-1 h2 {
    margin-bottom: 2rem;
  }

  .basic-1 .testimonial-author {
    color: #484a46;
  }

  .basic-1 .image-container {
    overflow: hidden;
    border-radius: 0.25rem;
  }

  .basic-1 .image-container img {
    margin: 0;
    border-radius: 0.25rem;
    transition: all 0.3s;
  }

  .basic-1 .image-container:hover img {
    -moz-transform: scale(1.15);
    -webkit-transform: scale(1.15);
    transform: scale(1.15);
  }
`;

const ScoresContainer = styled.div`
  display: inline-block;
  text-align: center;

  div {
    display: inline-block;
    font-size: 36px;
  }
`;

export default Game;
