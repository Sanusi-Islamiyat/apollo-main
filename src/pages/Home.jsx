import "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./Styles/Home.css";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero text-center text-white" data-aos="fade-up">
        <Container fluid className="main-con">
          <div className="row">
            <div className="col-12 col-md-6 col-sm-12 text-center hero-content" data-aos="fade-up">
              <h1>Secure and Reliable <br /> Criminal Record Verification</h1>
              <p className="hero-p">
                Empowering organizations with real-time, verified criminal records, ensuring <br /> 
                security, trust, and compliance while eliminating inefficiencies in background <br />
                checks, so you can make informed decisions with confidence 
              </p>
              <Link to="/get-started" className="btn get-started-btn">
                Get Started
              </Link>
            </div>
            <div className="col-12 col-md-6 col-sm-12 text-center text-md-start hero-img-cont" data-aos="fade-up">
              <img className="hero-img" src="/src/assets/trace.png" alt="hero-img" />
            </div>
          </div>
        </Container>
      </div>

      <section className="about text-center text-#212529" data-aos="fade-up">
        <Container>
          <div className="row">
            <div className="col-md-7">
              <h3 className="about-h">Your <span className="about-spa">reliable</span>  partner in <br />security compliance.</h3>
              
            </div>
            <div className="col-md-5">
              
              <p className="about-p">Our platform is built to meet the highest security standards, 
                  ensuring data protection, privacy, and compliance at every level. 
                  With advanced encryption and rigorous protocols in place,
                  we provide a secure, reliable, and trustworthy experience.</p>
            </div>
           
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features text-center text-black" data-aos="fade-up">
  <Container>
    <div className="row">
      <div className="col-md-4">
        <div className="card shadow-sm p-3">
          <div className="card-body">
            <h3 className="card-title">Real-Time Verification</h3>
            <p className="card-text">Gain instant access to accurate, up-to-date criminal records, 
              empowering you to make informed decisions with confidence and speed.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow-lg p-3">
          <div className="card-body">
            <h3 className="card-title">Secure & Compliant</h3>
            <p className="card-text">Our platform upholds the highest security standards with advanced encryption
               and strict compliance. We safeguard sensitive data from unauthorized access, ensuring confidentiality
               and trust. Continuous updates keep your information secure and protected at all times.</p>
            <img src="/src/assets/secure2.png" alt="" />
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow-sm p-3">
          <div className="card-body">
            <h3 className="card-title">Seamless Integration</h3>
            <p className="card-text">Easy to use with minimal setup required.</p>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>



 {/* Why Choose Us */}
<section className="why-apollo text-center text-#212529" data-aos="fade-up">
  <Container>
    <h2 className="wca-text">Why Choose Us?</h2>
    <div className="row align-items-center">
      
      {/* First - Text First, Image on Right */}
      <div className="col-md-6 text-start">
        <h3 className="why-title">Unmatched Accuracy</h3>
        <p className="why-text">
        We provide precise, thoroughly verified data, giving you the confidence to make
         informed decisions with absolute trust and clarity. No guesswork—just accuracy 
         you can rely on.
        </p>
      </div>
      <div className="col-md-6">
        <div className="card why-card">
          <img src="/src/assets/wca-one.jpg" className="card-img-top why-img" alt="Accuracy" />
        </div>
      </div>

      {/* Second - Image First, Text on Right */}
      <div className="col-md-6">
        <div className="card why-card">
          <img src="/src/assets/wca-two.jpg" className="card-img-top why-img" alt="Efficiency" />
        </div>
      </div>
      <div className="col-md-6 text-start">
        <h3 className="why-title">Efficiency & Speed</h3>
        <p className="why-text">
        Experience lightning-fast results with our seamless verification process—designed
         to save you time, eliminate delays, and keep your workflow moving effortlessly.
        </p>
      </div>

      {/* Third - Text First, Image on Right */}
      <div className="col-md-6 text-start">
        <h3 className="why-title">Built on Trust & Security</h3>
        <p className="why-text">
        We uphold the highest standards of security and reliability, keeping your data 
        protected with advanced encryption, strict compliance, and unwavering trust.
        </p>
      </div>
      <div className="col-md-6">
        <div className="card why-card">
          <img src="/src/assets/wca-three.jpg" className="card-img-top why-img" alt="Trust & Security" />
        </div>
      </div>
      
    </div>
  </Container>
</section>




      
      {/* Call-to-Action Section */}
<section className="cta text-#212529" data-aos="fade-up">
  <Container>
    <div className="row align-items-center">
      {/* Left - Heading */}
      <div className="col-md-6 text-start">
        <h2 className="cta-h">Ready to <span className="cta-spa">Get Started?</span></h2>
      </div>

      {/* Right - Paragraph and Button */}
      <div className="col-md-6 text-end cta-bx2">
        <p className="cta-p">Thousands of organizations rely on us to make their verification process 
          effortless and secure. With unmatched accuracy and speed, we help you cut through the hassle
           and get reliable results—every time. No stress, no delays—just verification done right.</p>
        <Link to="/get-started" className="btn get-started-btn mt-2 cta-btn">
          Sign Up Now
        </Link>
      </div>
    </div>
  </Container>
</section>

    </div>
  );
}

export default Home;
