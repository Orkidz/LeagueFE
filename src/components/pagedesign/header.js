import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HeaderContainer>
        <nav className="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
          <a className="navbar-brand logo-text page-scroll" style={{color: 'aqua'}} href="index.html">
            Kaneki Games
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-awesome fas fa-bars"></span>
            <span className="navbar-toggler-awesome fas fa-times"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#header">
                  HOME<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#game">
                  PLAY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#socials">
                  SOCIALS
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle page-scroll"
                  id="navbarDropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  SHOP
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="">
                    <span className="item-text">Shop - coming soon</span>
                  </a>
                  <div className="dropdown-items-divide-hr"></div>
                  <a className="dropdown-item" href="">
                    <span className="item-text">Membership - coming soon</span>
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#socials">
                  CONTACT
                </a>
              </li>
            </ul>
            <span className="nav-item social-icons">
              <span className="fa-stack">
                <a href="https://www.facebook.com/KanekiERamos">
                  <span className="hexagon"></span>
                  <i className="fab fa-facebook-f fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="https://twitter.com/KodeWithKaneki">
                  <span className="hexagon"></span>
                  <i className="fab fa-twitter fa-stack-1x"></i>
                </a>
              </span>
            </span>
          </div>
        </nav>
        <header id="header" className="header">
          <div className="header-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="text-container">
                    <h1>League of Legends - The Skin Count Guessing Game</h1>
                    <p className="p-heading p-large">
                      Playing is easy as pie! You'll be given two randomly
                      generated champions and all you have to do is click on the
                      champion you believe has the most skins! There's nothing
                      to it!
                    </p>
                    <div className="button-container">
                      <a className="btn-solid-reg page-scroll" href="#game">
                        PLAY
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </HeaderContainer>
    );
  }
}

const StyledFaPowerOff = styled(FaPowerOff)`
  width: 60px;
  height: 60px;
  padding: 3px;
`;

const fadeDropdown = keyframes`
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
`;

const HeaderContainer = styled.div`
  .navbar-custom {
    border-style: solid;
    border-color: aqua;
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    background-color: #113448;
    box-shadow: 0 0.0625rem 0.375rem 0 rgba(0, 0, 0, 0.1);
    font: 600 0.875rem/0.875rem "Open Sans", sans-serif;
    transition: all 0.2s;
  }

  .navbar-custom .navbar-brand {
    font-size: 0;
  }

  .navbar-custom .navbar-brand.logo-image img {
    width: 7.0625rem;
    height: 2rem;
    -webkit-backface-visibility: hidden;
  }

  .navbar-custom .navbar-brand.logo-text {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    font: 700 2.25rem/1.5rem "Montserrat", sans-serif;
    color: #fff;
    text-decoration: none;
  }

  .navbar-custom .navbar-nav {
    margin-top: 0.75rem;
    margin-bottom: 0.5rem;
  }

  .navbar-custom .nav-item .nav-link {
    padding: 0.625rem 0.75rem 0.625rem 0.75rem;
    color: #fff;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .navbar-custom .nav-item .nav-link:hover,
  .navbar-custom .nav-item .nav-link.active {
    color: #14bf98;
  }

  .navbar-custom .dropdown:hover > .dropdown-menu {
    display: block;
    min-width: auto;
    animation: ${fadeDropdown} 0.2s;
  }

  .navbar-custom .dropdown-toggle:focus {
    outline: 0;
  }

  .navbar-custom .dropdown-menu {
    margin-top: 0;
    border: none;
    border-radius: 0.25rem;
    background-color: #113448;
  }

  .navbar-custom .dropdown-item {
    color: #fff;
    text-decoration: none;
  }

  .navbar-custom .dropdown-item:hover {
    background-color: #113448;
  }

  .navbar-custom .dropdown-item .item-text {
    font: 600 0.875rem/0.875rem "Open Sans", sans-serif;
  }

  .navbar-custom .dropdown-item:hover .item-text {
    color: #14bf98;
  }

  .navbar-custom .dropdown-items-divide-hr {
    width: 100%;
    height: 1px;
    margin: 0.75rem auto 0.75rem auto;
    border: none;
    background-color: #b5bcc4;
    opacity: 0.2;
  }

  .navbar-custom .social-icons {
    display: none;
  }

  .navbar-custom .navbar-toggler {
    border: none;
    color: #fff;
    font-size: 2rem;
  }

  .navbar-custom
    button[aria-expanded="false"]
    .navbar-toggler-awesome.fas.fa-times {
    display: none;
  }

  .navbar-custom
    button[aria-expanded="false"]
    .navbar-toggler-awesome.fas.fa-bars {
    display: inline-block;
  }

  .navbar-custom
    button[aria-expanded="true"]
    .navbar-toggler-awesome.fas.fa-bars {
    display: none;
  }

  .navbar-custom
    button[aria-expanded="true"]
    .navbar-toggler-awesome.fas.fa-times {
    display: inline-block;
    margin-right: 0.125rem;
  }

  .header {
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
      url("../images/header-background.jpg") center center no-repeat;
    background-size: cover;
    border-style: solid;
    border-color: aqua;
  }

  .header .header-content {
    padding-top: 8rem;
    padding-bottom: 2.125rem;
    text-align: center;
  }

  .header .text-container {
    margin-bottom: 3rem;
  }

  .header h1 {
    margin-bottom: 0.5rem;
    color: #fff;
  }

  .header .p-large {
    margin-bottom: 2rem;
    color: #dfe5ec;
  }

  .header .btn-solid-lg {
    margin-right: 0.5rem;
    margin-bottom: 1.25rem;
  }
`;

export default Header;
