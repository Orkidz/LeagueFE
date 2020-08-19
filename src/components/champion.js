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
          <div className="text-container">
            <div className="image-container">
              <h2>{this.props.data.name}</h2>
              <img
                className="img-fluid"
                src={this.props.data.image}
                alt="alternative"
              />
              <h3>{this.props.data.title}</h3>
              <p>{this.props.data.blurb}</p>
              {this.state.showSkinCount && (
                <div>(this champ has {this.props.data.skinCount} skins)</div>
              )}
            </div>
          </div>
        </ChampionData>
      </ChampionContainer>
    );
  }
}

const ChampionContainer = styled.div``;

const ChampionData = styled.div`
  padding: 20px;
  color: white;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 100%;
    margin-bottom: 40px !important;
    border-style: solid;
    border-color: aqua;
  }

  .image-container h2 {
    color: white;
    margin-top: 0px !important;
    text-align: center !important;
    border-style: solid;
    border-color: aqua;
  }

  .image-container h3 {
    color: white;
    text-align: center !important;
    border-style: solid;
    border-color: aqua;
  }
`;

const ImageContainer = styled.div`
  margin-top: 50px;
`;

export default Champion;
