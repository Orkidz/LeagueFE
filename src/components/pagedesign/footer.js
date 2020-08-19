import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      

      <div className="copyright">
        <p className="p-small">
          Copyright © 2020 <a href="">Kaneki Enrique Ramos</a> - All rights
          reserved
        </p>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  .footer {
    padding-top: 5rem;
    background-color: black;
    
  }

  .footer .text-container {
    margin-bottom: 2.25rem;
  }

  .footer h4 {
    margin-bottom: 0.75rem;
    color: #fff;
  }

  .footer p,
  .footer ul {
    font-size: 0.875rem;
    line-height: 1.375rem;
  }

  .copyright {
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    background-color: #113448;
    text-align: center;
    border-style: solid;
    border-color: aqua;
  }
`;

export default Footer;
