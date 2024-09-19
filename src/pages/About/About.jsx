import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about.css";  // You can create a new about.css file or reuse home.css styles.

const About = () => {
  return (
    <section className="about_section">
      <Container>
        <Row>
          <Col md="12">
            <div className="main_heading">
              <h1>About Us</h1>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md="6">
            <div className="about_image">
              <img
                src="/assets/images/about/aboutimg.png"  
                alt="About Us"
                className="img-fluid"
              />
            </div>
          </Col>

          <Col md="6">
            <div className="about_content">
              <h2>Our Story</h2>
              <p>
                Welcome to our travel booking platform! We are passionate about 
                bringing you the best vacation packages and activities from around the world. 
                Whether you're looking for adventure, relaxation, or something in between, 
                we have the perfect travel solution for you.
              </p>
              <p>
                Founded with a love for exploring new destinations, our goal is to help 
                travelers find their next unforgettable experience. Our platform is designed 
                to make booking seamless, quick, and tailored to your preferences.
              </p>
              <a href="/contact" className="primaryBtn">Get in Touch</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
