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
      <BasePage title="About Me - Austin Noh" className="about-page">
        <Row className="mt-5">
          <Col md="6">
            <div className="left-side">
              <h1 className={`title fadein`}>Hello, Welcome</h1>
              <h4 className={`subtitle fadein`}>My name is Austin</h4>
              <p className={`subsubTitle fadein`}>
                I am currently a senior at Purdue University. I will be
                graduating in Decemeber 2021.
              </p>
            </div>
          </Col>
          <Col md="6">
            <div className={`content fadein`}>
              <p>Here is a short introduction about myself. </p>
              <p>
                When we decide on our majors in college, how do we really know
                what we want to do for the rest of our lives at age 19? I
                started my journey as a psychology major at Purdue University. I
                spent some time working at the National Human Rights Commission
                of Korea working in different sectors. Ironically, my experience
                there helped me realize psychology may not be for me. I realized
                I wanted to develop a hard skill and I said 'why not
                programming?' Now, I'm a senior at Purdue University expected to
                graduate with a Computer Science degree in December 2021. It was
                definitely not an easy trip getting here and it's only the
                beginning.{" "}
              </p>
              <p>
                I am a student at Purdue University looking for a New grad
                position in software engineering. I have previous internship
                experience at Kroger as a Software Developer Intern. I worked on
                the team that was migrating Kroger's services to Kubernetes. I
                familiarized myself with CI/CD and agile development
                environments. I also will have experience as a Software
                Developer Intern at Walmart Global Tech this summer. I will be
                working on the Health and Wellness team creating platforms for
                Walmart's services such as vaccine distribution. I will be
                working with React/Springboot stack gaining experience as a
                full-stack developer!
              </p>
            </div>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default About;
