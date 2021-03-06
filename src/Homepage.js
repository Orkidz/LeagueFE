import React, { Component } from "react";
import Game from "./components/game";
import Header from "./components/pagedesign/header";
import Services from "./components/pagedesign/services";
import Footer from "./components/pagedesign/footer";
import styled from "styled-components";

export class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      champions: false,
      championOne: {},
      championTwo: {},
      currentScore: 0,
      highScore: 0,
    };

    this.onGuess = this.onGuess.bind(this);
    this.fetchChampions = this.fetchChampions.bind(this);
  }

  componentDidMount() {
    if (!this.state.champions) {
      this.fetchChampions();
    }
  }

  async fetchChampions() {
    await fetch("https://kanekigames.com/api/champions")
      .then((response) => response.json())
      .then((data) => {
        let jsonData = JSON.parse(JSON.stringify(data));
        let champions = [];
        for (var i in jsonData) {
          champions.push(jsonData[i]);
        }
        champions.sort(function () {
          return 0.5 - Math.random();
        });
        this.setState({
          champions,
          championOne: champions.pop(),
          championTwo: champions.pop(),
        });
      });
  }

  onGuess(wasCorrect) {
    if (wasCorrect) {
      this.setState({ currentScore: this.state.currentScore + 1 });
      this.setState((state) => ({
        championOne: state.champions.pop(),
        championTwo: state.champions.pop(),
      }));
    } else {
      this.setState({
        highScore:
          this.state.currentScore > this.state.highScore
            ? this.state.currentScore
            : this.state.highScore,
        currentScore: 0,
      });
      this.fetchChampions();
    }
  }

  render() {
    return (
      <HomepageWrapper>
        <Header></Header>
        {this.state.champions !== false && (
          <Game
            currentScore={this.state.currentScore}
            highScore={this.state.highScore}
            onGuessHandler={this.onGuess}
            championOne={this.state.championOne}
            championTwo={this.state.championTwo}
          ></Game>
        )}
        <Services></Services>
        <Footer></Footer>
      </HomepageWrapper>
    );
  }
}

