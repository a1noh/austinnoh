import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import withAuth from "@/hoc/withAuth";
import { Row, Col } from "reactstrap";
import PortfolioFrom from "@/components/PortfolioForm";

const PortfolioNew = ({ user, loading: userLoading }) => {
  return (
    <BaseLayout user={user} loading={userLoading}>
      <BasePage>
        <Row>
          <Col md="8">
            <PortfolioFrom></PortfolioFrom>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(PortfolioNew)("admin");
