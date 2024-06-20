import React from "react";
import PromodoroImg from "../../Assets/Img/image.png";
import PromodoroImg1 from "../../Assets/Img/image1.jpeg";

import {
  PortfolioSection,
  PortfolioContainer,
  PortfolioContent,
  PortfolioImg,
  PortfolioContentTitle,
  PortfolioContentDescription,
} from "./Style";

import { Title } from "../Title/Title";
import { Subtitle } from "../Subtitle/Subtitle";
import { Button } from "../Button/Button";

export default function Portfolio() {
  return (
    <PortfolioSection id="portfolio">
      <Title>portfolio</Title>
      <Subtitle>Mes travaux récents</Subtitle>

      <PortfolioContainer>
        <PortfolioContent>
          <PortfolioImg src={PromodoroImg} />
          <PortfolioContentTitle>mycloudtaxi</PortfolioContentTitle>
          <PortfolioContentDescription>
            LA SUITE LOGICIELLE POUR TAXIS <br />
            Remplacez votre patchwork d'applications, anciens systèmes et autres
            processus papiers par un seul et unique système d'exploitation
            développé et maintenu par l'expert français du taxi. Logiciel conçu
            exclusivement pour votre métier : Taxi
          </PortfolioContentDescription>
          <a
            href="https://mycloudtaxi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              Consulter
              <i className="uil uil-arrow-right" />
            </Button>
          </a>
        </PortfolioContent>

        <PortfolioContent>
         <PortfolioImg src={PromodoroImg1} />
         <PortfolioContentTitle>facture.cc</PortfolioContentTitle>
         <PortfolioContentDescription>
            LA SUITE LOGICIELLE POUR VOS FACTURES <br />
            Eliminer tous les paperasses et gérer vos devis, vos factures et mêmes vos clients en une simple clique.
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </PortfolioContentDescription>
          <a
            href="https://facture.cc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              Consulter
              <i className="uil uil-arrow-right" />
            </Button>
          </a>
        </PortfolioContent>

        <PortfolioContent>
          <p className="description">bientôt !</p>
        </PortfolioContent>
      </PortfolioContainer>
    </PortfolioSection>
  );
}