const HomepageWrapper = styled.div`
  body,
  html {
    width: 100%;
    height: 100%;
  }

  body,
  p {
    color: white;
    font: 400 1rem/1.5625rem "Open Sans", sans-serif;
  }

  .p-large {
    font: 400 1.125rem/1.625rem "Open Sans", sans-serif;
  }

  .p-small {
    font: 400 0.875rem/1.375rem "Open Sans", sans-serif;
  }

  .p-heading {
    margin-bottom: 3.5rem;
    text-align: center;
  }

  .li-space-lg li {
    margin-bottom: 0.375rem;
  }

  .indent {
    padding-left: 1.25rem;
  }

  h1 {
    color: #484a46;
    font: 700 2.5rem/3rem "Montserrat", sans-serif;
  }

  h2 {
    color: #484a46;
    font: 700 1.75rem/2.125rem "Montserrat", sans-serif;
  }

  h3 {
    color: #484a46;
    font: 700 1.375rem/1.75rem "Montserrat", sans-serif;
  }

  h4 {
    color: #484a46;
    font: 700 1.25rem/1.625rem "Montserrat", sans-serif;
  }

  h5 {
    color: #484a46;
    font: 700 1.125rem/1.5rem "Montserrat", sans-serif;
  }

  h6 {
    color: #484a46;
    font: 700 1rem/1.375rem "Montserrat", sans-serif;
  }

  a {
    color: #787976;
    text-decoration: underline;
  }

  a:hover {
    color: #787976;
    text-decoration: underline;
  }

  a.green {
    color: #14bf98;
  }

  a.white,
  .white {
    color: #dfe5ec;
  }

  .testimonial-text {
    font-style: italic;
  }

  .testimonial-author {
    font: 700 1rem/1.375rem "Montserrat", sans-serif;
  }

  strong {
    color: #484a46;
  }

  .section-title {
    color: #14bf98;
    font: 500 0.8125rem/1.125rem "Montserrat", sans-serif;
  }

  .btn-solid-reg {
    display: inline-block;
    padding: 1.1875rem 1.875rem 1.1875rem 1.875rem;
    border: 0.125rem solid #14bf98;
    border-radius: 0.25rem;
    background-color: #14bf98;
    color: #fff;
    font: 700 0.75rem/0 "Montserrat", sans-serif;
    text-decoration: none;
    transition: all 0.2s;
  }

  .btn-solid-reg:hover {
    background-color: transparent;
    color: #14bf98;
    text-decoration: none;
  }

  .btn-solid-lg {
    display: inline-block;
    padding: 1.375rem 2.125rem 1.375rem 2.125rem;
    border: 0.125rem solid #14bf98;
    border-radius: 0.25rem;
    background-color: #14bf98;
    color: #fff;
    font: 700 0.75rem/0 "Montserrat", sans-serif;
    text-decoration: none;
    transition: all 0.2s;
  }

  .btn-solid-lg:hover {
    background-color: transparent;
    color: #14bf98;
    text-decoration: none;
  }

  .btn-outline-reg {
    display: inline-block;
    padding: 1.1875rem 1.875rem 1.1875rem 1.875rem;
    border: 0.125rem solid #787976;
    border-radius: 0.25rem;
    background-color: transparent;
    color: #787976;
    font: 700 0.75rem/0 "Montserrat", sans-serif;
    text-decoration: none;
    transition: all 0.2s;
  }

  .btn-outline-reg:hover {
    background-color: #787976;
    color: #fff;
    text-decoration: none;
  }

  .btn-outline-lg {
    display: inline-block;
    padding: 1.375rem 2.125rem 1.375rem 2.125rem;
    border: 0.125rem solid #787976;
    border-radius: 0.25rem;
    background-color: transparent;
    color: #787976;
    font: 700 0.75rem/0 "Montserrat", sans-serif;
    text-decoration: none;
    transition: all 0.2s;
  }

  .btn-outline-lg:hover {
    background-color: #787976;
    color: #fff;
    text-decoration: none;
  }

  .btn-outline-sm {
    display: inline-block;
    padding: 1rem 1.625rem 0.9375rem 1.625rem;
    border: 0.125rem solid #787976;
    border-radius: 0.25rem;
    background-color: transparent;
    color: #787976;
    font: 700 0.75rem/0 "Montserrat", sans-serif;
    text-decoration: none;
    transition: all 0.2s;
  }

  .btn-outline-sm:hover {
    background-color: #787976;
    color: #fff;
    text-decoration: none;
  }

  .form-group {
    position: relative;
    margin-bottom: 1.25rem;
  }

  .form-group.has-error.has-danger {
    margin-bottom: 0.625rem;
  }

  .form-group.has-error.has-danger .help-block.with-errors ul {
    margin-top: 0.375rem;
  }

  .label-control {
    position: absolute;
    top: 0.8125rem;
    left: 1.375rem;
    color: #787976;
    opacity: 1;
    font: 400 0.875rem/1.375rem "Open Sans", sans-serif;
    cursor: text;
    transition: all 0.2s ease;
  }

  @media screen and (-ms-high-contrast: active),
    screen and (-ms-high-contrast: none) {
    .label-control {
      top: 0.9375rem;
    }
  }

  .form-control-input:focus + .label-control,
  .form-control-input.notEmpty + .label-control,
  .form-control-textarea:focus + .label-control,
  .form-control-textarea.notEmpty + .label-control {
    top: 0.125rem;
    opacity: 1;
    font-size: 0.75rem;
    font-weight: 500;
  }

  .form-control-input,
  .form-control-select {
    display: block;
    width: 100%;
    padding-top: 1.25rem;
    padding-bottom: 0.25rem;
    padding-left: 1.3125rem;
    border: 1px solid #dadada;
    border-radius: 0.25rem;
    background-color: #fff;
    color: #787976;
    font: 400 0.875rem/1.375rem "Open Sans", sans-serif;
    transition: all 0.2s;
    -webkit-appearance: none;
  }

  .form-control-select {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    height: 3rem;
  }

  @media screen and (-ms-high-contrast: active),
    screen and (-ms-high-contrast: none) {
    .form-control-input {
      padding-top: 1.25rem;
      padding-bottom: 0.75rem;
      line-height: 1.75rem;
    }

    .form-control-select {
      padding-top: 0.875rem;
      padding-bottom: 0.75rem;
      height: 3.125rem;
      line-height: 2.125rem;
    }
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
    background-image: url("../images/down-arrow.png");
    background-position: 96% 50%;
    background-repeat: no-repeat;
    outline: none;
  }

  select::-ms-expand {
    display: none;
  }

  .form-control-textarea {
    display: block;
    width: 100%;
    height: 8rem;
    padding-top: 1.25rem;
    padding-left: 1.3125rem;
    border: 1px solid #dadada;
    border-radius: 0.25rem;
    background-color: #fff;
    color: #787976;
    font: 400 1rem/1.5625rem "Open Sans", sans-serif;
    transition: all 0.2s;
  }

  .form-control-input:focus,
  .form-control-select:focus,
  .form-control-textarea:focus {
    border: 1px solid #a1a1a1;
    outline: none;
  }

  .form-control-input:hover,
  .form-control-select:hover,
  .form-control-textarea:hover {
    border: 1px solid #a1a1a1;
  }

  .checkbox {
    font: 400 0.875rem/1.375rem "Open Sans", sans-serif;
  }

  input[type="checkbox"] {
    vertical-align: -15%;
    margin-right: 0.375rem;
  }

  @media screen and (-ms-high-contrast: active),
    screen and (-ms-high-contrast: none) {
    input[type="checkbox"] {
      vertical-align: -9%;
    }
  }

  .form-control-submit-button {
    display: inline-block;
    width: 100%;
    height: 3.125rem;
    border: 0.125rem solid #14bf98;
    border-radius: 0.25rem;
    background-color: #14bf98;
    color: #fff;
    font: 700 0.75rem/1.75rem "Montserrat", sans-serif;
    cursor: pointer;
    transition: all 0.2s;
  }

  .form-control-submit-button:hover {
    background-color: transparent;
    color: #14bf98;
  }

  #lmsgSubmit.h3.text-center.tada.animated,
  #cmsgSubmit.h3.text-center.tada.animated,
  #pmsgSubmit.h3.text-center.tada.animated,
  #lmsgSubmit.h3.text-center,
  #cmsgSubmit.h3.text-center,
  #pmsgSubmit.h3.text-center {
    display: block;
    margin-bottom: 0;
    color: #b93636;
    font: 400 1.125rem/1rem "Open Sans", sans-serif;
  }

  .help-block.with-errors .list-unstyled {
    color: #787976;
    font-size: 0.75rem;
    line-height: 1.125rem;
    text-align: left;
  }

  .help-block.with-errors ul {
    margin-bottom: 0;
  }

  @-webkit-keyframes tada {
    from {
      -webkit-transform: scale3d(1, 1, 1);
      -ms-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    10%,
    20% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
      -ms-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
      transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    }
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
      -ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    }
    40%,
    60%,
    80% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
      -ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    }
    to {
      -webkit-transform: scale3d(1, 1, 1);
      -ms-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  @keyframes tada {
    from {
      -webkit-transform: scale3d(1, 1, 1);
      -ms-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    10%,
    20% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
      -ms-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
      transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    }
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
      -ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    }
    40%,
    60%,
    80% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
      -ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    }
    to {
      -webkit-transform: scale3d(1, 1, 1);
      -ms-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  .tada {
    -webkit-animation-name: tada;
    animation-name: tada;
  }

  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .my-mfp-slide-bottom .zoom-anim-dialog {
    opacity: 0;
    transition: all 0.2s ease-out;
    -webkit-transform: translateY(-1.25rem) perspective(37.5rem) rotateX(10deg);
    -ms-transform: translateY(-1.25rem) perspective(37.5rem) rotateX(10deg);
    transform: translateY(-1.25rem) perspective(37.5rem) rotateX(10deg);
  }

  .my-mfp-slide-bottom.mfp-ready .zoom-anim-dialog {
    opacity: 1;
    -webkit-transform: translateY(0) perspective(37.5rem) rotateX(0);
    -ms-transform: translateY(0) perspective(37.5rem) rotateX(0);
    transform: translateY(0) perspective(37.5rem) rotateX(0);
  }

  .my-mfp-slide-bottom.mfp-removing .zoom-anim-dialog {
    opacity: 0;
    -webkit-transform: translateY(-0.625rem) perspective(37.5rem) rotateX(10deg);
    -ms-transform: translateY(-0.625rem) perspective(37.5rem) rotateX(10deg);
    transform: translateY(-0.625rem) perspective(37.5rem) rotateX(10deg);
  }

  .my-mfp-slide-bottom.mfp-bg {
    opacity: 0;
    transition: opacity 0.2s ease-out;
  }

  .my-mfp-slide-bottom.mfp-ready.mfp-bg {
    opacity: 0.8;
  }
  .my-mfp-slide-bottom.mfp-removing.mfp-bg {
    opacity: 0;
  }

  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .fadeIn {
    -webkit-animation: fadeIn 0.6s;
    animation: fadeIn 0.6s;
  }

  @-webkit-keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  .fadeOut {
    -webkit-animation: fadeOut 0.8s;
    animation: fadeOut 0.8s;
  }

  .spinner-wrapper {
    position: fixed;
    z-index: 999999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #113448;
  }

  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3.75rem;
    height: 1.25rem;
    margin: -0.625rem 0 0 -1.875rem;
    text-align: center;
  }

  .spinner > div {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    background-color: #fff;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }
  }

  @media (min-width: 768px) {
    .p-heading {
      width: 85%;
      margin-right: auto;
      margin-left: auto;
    }

    .navbar-custom {
      padding: 2.125rem 1.5rem 2.125rem 2rem;
      box-shadow: none;
      background: transparent;
    }

    .navbar-custom .navbar-brand.logo-text {
      color: #fff;
    }

    .navbar-custom .navbar-nav {
      margin-top: 0;
      margin-bottom: 0;
    }

    .navbar-custom .nav-item .nav-link {
      padding: 0.25rem 0.75rem 0.25rem 0.75rem;
    }

    .navbar-custom .nav-item .nav-link:hover,
    .navbar-custom .nav-item .nav-link.active {
      color: #14bf98;
    }

    .navbar-custom.top-nav-collapse {
      padding: 0.375rem 1.5rem 0.375rem 2rem;
      box-shadow: 0 0.0625rem 0.375rem 0 rgba(0, 0, 0, 0.1);
      background-color: #113448;
    }

    .navbar-custom.top-nav-collapse .navbar-brand.logo-text {
      color: #fff;
    }

    .navbar-custom.top-nav-collapse .nav-item .nav-link {
      color: #fff;
    }

    .navbar-custom.top-nav-collapse .nav-item .nav-link:hover,
    .navbar-custom.top-nav-collapse .nav-item .nav-link.active {
      color: #14bf98;
    }

    .navbar-custom .dropdown-menu {
      padding-top: 1rem;
      padding-bottom: 1rem;
      border-top: 0.75rem solid rgba(0, 0, 0, 0);
      border-radius: 0.25rem;
      box-shadow: 0 0.25rem 0.375rem 0 rgba(0, 0, 0, 0.03);
    }

    .navbar-custom.top-nav-collapse .dropdown-menu {
      border-top: 0.125rem solid rgba(0, 0, 0, 0);
    }

    .navbar-custom .dropdown-item {
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
    }

    .navbar-custom .dropdown-items-divide-hr {
      width: 84%;
    }

    .header .header-content {
      padding-top: 13rem;
      padding-bottom: 7.5rem;
    }

    .header h1 {
      font: 700 3.5rem/4rem "Montserrat", sans-serif;
    }

    .accordion .accordion-container {
      max-width: 70%;
    }

    .tabs .tabs-container {
      max-width: 70%;
    }

    .tabs #tab-2 .list-unstyled {
      display: inline-block;
      width: 45%;
      margin-top: 0;
    }

    .tabs #tab-2 .list-unstyled.first {
      margin-right: 2rem;
    }

    .slider .swiper-button-prev {
      left: 1rem;
      width: 1.375rem;
      background-size: 1.375rem 2.125rem;
    }

    .slider .swiper-button-next {
      right: 1rem;
      width: 1.375rem;
      background-size: 1.375rem 2.125rem;
    }

    .filter .element-item {
      width: 25%;
    }

    .filter .element-item .element-item-overlay {
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .filter .element-item:hover .element-item-overlay {
      opacity: 1;
    }

    .counter #counter {
      text-align: left;
    }

    .counter #counter .cell {
    }

    .form-2 .list-unstyled li {
      display: inline-block;
      margin-right: 1rem;
    }

    .form-2 .list-unstyled .address {
      display: block;
    }

    .ex-header {
      padding-top: 11rem;
      padding-bottom: 9rem;
    }

    .ex-basic-2 .form-container {
      margin-top: 0.5rem;
    }
  }

  @media (min-width: 992px) {
    .p-heading {
      width: 65%;
    }

    .navbar-custom .social-icons {
      display: block;
      margin-left: 0.5rem;
    }

    .navbar-custom .fa-stack {
      margin-left: 0.375rem;
      font-size: 0.8125rem;
    }

    .navbar-custom .fa-stack .hexagon {
      width: 1.625rem;
      height: 1.625rem;
      position: absolute;
      background: url("../images/hexagon-green.svg") center center no-repeat;
      background-size: 1.625rem 1.625rem;
      transition: all 0.2s ease;
    }

    .navbar-custom .fa-stack:hover .hexagon {
      background: url("../images/hexagon-white.svg") center center no-repeat;
      background-size: 1.625rem 1.625rem;
    }

    .navbar-custom .fa-stack-1x {
      font-size: 0.6875rem;
      line-height: 1.625rem;
      color: #fff;
      transition: all 0.2s ease;
    }

    .navbar-custom .fa-stack:hover .fa-stack-1x {
      color: #14bf98;
    }

    .header .header-content {
      padding-top: 14rem;
      padding-bottom: 15rem;
    }

    .header .text-container {
      margin-top: 6.5rem;
    }

    .basic-1 {
      padding-top: 6.875rem;
    }

    .basic-1 .text-container {
      margin-bottom: 0;
    }

    .cards-1 .card {
      display: inline-block;
      max-width: 17.5rem;
      text-align: left;
      vertical-align: top;
    }

    .cards-1 div.card:nth-child(3n + 2) {
      margin-right: 2.5rem;
      margin-left: 2.5rem;
    }

    .cards-2 .card {
      max-width: 18.25rem;
      display: inline-block;
      vertical-align: top;
    }

    .cards-2 .col-lg-12 div.card:nth-child(3n + 2) {
      margin-right: 1.25rem;
      margin-left: 1.25rem;
    }

    .accordion {
      height: 34.625rem;
    }

    .accordion .area-1 {
      width: 50%;
      height: 100%;
      display: inline-block;
    }

    .accordion .area-2 {
      width: 50%;
      height: 100%;
      display: inline-block;
      vertical-align: top;
    }

    .accordion .accordion-container {
      max-width: 88%;
      margin-left: 2rem;
      padding-bottom: 0;
    }

    .accordion .accordion-title {
      width: 85%;
    }

    .tabs {
      height: 36.125rem;
    }

    .tabs .area-1 {
      width: 50%;
      height: 100%;
      display: inline-block;
      vertical-align: top;
    }

    .tabs .area-2 {
      width: 50%;
      height: 100%;
      display: inline-block;
    }

    .tabs .tabs-container {
      max-width: 88%;
      margin-left: 2rem;
      padding-top: 6.75rem;
      padding-bottom: 0;
    }

    .tabs .nav-tabs {
      justify-content: flex-start;
    }

    .form-1 {
      padding-top: 7rem;
    }

    .form-1 .text-container {
      margin-bottom: 0;
    }

    .lightbox-basic img {
      margin-bottom: 0;
    }

    .lightbox-basic h3 {
      margin-top: 0.375rem;
    }

    .lightbox-basic .btn-solid-reg,
    .lightbox-basic .btn-outline-reg {
      margin-bottom: 0;
    }

    .basic-2 .team-member {
      width: 12.75rem;
      max-width: 100%;
      margin-right: 0.75rem;
      margin-left: 0.75rem;
    }

    .counter .image-container {
      margin-bottom: 0;
    }

    .form-2 {
      padding-top: 6.875rem;
    }

    .form-2 .text-container {
      margin-bottom: 0;
    }

    .ex-header h1 {
      width: 80%;
      margin-right: auto;
      margin-left: auto;
    }

    .ex-basic-2 {
      padding-bottom: 5rem;
    }
  }

  @media (min-width: 1200px) {
    .p-heading {
      width: 55%;
    }

    .navbar-custom {
      padding-right: 5rem;
      padding-left: 5rem;
    }

    .navbar-custom.top-nav-collapse {
      padding-right: 5rem;
      padding-left: 5rem;
    }

    .header .header-content {
      padding-top: 14.75rem;
      padding-bottom: 17.5rem;
    }

    .basic-1 .text-container {
      margin-top: 1.875rem;
      margin-right: 3rem;
    }

    .cards-1 .card {
      max-width: 21rem;
    }

    .cards-1 div.card:nth-child(3n + 2) {
      margin-right: 2.875rem;
      margin-left: 2.875rem;
    }

    .cards-2 .card {
      max-width: 20.875rem;
    }

    .cards-2 .card-body {
      padding: 2.25rem 2.5rem 2.125rem 2.5rem;
    }

    .cards-2 .col-lg-12 div.card:nth-child(3n + 2) {
      margin-right: 3rem;
      margin-left: 3rem;
    }

    .accordion .accordion-container {
      max-width: 28rem;
      margin-left: 5rem;
    }

    .tabs .tabs-container {
      max-width: 28rem;
      margin-right: 5rem;
      margin-left: auto;
    }

    .tabs #tab-2 .media-wrapper.first {
      margin-right: 2rem;
    }

    .form-1 .text-container {
      margin-top: 1.375rem;
      margin-right: 1.75rem;
      margin-left: 3rem;
    }

    .form-1 form {
      margin-left: 1.75rem;
      margin-right: 3rem;
    }

    .filter .element-item {
      width: 17.3125rem;
      height: 16.875rem;
    }

    .filter .element-item .element-item-overlay span {
      top: 45%;
    }

    .basic-2 .team-member {
      width: 14.375rem;
      margin-right: 1.375rem;
      margin-left: 1.375rem;
    }

    .counter {
      padding-bottom: 6.125rem;
    }

    .counter .image-container {
      margin-right: 1.5rem;
    }

    .counter .text-container {
      margin-top: 0.375rem;
      margin-right: 2.5rem;
      margin-left: 2rem;
    }

    .form-2 .text-container {
      margin-top: 0.875rem;
      margin-right: 1.5rem;
    }

    .form-2 form {
      margin-left: 1.5rem;
    }

    .footer .text-container.about {
      margin-right: 5rem;
    }

    .ex-header h1 {
      width: 60%;
      margin-right: auto;
      margin-left: auto;
    }

    .ex-basic-2 .form-container {
      margin-left: 1.75rem;
    }
  }

  @media (min-width: 1600px) {
    .navbar-custom {
      padding-right: 12rem;
      padding-left: 12rem;
    }

    .navbar-custom.top-nav-collapse {
      padding-right: 12rem;
      padding-left: 12rem;
    }
  }
`;

export default Homepage;
