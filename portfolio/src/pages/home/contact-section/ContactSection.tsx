import { CONTACT } from "../../../data/contact";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import "./ContactSection.css";

export function ContactSection() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">{CONTACT.title}</h2>
        <div className="contact-container">
          <ContactInfo contact={CONTACT} />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
