import React from "react";
import "../components/Breadcrumbs/breadcrumbs.css"
import { NavLink } from "react-router-dom";
import { Breadcrumb, Container, Row } from "react-bootstrap";

const Breadcrumbs = (props) => {
  return (
    <div className="inner-banner-wrap">
      <div className="inner-banner-container">
        <Container>
          <div className="inner-banner-container">
            <h1 className="fs-1 text -white text -uppercase font-bold"> {props.title} </h1>
          </div>
        </Container>
      </div>
      <div className="navbar-link">
        <Container>
          <Row>
            <Breadcrumbs>
              <Breadcrumb.Item active>
                <NavLink to="/"><i className="bi bi-house-door-fill me-1"></i> Home </NavLink>
              </Breadcrumb.Item>
            </Breadcrumbs>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Breadcrumbs;