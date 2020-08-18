import React, { Component } from "react";
import styled from "styled-components";

export class Champion extends Component {
  constructor(props) {
    super(props);
    let search = window.location.search;
    let params = new URLSearchParams(search);
    this.state = {
      showSkinCount: params.get("showSkinCount"),
    };
  }

  render() {
    return (
      <ChampionContainer onClick={this.props.onClickEvent(this.props.data.key)}>
        <ChampionData>
          <div>{this.props.data.name}</div>
          <div>{this.props.data.title}</div>
          <div>{this.props.data.blurb}</div>
          <ImageContainer>
            <img src={this.props.data.image} />
          </ImageContainer>
          {this.state.showSkinCount && (
            <div>(this champ has {this.props.data.skinCount} skins)</div>
          )}
        </ChampionData>
      </ChampionContainer>
    );
  }
}

const ChampionContainer = styled.div``;

const ChampionData = styled.div`
  text-align: center;
  padding: 20px;
  color: black;

  &:hover {
    cursor: pointer;
    border: solid 1px blue;
  }

  img {
    width: 300px;
    height: 300px;
  }
`;

const ImageContainer = styled.div`
  margin-top: 50px;
`;

export default Champion;
