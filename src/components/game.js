import React, { Component } from 'react'
import Champion from "./champion";
import styled from "styled-components";

export class Game extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = key => e => {
        e.preventDefault();
        let clickedChampion = this.props.championOne.key === key ? this.props.championOne : this.props.championTwo;
        let otherChampion = this.props.championOne.key !== key ? this.props.championOne : this.props.championTwo;
        console.log("clickedChampion had " + clickedChampion.skinCount);
        console.log("otherChampion had " + otherChampion.skinCount);

        this.props.onGuessHandler(clickedChampion.skinCount >= otherChampion.skinCount);
    }

    render() {
        return (
            <GameContainer>
                <div>Which champion has more skins?</div>
                <Champion onClickEvent={this.handleClick} data={this.props.championOne} />
                <Champion onClickEvent={this.handleClick} data={this.props.championTwo} />
            </GameContainer>
        )
    }
}

const GameContainer = styled.div`
    text-align: center;
    color: white;
`;

export default Game
