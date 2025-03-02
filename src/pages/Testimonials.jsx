import "react";
import { Container } from "react-bootstrap";

const Testimonials = () => {
  return (
    <section className="testimonials text-center text-#212529" data-aos="fade-up">
      <Container>
        <h2>What Our Clients Say</h2>
        <div className="row">
          <div className="col-md-4">
            <p>This platform transformed our background check process! - Jane D.</p>
          </div>
          <div className="col-md-4">
            <p>Fast, reliable, and secure! Highly recommended. - Mark S.</p>
          </div>
          <div className="col-md-4">
            <p>A must-have for any organization dealing with verification. - Lisa K.</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
