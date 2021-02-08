import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { Container, Row, Col } from "reactstrap";
import Typed from "react-typed";
import Particle from "../components/shared/Particles";

const ROLES = ["Software Engineer", "Psych Student", "CS Student"];
class Index extends React.Component {
  render() {
    return (
      <BaseLayout className="cover">
        <div className="background-image">
          <Particle></Particle>
        </div>
        <div className="main-section">
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> CS Student at Purdue University </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img className="image" src="/images/blak.jpg" />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <div>
                <div className="hero-welcome-text">
                  <h1>Hello, I am</h1>
                </div>
                <Typed
                  loop
                  strings={ROLES}
                  typeSpeed={70}
                  backSpeed={70}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                ></Typed>
                <div className="hero-welcome-bio">
                  <h1>AUSTIN NOH</h1>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    );
  }
}
export default Index;
