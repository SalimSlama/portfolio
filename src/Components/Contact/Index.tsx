import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
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
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submission triggered");

    if (form.current) {
      console.log("Form data:", formData);

      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        .then((result) => {
          console.log("Email sent successfully:", result.text);
          setStatus('Message envoyé avec succès !');
        }, (error) => {
          console.error("Email sending error:", error.text);
          setStatus('Erreur lors de l\'envoi du message. Veuillez réessayer.');
        });
    } else {
      console.error("Form reference is null");
    }
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactInformation>
          <i className="uil uil-envelope"></i>
          <div>
            <h3>Email</h3>
            <span>medsalimslama@gmail.com</span>
          </div>
        </ContactInformation>
                     
        <ContactForm ref={form} onSubmit={sendEmail}>
          <ContactInputs>
            <ContactContent>
              <ContactLabel>Nom & prénom</ContactLabel>
              <ContactInput type="text" name="user_name" value={formData.user_name} onChange={handleChange} required />
            </ContactContent>

            <ContactContent>
              <ContactLabel>E-mail</ContactLabel>
              <ContactInput type="email" name="user_email" value={formData.user_email} onChange={handleChange} required />
            </ContactContent>

            <ContactContent>
              <ContactLabel>Objet</ContactLabel>
              <ContactInput type="text" name="subject" value={formData.subject} onChange={handleChange} required />
            </ContactContent>

            <ContactContent>
              <ContactLabel>Message</ContactLabel>
              <ContactTextArea name="message" value={formData.message} onChange={handleChange} required></ContactTextArea>
            </ContactContent>

            <div>
              <ContactButton type="submit">
                Envoyer message
                <i className="uil uil-message"></i>
              </ContactButton>
            </div>
          </ContactInputs>
        </ContactForm>
        {status && <p>{status}</p>}
      </ContactContainer>
    </ContactSection>
  );
}
