import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

export class Services extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ServicesContainer>
        <div id="socials" className="cards-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">SOCIALS</div>
                <h2 style={{color: 'white'}}>
                  Feel free to follow any of my social media pages! I love
                  getting closer to my fans!
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-image">
                    <img
                      className="img-fluid"
                      src="images/services-1.jpg"
                      alt="alternative"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Twitch</h3>
                    <p style={{color: 'black'}}>
                      Live stream platform for gaming, coding and safe space for
                      my fellow nerd
                    </p>
                    <ul className="list-unstyled li-space-lg">
                      <li className="media">
                        <i className="fas fa-square"></i>
                        <div className="media-body">
                          Summoner name - thats better
                        </div>
                      </li>
                      <li className="media">
                        <i className="fas fa-square"></i>
                        <div className="media-body">Rank - Silver 1</div>
                      </li>
                    </ul>
                  </div>
                  <div className="button-container">
                    <a
                      className="btn-solid-reg page-scroll"
                      href="https://www.twitch.tv/coder_guy"
                    >
                      DETAILS
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <img
                      className="img-fluid"
                      src="images/services-2.jpg"
                      alt="alternative"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Facebook & Instagram</h3>
                    <p style={{color: 'black'}}>
                      Connect with me and let me know about all of your ideas
                    </p>
                    <ul className="list-unstyled li-space-lg">
                      <li className="media">
                        <i className="fas fa-square"></i>
                        <div className="media-body">
                          facebook.com/KanekiERamos
                        </div>
                      </li>
                      <li className="media">
                        <i className="fas fa-square"></i>
                        <div className="media-body">
                          instagram.com/kanekiramos_/
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="button-container">
                    <a
                      className="btn-solid-reg page-scroll"
                      href="https://www.facebook.com/KanekiERamos"
                    >
                      DETAILS
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <img
                      className="img-fluid"
                      src="images/services-3.jpg"
                      alt="alternative"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">GitHub</h3>
                    <p style={{color: 'black'}}>
                      Let's connect and share ideas. The fun has only just begun!
                    </p>
                    <ul className="list-unstyled li-space-lg">
                      <li className="media">
                        <i className="fas fa-square"></i>
                        <div className="media-body">
                          https://github.com/Orkidz
                        </div>
                      </li>
                      <li className="media">
                        <i className="fas fa-square"></i>
                        <div className="media-body">
                          Mike Smith - Coming Soon
                        </div>
                      </li>
                      <li className="media">
                        <i className="fas fa-square"></i>
                        <div className="media-body">
                          Project Ideas? - Coming Soon
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="button-container">
                    <a
                      className="btn-solid-reg page-scroll"
                      href="https://github.com/Orkidz"
                    >
                      DETAILS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ServicesContainer>
    );
  }
}

const ServicesContainer = styled.div`
  .cards-2 {
    border-style: solid;
    border-color: aqua;
    padding-top: 6.625rem;
    padding-bottom: 1.25rem;
    background-color: black;
  }

  .cards-2 .section-title {
    margin-bottom: 0.5rem;
    text-align: center;
  }

  .cards-2 h2 {
    margin-bottom: 3.25rem;
    text-align: center;
  }

  .cards-2 .card {
    margin-bottom: 5.625rem;
    border: none;
    background-color: transparent;
  }

  .cards-2 .card-image img {
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
  }

  .cards-2 .card-body {
    padding: 2.25rem 2rem 2.125rem 2rem;
    border: 1px solid #ebe8e8;
    border-bottom-left-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
    background-color: #fff;
  }

  .cards-2 h3 {
    margin-bottom: 0.75rem;
    text-align: center;
  }

  .cards-2 .list-unstyled {
    margin-bottom: 1.5rem;
  }

  .cards-2 .list-unstyled .fas {
    color: #14bf98;
    font-size: 0.5rem;
    line-height: 1.375rem;
  }

  .cards-2 .list-unstyled .media-body {
    margin-left: 0.625rem;
  }

  .cards-2 .price {
    margin-bottom: 0.25rem;
    color: #484a46;
    font: 700 1rem/1.5rem "Montserrat", sans-serif;
    text-align: center;
  }

  .cards-2 .price span {
    color: #14bf98;
  }

  .cards-2 .button-container {
    margin-top: -1.375rem;
    text-align: center;
  }

  .cards-2 .btn-solid-reg:hover {
    background-color: #fff;
  }
`;

export default Services;
