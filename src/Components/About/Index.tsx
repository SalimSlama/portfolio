import React from "react";
import { Subtitle } from "../Subtitle/Subtitle";
import { Title } from "../Title/Title";

import { AboutSection, AboutContainer, AboutData, AboutButtons } from "./Style";

export default function About() {
  return (
    <AboutSection id="about">
      <Title>À propos de moi</Title>
      <Subtitle>Mon introduction</Subtitle>
      <AboutContainer>
        <AboutData>
          <p>
            En tant qu'ingénieur en informatique spécialisé dans le
            développement web, mon ambition ne cesse pas d'explorer de nouvelles
            opportunités passionnantes. Mon intérêt profond pour les nouvelles
            technologies me pousse à rester constamment à jour, me permettant
            ainsi de contribuer de manière significative à des projets
            novateurs. Je suis animé par la recherche de défis stimulants qui me
            permettront de mettre en œuvre mes compétences et d'apporter une
            valeur ajoutée dans un environnement professionnel dynamique. Prêt à
            relever de nouveaux défis, je suis convaincu que mon expertise et ma
            passion pour l'innovation seront des atouts précieux pour toute
            organisation à la recherche d'un professionnel engagé et passionné.{" "}
          </p>

          <AboutButtons>
            <a
              href="https://sscm.com.tn/CV%20Mohamed%20salim%20slama.pdf"
              download
            >
              View Cv
              <i className="uil uil-eye"></i>
            </a>
          </AboutButtons>
        </AboutData>
      </AboutContainer>
    </AboutSection>
  );
}
