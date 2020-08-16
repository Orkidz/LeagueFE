import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <div>
        <ul>
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
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: #fff;
  justify-content: center;
  border-style: solid;
  border-color: #00bfff;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  border-width: medium;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: #333333;
  }

  li {
    float: right;
  }

  li a {
    display: block;
    color: #00bfff;
    font-size: 20px;
    text-decoration: none;
    padding: 20px;
  }

  li a:hover {
    background-color: #111111;
  }
`;

export default Footer;
