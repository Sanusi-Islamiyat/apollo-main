import "react";
import "aos/dist/aos.css";

function Contact() {
  return (
    <div className="container text-center" data-aos="fade-up">
      <h1>Contact Us</h1>
      <p>Reach out to us via email.</p>
      <a href="mailto:info@example.com" className="btn btn-primary">Email Us</a>
    </div>
  );
}

export default Contact;