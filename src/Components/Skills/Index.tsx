import React from "react";
import { Subtitle } from "../Subtitle/Subtitle";
import { Title } from "../Title/Title";

import{
  SkillsSection,
  SkillsContainer,
  SkillDiv,
  SkillIcon
} from './Style';


export default function Skills() {
  return (
    <SkillsSection id="skills">
      <Title>Compétences</Title>
      <Subtitle>Mon niveau technique</Subtitle>
      <SkillsContainer>
        <SkillDiv>
          <SkillIcon className="devicon-html5-plain colored"></SkillIcon>
        </SkillDiv>
        <SkillDiv>
          <SkillIcon className="devicon-css3-plain colored"></SkillIcon>
        </SkillDiv>
        <SkillDiv>
          <SkillIcon className="devicon-sass-original colored"></SkillIcon>
        </SkillDiv>

        <SkillDiv>
          <SkillIcon className="devicon-bootstrap-plain colored"></SkillIcon>
        </SkillDiv>
        <SkillDiv>
          <SkillIcon className="devicon-javascript-plain colored"></SkillIcon>
        </SkillDiv>
        <SkillDiv>
          <SkillIcon className="devicon-typescript-plain colored"></SkillIcon>
        </SkillDiv>

        <SkillDiv>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" alt="angular" />
        </SkillDiv>
        <SkillDiv>
          <SkillIcon className="devicon-nodejs-plain-wordmark colored"></SkillIcon>
        </SkillDiv>
        <SkillDiv>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original-wordmark.svg" alt="laravel"/>
        </SkillDiv>
        <SkillDiv>
          <SkillIcon className="devicon-mysql-plain-wordmark colored"></SkillIcon>
        </SkillDiv>
        <SkillDiv>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularmaterial/angularmaterial-original.svg" alt="material" />
        </SkillDiv>
        <SkillDiv>
          <SkillIcon className="devicon-amazonwebservices-plain-wordmark colored"></SkillIcon>
        </SkillDiv>
        <SkillDiv>
          <SkillIcon className="devicon-git-plain colored"></SkillIcon>
        </SkillDiv>
        <SkillDiv>
          <i style={{ fontSize: "1.5rem" }}> &lt;💅&gt;</i>
        </SkillDiv>
      </SkillsContainer>
    </SkillsSection>
  );
}