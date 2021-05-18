import BaseLayout from "@/components/layouts/BaseLayout";
import { Container, Row, Col } from "reactstrap";
import Typed from "react-typed";
import Particle from "@/components/Particles";
import BasePage from "@/components/BasePage";
import Socialmedia from "@/components/SocialMedia";
import { useGetUser } from "@/actions/user";

const ROLES = ["Software Engineer", "Psych Student", "CS Student"];
const Index = () => {
  const { data, error, loading } = useGetUser();

  return (
    <BaseLayout
      user={data}
      navClass="transparent"
      loading={loading}
      className="cover"
    >
      <BasePage indexPage title="Austin Noh">
        <div className="main-section">
          <div className="background-image">
            <Particle />
          </div>

          <Container>
            <Row>
              <div className="hero-welcome-wrapper">
                <div className="hero-welcome-align-left">
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
              </div>
              <Socialmedia />
            </Row>
          </Container>
        </div>
      </BasePage>
    </BaseLayout>
  );
};

export default Index;
