import React from "react";
import { Link } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer className="header">
      <ul className="power-button-and-title">
        <li>
          <StyledFaPowerOff />
        </li>
        <li>
          <h1>LoL Randomizer</h1>
        </li>
      </ul>
      <ul className="header-menu">
        <li>
          <a href="#home">ABOUT</a>
        </li>
        <li>
          <a href="#news">CONTACT</a>
        </li>
        <li>
          <a href="#contact">NEWS</a>
        </li>
        <li>
          <a href="#about">HOME</a>
        </li>
      </ul>
    </HeaderContainer>
  );
}

const StyledFaPowerOff = styled(FaPowerOff)`
  width: 60px;
  height: 60px;
  padding: 3px;
`;

const HeaderContainer = styled.div`
  &:after {
    content: ".";
    visibility: hidden;
    display: block;
    height: 0;
    clear: both;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: #333333;
    &.power-button-and-title li {
      float: left;
    }
    &.header-menu li {
      float: right;
    }
  }

  li {
    color: #00bfff;
    padding: 5px;
  }

  li a {
    display: block;
    color: #00bfff;
    font-size: 20px;
    text-decoration: none;
    padding: 20px;
    margin-top: 5px;
  }

  li a:hover {
    background-color: #111111;
  }
`;

export default Header;
