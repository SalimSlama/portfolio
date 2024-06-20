import React, { useState } from "react";
import {
  HeaderSection,
  NavContainer,
  NavLogo,
  NavMenu,
  NavList,
  NavLink,
  NavIcon,
  NavCloseButton,
  NavClose,
  NavButtons,
  NavToggle
} from './Style';

import medImage  from '../../Assets/Img/utilisateur.png';


export default function Header(): JSX.Element {

  const [open, setOpen] = useState<boolean>(true);

  return (
    <HeaderSection id="header">     
      <NavContainer>
        <NavLogo>
        <img src={medImage} alt="Med" />
        </NavLogo>
        <NavMenu open={open}>
          <NavList>
            <li>
              <NavLink href="#home">
                <NavIcon className="uil uil-estate"/>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink href="#about">
                <NavIcon className="uil uil-user"/>
                À propos
              </NavLink>
            </li>

            <li>
              <NavLink href="#skills">
                <NavIcon className="uil uil-file"/>
                Compétences
              </NavLink>
            </li>

            <li>
              <NavLink href="#portfolio">
                <NavIcon className="uil uil-scenery"/>
                Portefeuille
              </NavLink>
            </li>

            <li>
              <NavLink href="#contact">
                <NavIcon className="uil uil-message"/>
                Contact
              </NavLink>
            </li>
          </NavList>
          <NavCloseButton onClick={() => setOpen(true)}>
            <NavClose className="uil uil-times"/>
          </NavCloseButton>
        </NavMenu>
        <NavButtons>
            <NavToggle onClick={() => setOpen(false)}>
              <i className="uil uil-apps"/>
            </NavToggle>
        </NavButtons>
      </NavContainer>
    </HeaderSection>
  )
}