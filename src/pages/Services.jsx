import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles/Services.css"
import { Container } from "react-bootstrap"; 

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container-fluid py-5 main-cont-serv">
      {/* Hero Section */}
      <div className="text-center mb-5 bck-img-serv" data-aos="fade-down">
      <h1 className="fw-bold text-white mb-3">Our Services.</h1>
      </div>

     
      <Container>
  <div className="row g-4 justify-content-center text-#212529 ">
    {[{ title: "Criminal Background Check", img: "/src/assets/hugeicons_user-id-verification.png", desc: "Retrieve comprehensive criminal history records to ensure safety and compliance for businesses and individuals." },
      { title: "Database Security", img: "/src/assets/iconoir_database-stats.png", desc: "Secure sensitive criminal record databases with advanced encryption and access control measures." },
      { title: "Fraud Detection & Prevention", img: "/src/assets/material-symbols-light_data-loss-prevention-outline.png", desc: "Identify and prevent fraudulent activities by analyzing criminal records and suspicious behavior patterns." }
    ].map((service, index) => (
      <div className="col-md-4 col-sm-6 d-flex align-items-stretch" data-aos="fade-up" key={index} data-aos-delay={index * 100}>
        <div className="service-card">
          <div className="service-card-inner">
            <div className="service-card-front bg-white p-4 text-center rounded h-100 d-flex flex-column">
              <div className="rounded-circle d-flex align-items-center justify-content-center"style={{ width: "48px", height: "48px", borderRadius: "50%", background: "linear-gradient(135deg,rgb(6, 32, 88),rgb(57, 108, 190))", margin: "0 auto" }}>
                <img src={service.img} alt={service.title} style={{ width: "44px", height: "44px" }} />
              </div>
              <h4>{service.title}</h4>
            </div>
            <div className="service-card-back p-4 text-center rounded h-100 d-flex flex-column">
              <p className="flex-grow-1">{service.desc}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

  <div className="row g-4 justify-content-center mt-3">
    {[{ title: "Secure Legal Transactions", img: "/src/assets/hugeicons_transaction.png", desc: "Verify legal history and prevent risk by accessing up-to-date criminal records and court cases." },
      { title: "Cybercrime Analysis", img: "/src/assets/grommet-icons_threats.png", desc: "Detect and analyze digital threats by tracking cybercriminal records and activity logs." }
    ].map((service, index) => (
      <div className="col-md-5 col-sm-6 d-flex align-items-stretch" data-aos="fade-up" key={index} data-aos-delay={index * 100}>
        <div className="service-card">
          <div className="service-card-inner">
            <div className="service-card-front bg-white p-4 text-center rounded h-100 d-flex flex-column">
              <div className="rounded-circle d-flex align-items-center justify-content-center"style={{ width: "48px", height: "48px", borderRadius: "50%", background: "linear-gradient(135deg,rgb(6, 32, 88),rgb(57, 108, 190))", margin: "0 auto" }}>
                <img src={service.img} alt={service.title} style={{ width: "44px", height: "44px" }} />
              </div>
              <h4>{service.title}</h4>
            </div>
            <div className="service-card-back p-4 text-center rounded h-100 d-flex flex-column">
              <p className="flex-grow-1">{service.desc}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

  <div className="row g-4 justify-content-center mt-3">
    <div className="col-md-6 col-sm-8 d-flex align-items-stretch" data-aos="fade-up">
      <div className="service-card">
        <div className="service-card-inner">
          <div className="service-card-front bg-white p-4 text-center rounded h-100 d-flex flex-column">
            <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: "48px", height: "48px", borderRadius: "50%", background: "linear-gradient(135deg,rgb(6, 32, 88),rgb(57, 108, 190))", margin: "0 auto" }}>
              <img src="/src/assets/hugeicons_store-02.png" alt="Cloud Security" style={{ width: "44px", height: "44px" }} />
            </div>
            <h4>Cloud-Based Criminal Record Storage</h4>
          </div>
          <div className="service-card-back p-4 text-center rounded h-100 d-flex flex-column">
            <p className="flex-grow-1">Ensure secure and instant access to criminal records through cloud-based storage with encryption and restricted access controls.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</Container>

<div className="work-process">
  <h2 className="section-title">How It Works</h2>
  <p className="section-subtitle">
    A simple step-by-step breakdown of our process to fetch and verify criminal records efficiently.
  </p>

  <div className="process-container">
    {[
      { step: "Data Collection", desc: "Gathering necessary details securely." },
      { step: "Verification", desc: "Cross-checking with official databases." },
      { step: "Analysis", desc: "Processing and analyzing the retrieved data." },
      { step: "Report Delivery", desc: "Providing accurate verification results." }
    ].map((item, index) => (
      <div className="process-step" key={index}>
        <div className="circle">{index + 1}</div>
        <h4>{item.step}</h4>
        <p>{item.desc}</p>
        {index !== 3 && <div className="line"></div>}
      </div>
    ))}
  </div>
</div>





    </div>
  );
}; 

export default Services;
