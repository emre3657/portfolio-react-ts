import { type Contact } from "../../../data/contact";

export function ContactInfo({ contact }: { contact: Contact }) {
  return (
    <div className="contact-info">
      <p>{contact.description}</p>

      <div className="contact-item">
        <div className="contact-icon email">
          <i className="fa-regular fa-envelope"></i>
        </div>
        <div>
          <h3>Email</h3>
          <p>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-icon linkedin">
          <i className="fa-brands fa-linkedin-in"></i>
        </div>
        <div>
          <h3>LinkedIn</h3>
          <p>
            <a
              href={`https://${contact.linkedInAccount}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.linkedInAccount}
            </a>
          </p>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-icon">
          <i className="fa-solid fa-location-dot"></i>
        </div>
        <div>
          <h3>Konum</h3>
          <p>{contact.location}</p>
        </div>
      </div>
    </div>
  );
}
