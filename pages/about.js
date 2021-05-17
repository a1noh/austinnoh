import { useEffect } from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import { Row, Col } from "reactstrap";

const About = () => {
  const { data, loading } = useGetUser();

  useEffect(() => {
    return () => {
      window.__isAboutLoaded = true;
    };
  });

  const createFadeInClass = () => {
    if (typeof window !== "undefined") {
      return window.__isAboutLoaded ? "" : "fadein";
    }

    return "fadein";
  };

  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage className="about-page">
        <Row className="mt-5">
          <Col md="6">
            <div className="left-side">
              <h1 className={`title fadein`}>Hello, Welcome</h1>
              <h4 className={`subtitle fadein`}>To About Page</h4>
              <p className={`subsubTitle fadein`}>
                Feel free to read short description about me.
              </p>
            </div>
          </Col>
          <Col md="6">
            <div className={`content fadein`}>
              <p>My name is Austin NOh and I am from Purdue. </p>
              <p>
                I am studying computer science.I am studying computer science.I
                am studying computer science.I am studying computer science. I
                am studying computer science.I am studying computer science.I am
                studying computer science.I am studying computer science. I am
                studying computer science.I am studying computer science.
              </p>
              <p>
                I am studying computer science.I am studying computer science.I
                am studying computer science.I am studying computer science. I
                am studying computer science.I am studying computer science.I am
                studying computer science.I am studying computer science.
              </p>
            </div>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default About;
