import NavbarLayout from "@components/layout/NavbarLayout";
import ContactForm from "@components/Contact/ContactForm";

import "@components/Contact/Contact.css";

export default function Contact() {
  return (
    <NavbarLayout>
      <main>
        <section className="contact-form">
          <h1>
            Contact <span>Us</span>
          </h1>
          <ContactForm />
        </section>
      </main>
    </NavbarLayout>
  );
}
