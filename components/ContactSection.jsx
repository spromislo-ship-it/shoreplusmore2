import { Mail, Phone, Waves } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="contact section">
      <div className="container contactGrid">
        <div>
          <p className="eyebrow">Contact Steve</p>
          <h2 className="sectionTitle">Ready to talk about the shore?</h2>
          <p>
            Reach out to discuss Ventnor, Margate, Longport, or your next move at the New Jersey shore.
          </p>
        </div>
        <div className="contactCard">
          <h3>Steve Promislo</h3>
          <p>Shore Plus More</p>
          <a href="mailto:stevep@shoreplusmore.com">
            <Mail size={20} /> stevep@shoreplusmore.com
          </a>
          <a href="tel:6093801989">
            <Phone size={20} /> 609-380-1989
          </a>
          <a href="https://shoreplusmore.com">
            <Waves size={20} /> shoreplusmore.com
          </a>
        </div>
      </div>
    </section>
  );
}
