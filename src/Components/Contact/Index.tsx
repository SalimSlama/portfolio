import React from "react";
import { Subtitle } from "../Subtitle/Subtitle";
import { Title } from "../Title/Title";
import {
  ContactSection,
  ContactContainer,
  ContactInformation,
  ContactForm,
  ContactInputs,
  ContactContent,
  ContactLabel,
  ContactInput,
  ContactTextArea,
  ContactButton,
} from './Style';

export default function Contact(): JSX.Element {
  return (
    <ContactSection id="contact">
      <Title>Contact</Title>
      <Subtitle>contacter</Subtitle>
      <ContactContainer>
        <div>    
          <ContactInformation>
            <i className="uil uil-envelope"></i>
    
            <div>
              <h3>Email</h3>
              <span>medsalimslama@gmail.com</span>
            </div>
          </ContactInformation>
        </div>
                     
        <ContactForm action="">
          <ContactInputs>
            <ContactContent>
              <ContactLabel >Nom & prénom</ContactLabel>
              <ContactInput type="text"/>
            </ContactContent>

            <ContactContent>
              <ContactLabel >E-mail</ContactLabel>
              <ContactInput type="email"/>
            </ContactContent>

            <ContactContent>
              <ContactLabel >Objet</ContactLabel>
              <ContactInput type="text"/>
            </ContactContent>

            <ContactContent>
              <ContactLabel >Message</ContactLabel>
              <ContactTextArea name="message" id="message" cols={0} rows={0}></ContactTextArea>
            </ContactContent>

            <div>
              <ContactButton>
                Envoyer message
                <i className="uil uil-message"></i>
              </ContactButton>
            </div>
          </ContactInputs>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  )
}