import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles/About.css"
import { Container } from "react-bootstrap";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container py-5 main-cont-abt">
      <div className="col-lg-6 mb-4 mb-lg-0 bck-img" data-aos="fade-right">
        <h1 className="fw-bold text-white mb-3">About ApolloTrace.</h1>
      </div>
    
      {/* First Section - About Us */}
      <section className="about text-center text-#212529" data-aos="fade-up">
        <Container>
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="d-inline-flex align-items-center gap-2 about-us-header">
                <div className="bullet"></div>
                <p className="mb-0">About Us</p>
              </div>
              <h3 className="about-h">
                Your <span className="about-spa">trusted</span> partner in <br /> identity verification <br /> and security.
              </h3>
            </div>
            <div className="col-md-5">
              <p className="about-p">
                We are a platform dedicated to retrieving and verifying an individual’s criminal records (if any), safeguarding databases, and ensuring the authenticity of individuals. Through secure and efficient processes, we provide reliable background checks and identity verification, empowering businesses and institutions with accurate and trustworthy information.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Middle Section - Vision with Centered Heading */}
      <section className="about text-center text-#212529 my-5" data-aos="fade-up">
        <Container>
          <h3 className="about-h text-center mb-4">
            Creating a <span className="about-spa">future</span> where <br /> identity is secure and trusted.
          </h3>
          <div className="row align-items-center">
            <div className="col-md-7">
              <img
                src="https://i.pinimg.com/736x/db/77/54/db7754a9dcd06492b131a1dfef0766ec.jpg"
                alt="Vision"
                className="img-fluid rounded shadow abt-vision"
                data-aos="zoom-in"
              />
            </div>
            <div className="col-md-5 text-md-start">
              <p className="about-p">
                Our vision is to empower organizations and individuals by providing seamless, secure, and verifiable identity solutions. We aim to build a world where trust is enhanced through technology, ensuring a safer digital landscape for all.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Second Section - Styled Like the First */}
      <section className="about text-center text-#212529" data-aos="fade-up">
        <Container>
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="d-inline-flex align-items-center gap-2 about-us-header">
                <div className="bullet"></div>
                <p className="mb-0">Our Mission</p>
              </div>
              <h3 className="about-h">
                Enhancing <span className="about-spa">trust</span> through <br /> secure and verified <br /> identity solutions.
              </h3>
            </div>
            <div className="col-md-5">
              <p className="about-p">
                Our platform ensures that organizations have access to verified, tamper-proof identity records, enabling them to operate with confidence. We provide seamless security solutions that enhance trust and transparency in sensitive environments.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AboutUs;
