import React from "react";

import {
  FooterSection,
  FooterBackground,
  FooterContainer,
  FooterLinks,
  FooterSocials,
  FooterCopy
} from './Style';

export default function Footer() {
  return (
    <FooterSection>
      <FooterBackground>
        <FooterContainer>
          <div>
            <h1>Med</h1>
            <span>FullStack developer</span>
          </div>

          <FooterLinks>
            <li>
              <a href="#home">Home </a>
            </li>

            <li>
              <a href="#portfolio">Portefeuille</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </FooterLinks>

          <FooterSocials>
            <a href="https://www.linkedin.com/in/mohamed-salim-slama-mouslisla/" target="_blank" rel="noreferrer">
              <i className="uil uil-linkedin-alt"></i>
            </a>

            <a href="https://github.com/SalimSlama" target="_blank" rel="noreferrer">
              <i className="uil uil-github-alt"></i>
            </a>

            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <i className="uil uil-instagram"></i>
            </a>
          </FooterSocials>
        </FooterContainer>

        <FooterCopy>&#169; Yuri Mendes. Todos os diretos reservados</FooterCopy>
      </FooterBackground>
    </FooterSection>
  );
}